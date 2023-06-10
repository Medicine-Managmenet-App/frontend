import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const RegisterTab = () => {
  return (
    <div>
      <h2 className="mb-3">Register</h2>
      <p className="text-600 mb-4 text-sm">
        Create your account by setting up your username and password
      </p>
      <div className="flex flex-column gap-2 w-full mb-2">
        <label htmlFor="username">Username</label>
        <InputText id="username" className="lg:w-full mb-4" />
        <label htmlFor="password">Password</label>
        <Password id="password" className="lg:w-full mb-4" feedback={false} toggleMask />
        <label htmlFor="confirmPassword">Confirm password</label>
        <Password id="confirmPassword" className="lg:w-full mb-4" feedback={false} toggleMask />
      </div>
      <Button type="submit" label="Register" />
    </div>
  );
};

export default RegisterTab;
