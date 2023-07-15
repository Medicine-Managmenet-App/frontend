`use client`;

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { registerNewUser } from '@/libs/services/users/registerNewUser';

import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const RegisterForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword || password.length < 8 || password.length > 15) {
      setFormError(true);
      return;
    }

    setLoading(true);
    const response = await registerNewUser({ login, password });
    if (response) {
      setLoading(false);
      router.push('/login');
    } else {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="flex bg-primary-reverse border-round-md p-3 shadow-4 w-9 md:w-5 lg:w-3">
      <div className="flex flex-column align-items-center w-12">
        <h2 className="mt-4 mb-6 text-2xl md:text-3xl xl:text-4xl font-bold">Create account</h2>
        <div className="mb-2">
          <span className="p-float-label mb-5">
            <InputText id="username" value={login} onChange={(e) => setLogin(e.target.value)} />
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
          {error && <p className="text-red-500 mb-2">Something went wrong</p>}
        </div>
        {formError && password !== confirmPassword && (
          <small className="text-red-500 mb-2">Passwords do not match</small>
        )}
        {formError && password.length < 8 && (
          <small className="text-red-500 mb-2">Passwords must containt at least 8 characters</small>
        )}
        {formError && password.length > 15 && (
          <small className="text-red-500 mb-2">
            Passwords cannot containt more than 15 characters
          </small>
        )}
        <Button
          label="Register"
          className="mb-4 mt-4"
          onClick={handleSubmit}
          disabled={!login || !password || !confirmPassword}
        />
        <p className="text-900 w-10 text-center text-xs">Have an account?</p>
        <Link href={'/login'} className=" text-center text-xs">
          Click here to login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
