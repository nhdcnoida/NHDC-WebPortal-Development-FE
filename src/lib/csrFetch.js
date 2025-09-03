// lib/csrFetch.js

export async function csrFetch(endpoints) {
  const endpointList = Array.isArray(endpoints) ? endpoints : [endpoints];

  const responses = await Promise.all(
    endpointList.map(endpoint =>
      fetch(`${process.env.NEXT_PUBLIC_API}${endpoint}`, {
        method: 'GET',
        headers: {
          'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
        },
      })
    )
  );

 
  const allOk = responses.every(res => res.ok);
  if (!allOk) throw new Error('One or more CSR fetches failed');

  const data = await Promise.all(responses.map(res => res.json()));

  const result = {};
  endpointList.forEach((endpoint, index) => {
    result[endpoint] = data[index];
  });

  return result;
}



// 'use client';
// import { useEffect, useState } from "react";
// import { csrFetch } from "@/lib/csrFetch";

// export default function InfoCardList() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     csrFetch(['cards', 'facts'])
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   return <div>{JSON.stringify(data.cards)}</div>;
// }
