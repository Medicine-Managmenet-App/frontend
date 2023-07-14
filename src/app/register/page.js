'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import RegisterForm from '@/components/LoginComponents/RegisterForm';

const RegisterPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <section className="w-screen h-screen">
      <div className="flex flex-column align-items-center justify-content-center h-screen z-5">
        <h2 className="text-center mb-3 text-3xl font-medium">
          Welcome to <br /> Medicine Management <span className="text-primary font-bold">App</span>
        </h2>
        <RegisterForm className="z-5" />
      </div>
    </section>
  );
};

export default RegisterPage;
