// todo - add form handling

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const LoginTab = () => {
  return (
    <div>
      <h2 className="mb-3">Login</h2>
      <p className="text-600 mb-4 text-sm">Login using your username and password</p>
      <div className="flex flex-column gap-2 w-full mb-2">
        <label htmlFor="username">Username</label>
        <InputText id="username" className="lg:w-full mb-4" />
        <label htmlFor="password">Password</label>
        <Password id="Password" className="lg:w-full mb-4" feedback={false} toggleMask />
      </div>
      <Button type="submit" label="Sign in" />
    </div>
  );
};

export default LoginTab;
