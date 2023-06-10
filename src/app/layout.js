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

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Medicine Management App',
  description: 'Application that lets you schedule and manage your home medicine kit'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
