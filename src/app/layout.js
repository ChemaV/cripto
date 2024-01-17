// layout.js con Chakra UI
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavbarLeft from "./components/navbar/NavbarLeft";
import HeaderTw from "./components/header/HeaderTw";
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
            "navbar main main main"
            "navbar main main main"
            "navbar footer footer footer"
          `}
        >
          <GridItem gridArea="navbar">
            <NavbarLeft />
          </GridItem>
          <GridItem gridArea="main" bg="white" className="h-auto p-6">
            {children}
          </GridItem>
          <GridItem area="footer" alignSelf="center" bottom="0" className="w-full">
            <Footer />
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
