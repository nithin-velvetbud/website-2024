"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import menuData from "./menuData";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  // Navbar toggle


  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openEasyPaymentsSubMenu, setOpenEasyPaymentsSubMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
      if (menuData[index].title === "Easy payments") {
        setOpenEasyPaymentsSubMenu(true);
      } else {
        setOpenEasyPaymentsSubMenu(false);
      }
    }
  };

  const usePathName = usePathname();
  

   return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-24 max-w-full px-4 xl:mr-12">
              <Link
                href="/home"
                className={`header-logo block w-full ${sticky ? "py-2 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/arvat_logo.png"
                  alt="logo"
                  width={140}
                  height={50}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/arvat_logo.png"
                  alt="logo"
                  width={140}
                  height={50}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <nav id="navbarCollapse">
                  <ul className="block lg:flex lg:space-x-12">
                    <li className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6  text-dark hover:text-primary "><Link href={"/home"}>Home</Link></li>
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <ScrollLink
                            to={menuItem.sectionId}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.sectionId
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white hover:cursor-pointer"
                              }`}
                          >
                            {menuItem.title}
                          </ScrollLink>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <ScrollLink
                                  to={submenuItem.sectionId}
                                  key={index}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </ScrollLink>
                              ))}
                            </div>
                            
                          </>
                          
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;