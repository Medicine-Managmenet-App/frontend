import { Inter } from 'next/font/google';

import './globals.css';
//theme
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

//core
import 'primereact/resources/primereact.min.css';

//icons
import 'primeicons/primeicons.css';

//primeflex
import 'primeflex/primeflex.css';

import { Providers } from '@/redux/provider/Providers';

import UserPanel from '@/components/UserPanel/UserPanel';
import NavigationBar from '@/components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const isLoggedIn = true;

  return (
    <html lang="en">
      <body className={`${inter.className} surface-300`}>
        <main>
          <Providers>
            {isLoggedIn && <UserPanel />}
            {children}
            {isLoggedIn && <NavigationBar />}
          </Providers>
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  description: 'Application that lets you schedule and manage your home medicine kit'
};
