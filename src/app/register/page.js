'use client';

import RegisterForm from '@/components/LoginComponents/RegisterForm';

export const metadata = {
  title: 'Register | Medicine Management App'
};

const RegisterPage = () => {
  return (
    <section className="w-screen h-screen">
      <div className="flex flex-column align-items-center justify-content-center h-screen z-5">
        <h2 className="text-center mb-3 text-3xl font-medium">
          Welcome to <br /> Medicine Management <span className="text-primary font-bold">App</span>
        </h2>
        <RegisterForm className="z-5" />
      </div>
      <div className="z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L40,224C80,224,160,224,240,234.7C320,245,400,267,480,256C560,245,640,203,720,197.3C800,192,880,224,960,229.3C1040,235,1120,213,1200,213.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default RegisterPage;
