export const csrGetNavigation = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}navigation`, {
    headers: {
      'Content-Type': 'application/json',
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch navigation');
  }

  const data = await res.json();
  return data.data;
};