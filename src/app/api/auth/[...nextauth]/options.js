import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-username'
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'yourpassword'
        }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_MEDICATION_API}login`, {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
          },
          body: JSON.stringify({
            login: credentials.username,
            password: credentials.password
          })
        });

        const user = await res.json();

        if (res.ok && user) {
          console.log(res.status);
          console.log(user);
          return user;
        } else {
          console.log(res.status);
          throw new Error('Invalid username or password');
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  secret: process.env.NEXTAUTH_SECRET
};
