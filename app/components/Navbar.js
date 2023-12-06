"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="fixed z-10 w-full bg-green-950 top-0 left-0 right-0  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-green-500 font-bold ">
                  Rano Group
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center p-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-300 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Rumah
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-300  md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Tentang Kami
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-300  md:hover:bg-transparent">
                  <Link
                    href="/product-service"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Layanan
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-300  md:hover:bg-transparent">
                  <Link href="/team" onClick={() => setNavbar(!navbar)}>
                    Team
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-300  md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
