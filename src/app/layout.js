import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'All Blocks Criptomonedas',
  description: 'Proyecto Full Stack con Nextjs y React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
