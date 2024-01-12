// layout.js con Chakra UI
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";
import CriptoCardCh from "./components/criptocard/CriptoCardCh";
import Navbar from "./components/navbar/Navbar";
import HeaderCh from "./components/header/HeaderCh";
import HeaderTw from "./components/header/HeaderTw";

export const metadata = {
  title: "All Blocks Criptomonedas",
  description: "Proyecto Full Stack con Nextjs y React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Grid
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(6, 1fr)"
          gap={6}
          templateAreas={`
        "navbar header header header"
        "navbar main main main"
        "navbar main main main"
        "navbar main main main"
        "navbar main main main"
        "navbar footer footer footer"
      `}
        >
          <GridItem area="navbar" justifySelf="center" bg="purple.600">
            <Navbar />
          </GridItem>
          <GridItem area="header" alignSelf="center" bg="cyan.300">
            <HeaderCh />
            <HeaderTw />
          </GridItem>
          <GridItem area="main" bg="white">
            {children}
            <CriptoCardCh />
          </GridItem>
          <GridItem area="footer" alignSelf="center">
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
