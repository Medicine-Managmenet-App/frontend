// login page

'use client';

import LoginTab from '@/components/LoginComponents/LoginTab';
import RegisterTab from '@/components/LoginComponents/RegisterTab';
import { TabView, TabPanel } from 'primereact/tabview';

const LoginPage = () => {
  return (
    <div className="flex flex-column align-items-center justify-content-center h-screen">
      <h1 className="text-center mb-5 text-2xl md:text-5xl">
        Welcome to <br />
        Medicine Management <span className="text-primary">App</span>
      </h1>
      <div className="w-10 lg:w-3">
        <TabView>
          <TabPanel header="Login">
            <LoginTab />
          </TabPanel>
          <TabPanel header="Register">
            <RegisterTab />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default LoginPage;
