`use client`;

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import illustration from '../../../public/illustration.png';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex bg-primary-reverse border-round-md p-3 shadow-4 w-9 xl:w-5">
      <Image
        src={illustration}
        alt="Medicine image"
        width={400}
        height={400}
        className="hidden xl:inline border-round-md border-solid border-blue-400 bg-blue-400 w-6"
      />
      <div className="flex flex-column align-items-center w-12 xl:w-6">
        <h2 className="mt-4 mb-6 text-3xl xl:text-5xl font-bold">Login</h2>
        <div className="mb-6">
          <span className="p-float-label mb-5">
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label">
            <Password
              inputId="password"
              value={password}
              feedback={false}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </span>
        </div>
        <Button label="Submit" className="mb-4" />
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
