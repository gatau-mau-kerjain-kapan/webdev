import Link from "next/link";
import ThemeChanger from "./ThemeSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from 'react';

const Navbar = () => {
  // const { currentUser, emailSignIn } = UserAuth();
  const path = usePathname();
  const { currentUser } = UserAuth();


  const navigation = [["Home", "/"], ["Products", "/ProdDetails"]];

  var menuNavBar;

  if (currentUser) {
    menuNavBar = currentUser.displayName;
  } else {
    if (path === "/auth") {
      menuNavBar = "Home";
    } else if (path === "/") {
      menuNavBar = "Sign Up";
    } else if (path.includes("/ProdDetails")) {
      menuNavBar = "My Cart";
    }
  }

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
    setScrolling(document.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className={`fixed w-full p-0 z-20 bg-primaryFour dark:bg-[#8d7b68] transition-all duration-300 ${scrolling ? '-top-40' : 'top-0'}`} >
      <nav className="flex-no-wrap container relative top-0 z-40 flex flex-wrap items-center justify-between p-3 mx-auto lg:justify-between xl:px-0 w-[99vw]">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/coffee-icon.png"
                        alt="N"
                        width="512"
                        height="512"
                        className="w-16"
                      />
                    </span>
                    <span>Beanmaster</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current me-16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}

                    {path !== "/auth" ? (
                      <Link
                        href="/auth"
                        className="w-4/5 px-6 py-2 mt-3 text-center text-white dark:text-primaryOne bg-primaryOne dark:bg-primaryFour rounded-md lg:ml-5"
                      >
                        {menuNavBar}
                      </Link>
                    ) : (
                      <Link
                        href="/"
                        className="w-4/5 px-6 py-2 mt-3 text-center text-white dark:text-primaryOne bg-primaryOne dark:bg-primaryFour rounded-md lg:ml-5"
                      >
                        {menuNavBar}
                      </Link>
                    )}
                    <div className="w-1/5 px-2 py-1 mt-3 text-center lg:ml-5  place-content-end">
                      <ThemeChanger />
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu[1]}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {path !== "/auth" ? (
          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link
              href="/auth"
              className="px-6 py-2 text-white dark:text-primaryOne bg-primaryOne dark:bg-primaryFour rounded-md md:ml-5"
            >
              {menuNavBar}
            </Link>

            <ThemeChanger />
          </div>
        ) : (
          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link
              href="/"
              className="px-6 py-2 text-white dark:text-primaryOne bg-primaryOne dark:bg-primaryFour rounded-md md:ml-5"
            >
              {menuNavBar}
            </Link>

            <ThemeChanger />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
