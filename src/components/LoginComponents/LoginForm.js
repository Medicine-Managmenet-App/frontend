`use client`;

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import illustration from '../../../public/illustration.png';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const user = await signIn('credentials', {
      ...credentials,
      redirect: false
    });

    console.log(user);

    if (user.error) {
      setLoading(false);
      setError(user.error);
    } else {
      setLoading(false);
      router.push('/');
    }
  };

  return (
    <div className="flex bg-primary-reverse border-round-md p-3 shadow-4 w-10 xl:w-4">
      <div className="flex flex-column align-items-center w-full">
        <h2 className="mt-4 mb-6 text-3xl xl:text-5xl font-bold">Login</h2>
        <div className="mb-4">
          <span className="p-float-label mb-5">
            <InputText
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label">
            <Password
              inputId="password"
              value={credentials.password}
              feedback={false}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <label htmlFor="password">Password</label>
          </span>
        </div>
        {error && <p className="text-red-500 mb-3">Something went wrong</p>}
        {!loading && (
          <Button
            label="Submit"
            className="mb-4"
            onClick={handleSubmit}
            disabled={credentials.username === '' || credentials.password === ''}
          />
        )}
        {loading && (
          <div className="flex gap-2 align-items-center mb-3">
            {' '}
            <p>Logging in...</p>
            <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
          </div>
        )}
        <p className="text-900 w-10 text-center text-xs">
          Don{`'`}t have an account yet? <br />
          Click{' '}
          <Link href={'/register'} className="text-primary">
            here
          </Link>{' '}
          to register
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
