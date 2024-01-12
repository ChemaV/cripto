'use client';
import Link from 'next/link';

export default function Links() {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Criptomonedas',
      path: '/criptomonedas',
    },
    {
      title: 'Exchange',
      path: '/exchange',
    },
    {
      title: 'Estadísticas',
      path: '/estadisticas',
    },
    {
      title: 'Contacto',
      path: '/contacto',
    },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
