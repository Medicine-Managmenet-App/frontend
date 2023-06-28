'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import classes from './Navigation.module.css';

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <footer className="fixed bottom-0 left-50 w-full md:w-5 lg:w-4 xl:w-3 md:mb-3 mx-0 my-auto flex justify-content-center pb-3 pt-3 bg-white-alpha-90 shadow-5 border-round-xl">
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
              style={{ color: pathname === '/medication' ? 'black' : 'gray' }}></i>
            <Link
              href="/medication"
              className={pathname === '/medication' ? `${classes.active}` : `${classes.inactive}`}>
              Medication Kit
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
    </footer>
  );
};

export default NavigationBar;
