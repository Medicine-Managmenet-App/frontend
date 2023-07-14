// login page
'use client';

import LoginForm from '@/components/LoginComponents/LoginForm';

const LoginPage = () => {
  return (
    <section className="w-screen h-screen">
      <div className="flex flex-column align-items-center justify-content-center h-screen z-5">
        <h2 className="text-center mb-3 text-4xl font-medium">
          Welcome <span className="text-primary font-bold">back!</span>
        </h2>
        <LoginForm className="z-5" />
      </div>
    </section>
  );
};

export default LoginPage;
