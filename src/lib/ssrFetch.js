function fetchWithTimeout(url, options = {}, timeout = 15000, retries = 3) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (err) {
      if (attempt === retries) {
        clearTimeout(id);
        throw err;
      }
      console.warn(`Retrying fetch for ${url} (Attempt ${attempt + 1}/${retries})`);
      // Wait 1 second before retrying
      return new Promise(resolve => setTimeout(resolve, 1000)).then(() => 
        fetchWithTimeout(url, options, timeout, 1)
      );
    }
  }
}

function buildQueryString(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, value);
    }
  });

  return query.toString() ? `?${query.toString()}` : '';
}

export async function ssrFetch(endpoints, globalOptions = {}) {
  const endpointList = Array.isArray(endpoints) ? endpoints : [endpoints];

  const responses = await Promise.all(
    endpointList.map(async (item) => {
      let endpoint = '';
      let queryString = '';

      if (typeof item === 'string') {
        // Split endpoint and query if present
        const [base, query = ''] = item.split('?');
        endpoint = base;
        queryString = query ? `?${query}` : '';
      } else if (typeof item === 'object') {
        endpoint = item.endpoint;
        queryString = buildQueryString(item.query || {});
      }

      const fullUrl = `${process.env.NEXT_PUBLIC_API}${endpoint}${queryString}`;

      try {
        const response = await fetchWithTimeout(
          fullUrl,
          {
            method: 'GET',
            headers: {
              'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
              'Content-Type': 'application/json',
            },
            // Removed cache: 'no-store' to enable SSG/ISR
            ...globalOptions,
          },
          15000, // Increased timeout
          3 // Number of retries
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`SSR Fetch failed for ${fullUrl}: ${response.status} ${response.statusText}`, { errorText });
          return null;
        }

        return await response.json();
      } catch (err) {
        console.error(`Error fetching ${fullUrl}:`, err.message, { endpoint, queryString, options: globalOptions });
        return null;
      }
    })
  );

  const result = {};
  endpointList.forEach((item, index) => {
    const key = typeof item === 'string' ? item.split('?')[0] : item.endpoint;
    result[key] = responses[index];
  });

  return result;
}