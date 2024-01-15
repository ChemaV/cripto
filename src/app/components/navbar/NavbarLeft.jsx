'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/logoallblocks.svg';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { useState } from 'react';

const NavbarLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='fixed left-0 top-0 h-full w-[100px] bg-purple-600 shadow-md z-10 transition-width duration-500'>
        <div className='flex justify-between items-stretch h-full p-4'>
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
            {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <ul className="flex flex-col gap-12">
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 text-purple.600'>
              <Link href="/criptomonedas">
                <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/exchange">
                <span onClick={() => setMenuOpen(false)}>Exchange</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/estadisticas">
                <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-md -rotate-90 font-chakra text-purple.600'>
              <Link href="/noticias">
                <span onClick={() => setMenuOpen(false)}>Noticias</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/contacto">
                <span onClick={() => setMenuOpen(false)}>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[250px] h-full bg-purple.300 items-stretch p-6 ease-in duration-500"
          : "fixed left-[-100%] top-0 h-full p-6 ease-in duration-500"
        }>
          <Link href="/">
              <Image
                src={Logo}
                alt="Logo All Blocks"
                width="37"
                height="100"
                className="cursor-pointer pt-6"
                priority
              />
          </Link>
          <ul className="flex flex-col gap-12">
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 text-purple.600'>
              <Link href="/criptomonedas">
                <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/exchange">
                <span onClick={() => setMenuOpen(false)}>Exchange</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/estadisticas">
                <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-md -rotate-90 font-chakra text-purple.600'>
              <Link href="/noticias">
                <span onClick={() => setMenuOpen(false)}>Noticias</span>
              </Link>
            </li>
            <li className='my-2 uppercase hover:border-b text-sm -rotate-90 font-chakra text-purple.600'>
              <Link href="/contacto">
                <span onClick={() => setMenuOpen(false)}>Contacto</span>
              </Link>
            </li>
          </ul>
          <div className='flex flex-row justify-around pt-10 items-center'>
            <AiOutlineInstagram size={30} className="cursor-pointer" bg-white />
            <AiOutlineFacebook size={30} className="cursor-pointer" bg-white />
            <AiOutlineTwitter size={30} className="cursor-pointer" bg-white />
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-purple.600 opacity-50 z-0" onClick={handleNav}></div>
      )}
    </>
  );
};

export default NavbarLeft;
