// layout.js con Chakra UI
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavbarLeft from "./components/navbar/NavbarLeft";
import HeaderCh from "./components/header/HeaderCh";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "All Blocks Criptomonedas",
  description: "Proyecto Full Stack con Nextjs y React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Grid
          templateColumns="100px 1fr 1fr 1fr"
          templateRows="auto 1fr auto"
          gap={6}
          templateAreas={`
            "navbar header header header"
            "navbar main main main"
            "navbar footer footer footer"
          `}
        >
          <GridItem gridArea="navbar">
            <NavbarLeft />
          </GridItem>
          <GridItem gridArea="header">
            <HeaderCh />
          </GridItem>
          <GridItem gridArea="main" bg="white" className="max-h-screen">
            {children}
          </GridItem>
          <GridItem area="footer" alignSelf="end" position="sticky" bottom="0">
            <Footer />
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
