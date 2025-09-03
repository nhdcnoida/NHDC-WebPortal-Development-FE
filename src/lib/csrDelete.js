// lib/csrDelete.js

export async function csrDelete(endpoint) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2RlYjMwYzZmY2UyMWExYTRiZjA0MiIsImlhdCI6MTc1MzI1NTI4NCwiZXhwIjoxNzUzODYwMDg0fQ.ErSXrEh_CKhiUCLQ04Du5EUvsyJ-hoRJMgE_8qozRpg`,

      },
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Delete failed: ${error}`);
    }

    return true;
  } catch (err) {
    console.error('Delete Error:', err);
    throw err;
  }
}
