// layout.js con Chakra UI
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import HeaderCh from "./components/header/HeaderCh";
import Footer from "./components/footer/Footer";
import Apirapid from "./components/Apirapid.jsx";



export const metadata = {
  title: "All Blocks Criptomonedas",
  description: "Proyecto Full Stack con Nextjs y React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <HeaderCh />
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
    <div className="col-span-5 row-span-2">
      <Apirapid />
    </div>
    <div className="col-span-3 row-span-3 row-start-3">Hola soy un 2</div>
    <div className="col-span-2 row-span-3 col-start-4 row-start-3">Hola soy un 3</div>
    <Footer />
</div>
    
      </body>
    </html>
  );
}
