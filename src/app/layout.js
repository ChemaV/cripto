// layout.js con Chakra UI
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavbarLeft from "./components/navbar/NavbarLeft";
import HeaderCh from "./components/header/HeaderCh";
import Footer from "./components/footer/Footer";
import CardsgridflexCh from "./components/CardsgridflexCh";



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
          <GridItem area="navbar" alignSelf="center" w="100px">
            <NavbarLeft />
          </GridItem>
          <GridItem area="header" alignSelf="center" h="255px">
            <HeaderCh />
          </GridItem>
          <GridItem area="main" bg="white">
            {children}
            <CardsgridflexCh />
          </GridItem>
          <GridItem area="footer" alignSelf="center">
            <Footer/ >
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
