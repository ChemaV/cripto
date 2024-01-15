import Image from 'next/image';
import Link from 'next/link';
import Logo from '/logoallblocks.svg';
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
        <div className='flex justify-between items-center h-full p-4'>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="Logo All Blocks"
                width="62"
                height="141"
                className="cursor-pointer"
                priority
              />
            </a>
          </Link>
          <div onClick={handleNav} className="cursor-pointer">
            {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[250px] h-full bg-[#f5f5f5] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 h-full p-10 ease-in duration-500"
        }>
          <ul className="flex flex-col">
            <li className='my-4 uppercase hover:border-b text-xl rotate-90'>
              <Link href="/criptomonedas">
                <span onClick={() => setMenuOpen(false)}>Criptomonedas</span>
              </Link>
            </li>
            <li className='my-4 uppercase hover:border-b text-xl rotate-90'>
              <Link href="/exchange">
                <span onClick={() => setMenuOpen(false)}>Exchange</span>
              </Link>
            </li>
            <li className='my-4 uppercase hover:border-b text-xl rotate-90'>
              <Link href="/estadisticas">
                <span onClick={() => setMenuOpen(false)}>Estadísticas</span>
              </Link>
            </li>
            <li className='my-4 uppercase hover:border-b text-xl rotate-90'>
              <Link href="/noticias">
                <span onClick={() => setMenuOpen(false)}>Noticias</span>
              </Link>
            </li>
            <li className='my-4 uppercase hover:border-b text-xl rotate-90'>
              <Link href="/contacto">
                <span onClick={() => setMenuOpen(false)}>Contacto</span>
              </Link>
            </li>
          </ul>
          <div className='flex flex-row justify-around pt-10 items-center'>
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="Logo All Blocks"
                width="62"
                height="141"
                className="cursor-pointer pt-6"
                priority
              />
            </a>
          </Link>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-purple.600 opacity-50 z-0" onClick={handleNav}></div>
      )}
    </>
  );
};

export default NavbarLeft;
