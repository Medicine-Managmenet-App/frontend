export const registerNewUser = async ({ login, password }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEDICATION_API}users`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login,
      password
    })
  });

  if (!res.ok) {
    console.log(res.json());
    throw new Error(res.status);
  }

  return await res.json();
};
