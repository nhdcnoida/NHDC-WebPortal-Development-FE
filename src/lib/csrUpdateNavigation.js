// lib/csrUpdateNavigation.js

export async function csrUpdateNavigation(endpoint, id, payload) {
  const url = `${process.env.NEXT_PUBLIC_API}${endpoint}/${id}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2RlYjMwYzZmY2UyMWExYTRiZjA0MiIsImlhdCI6MTc1MzI1NTI4NCwiZXhwIjoxNzUzODYwMDg0fQ.ErSXrEh_CKhiUCLQ04Du5EUvsyJ-hoRJMgE_8qozRpg`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to UPDATE data: ${error}`);
  }

  return res.json();
}
