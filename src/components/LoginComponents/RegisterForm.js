`use client`;

import { useState } from 'react';
import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="flex bg-primary-reverse border-round-md p-3 shadow-4 w-9 md:w-5 lg:w-3">
      <div className="flex flex-column align-items-center w-12">
        <h2 className="mt-4 mb-6 text-2xl md:text-3xl xl:text-4xl font-bold">Create account</h2>
        <div className="mb-6">
          <span className="p-float-label mb-5">
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label mb-5">
            <Password
              inputId="password"
              value={password}
              feedback={false}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </span>
          <span className="p-float-label">
            <Password
              inputId="cpassword"
              value={confirmPassword}
              feedback={false}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="cpassword">Confirm password</label>
          </span>
        </div>
        <Button label="Register" className="mb-4" />
        <p className="text-900 w-10 text-center text-xs">
          Have an account?
          <br />
          Click{' '}
          <Link href={'/login'} className="text-primary">
            here
          </Link>{' '}
          to login
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
