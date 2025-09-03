// lib/isrFetch.js

export async function isrFetch(endpoints, revalidateInSeconds = 604800) {
  const endpointList = Array.isArray(endpoints) ? endpoints : [endpoints];

  const responses = await Promise.all(
    endpointList.map(endpoint =>
      fetch(`${process.env.NEXT_PUBLIC_API}${endpoint}`, {
        method: 'GET',
        headers: {
          'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
        },
        next: { revalidate: revalidateInSeconds },
      })
    )
  );

  const allOk = responses.every(res => res.ok);
  if (!allOk) throw new Error('One or more ISR fetches failed');

  const data = await Promise.all(responses.map(res => res.json()));

  const result = {};
  endpointList.forEach((endpoint, index) => {
    result[endpoint] = data[index];
  });

  return result;
}





// import { isrFetch } from "@/lib/isrFetch";

// const Page = async () => {
//   const content = await isrFetch(['vision', 'faq'], 2592000); // 30 days

//   return <div>{content.faq.length} FAQs loaded</div>;
// };

