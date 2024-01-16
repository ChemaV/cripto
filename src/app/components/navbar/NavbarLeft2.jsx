"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logoallblocks.svg";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

const NavbarLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 h-full w-[100px] bg-purple-600 shadow-md z-10 transition-width duration-500">
        <div className="flex justify-between items-center h-full p-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo All Blocks"
              width="37"
              height="100"
              className="cursor-pointer"
              priority
            />
          </Link>
          <div onClick={handleNav} className="cursor-pointer">
            {menuOpen ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-white" />
            )}
          </div>
          <div className="flex flex-col gap-4 items-stretch p-4">
            <ul className="flex flex-col">
              <li className="my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-white.600">
                <Link href="/criptomonedas">
                  <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
                </Link>
              </li>
              <li className="my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-white.600">
                <Link href="/exchange">
                  <span onClick={() => setMenuOpen(false)}>Exchange</span>
                </Link>
              </li>
              <li className="my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-white.600">
                <Link href="/estadisticas">
                  <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
                </Link>
              </li>
              <li className="my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-white.600">
                <Link href="/noticias">
                  <span onClick={() => setMenuOpen(false)}>Noticias</span>
                </Link>
              </li>
              <li className="my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-white.600">
                <Link href="/contacto">
                  <span onClick={() => setMenuOpen(false)}>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-16 items-center">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer"
              text-white
            />
            <AiOutlineFacebook
              size={30}
              className="cursor-pointer"
              text-white
            />
            <AiOutlineTwitter size={30} className="cursor-pointer" text-white />
          </div>
        </div>

        <div
          className={
            menuOpen ? "flex flex-col gap-4 items-stretch p-4" : "hidden"
          }
        >
          <ul className="flex flex-col">
            <li className="my-2 uppercase hover:border-b text-sm font-chakra text-white.600">
              <Link href="/criptomonedas">
                <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
              </Link>
            </li>
            <li className="my-2 uppercase hover:border-b text-sm font-chakra text-white.600">
              <Link href="/exchange">
                <span onClick={() => setMenuOpen(false)}>Exchange</span>
              </Link>
            </li>
            <li className="my-2 uppercase hover:border-b text-sm font-chakra text-white.600">
              <Link href="/estadisticas">
                <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
              </Link>
            </li>
            <li className="my-2 uppercase hover:border-b text-sm font-chakra text-white.600">
              <Link href="/noticias">
                <span onClick={() => setMenuOpen(false)}>Noticias</span>
              </Link>
            </li>
            <li className="my-2 uppercase hover:border-b text-sm font-chakra text-white.600">
              <Link href="/contacto">
                <span onClick={() => setMenuOpen(false)}>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarLeft;
