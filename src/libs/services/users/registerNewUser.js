export const registerNewUser = async ({ login, password }) => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MEDICATION_API}/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password
      })
    });

    if (!res.ok) {
      throw new Error(res.status);
    }

    // Use res.json() if you expect a JSON response
    const data = await res.text(); // replace it with res.json() if the response is a json
    console.log(data); // Success code goes here
    return data;

  } catch (error) {
    console.error(`An error occurred: ${error}`); // Error code goes here
  }
};