"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logoallblocks.svg';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

const NavbarLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`fixed left-0 top-0 h-full ${menuOpen ? 'w-[250px]' : 'w-[100px]'} py-2 bg-primary shadow-md z-10 transition-all duration-500`}>
        <div className="flex justify-between items-center h-fit p-2 mb-8">
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
        </div>
        <div className={`flex flex-col mt-10 mb-2 py-4 pl-6 ${menuOpen ? 'items-start' : 'items-center'}`}>
          <ul className={`flex flex-col justify-between space-y-20 font-chakra transition-all duration-500 mb-6`}>
            <li className={`uppercase hover:text-purple-light hover:font-bold text-sm ${menuOpen ? 'rotate-0 text-xl text-white' : '-rotate-90 text-white'} transition-all duration-500`}>
              <Link href="/criptomonedas">
                <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
              </Link>
            </li>
            <li className={`uppercase hover:text-purple-light hover:font-bold text-sm ${menuOpen ? 'rotate-0 text-xl text-white' : '-rotate-90 text-white'} transition-all duration-500`}>
              <Link href="/exchange">
                <span onClick={() => setMenuOpen(false)}>Exchange</span>
              </Link>
            </li>
            <li className={`uppercase hover:text-purple-light hover:font-bold text-sm ${menuOpen ? 'rotate-0 text-xl text-white' : '-rotate-90 text-white'} transition-all duration-500`}>
              <Link href="/estadisticas">
                <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
              </Link>
            </li>
            <li className={`uppercase hover:text-purple-light hover:font-bold text-sm ${menuOpen ? 'rotate-0 text-xl text-white' : '-rotate-90 text-white'} transition-all duration-500`}>
              <Link href="/noticias">
                <span onClick={() => setMenuOpen(false)}>Noticias</span>
              </Link>
            </li>
            <li className={`uppercase hover:text-purple-light hover:font-bold text-sm ${menuOpen ? 'rotate-0 text-xl text-white' : '-rotate-90 text-white'} transition-all duration-500`}>
              <Link href="/contacto">
                <span onClick={() => setMenuOpen(false)}>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-8 items-end">
          <AiOutlineInstagram size={20} className="cursor-pointer text-white" />
          <AiOutlineFacebook size={20} className="cursor-pointer text-white" />
          <AiOutlineTwitter size={20} className="cursor-pointer text-white" />
        </div>
      </nav>
    </>
  );
};

export default NavbarLeft;
