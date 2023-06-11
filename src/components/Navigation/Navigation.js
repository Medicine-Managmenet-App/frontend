'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import classes from './Navigation.module.css';

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full flex justify-content-center pb-3 pt-3 bg-white-alpha-90">
      <ul className="flex p-0 m-0 mb-1 list-none gap-5 ">
        <li>
          <div className="flex flex-column align-items-center fadein transition-duration-300">
            <i className="pi pi-home" style={{ color: pathname === '/' ? 'black' : 'gray' }}></i>
            <Link
              className={pathname === '/' ? `${classes.active}` : `${classes.inactive}`}
              href="/">
              Home
            </Link>
          </div>
        </li>
        <li>
          <div className="flex flex-column align-items-center fadein transition-duration-300">
            <i
              className="pi pi-briefcase"
              style={{ color: pathname === '/medicine-kit' ? 'black' : 'gray' }}></i>
            <Link
              href="/medicine-kit"
              className={
                pathname === '/medicine-kit' ? `${classes.active}` : `${classes.inactive}`
              }>
              Medicine Kit
            </Link>
          </div>
        </li>
        <li>
          <div className="flex flex-column align-items-center fadein transition-duration-300">
            <i
              className="pi pi-users"
              style={{ color: pathname === '/family' ? 'black' : 'gray' }}></i>
            <Link
              href="/family"
              className={pathname === '/family' ? `${classes.active}` : `${classes.inactive}`}>
              Family
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
