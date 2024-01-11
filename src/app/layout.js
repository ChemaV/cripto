// layout.js con Chakra UI
import React from "react";
import "./globals.css";
import { Grid, GridItem } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All Blocks Criptomonedas",
  description: "Proyecto Full Stack con Nextjs y React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
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
          <GridItem area="navbar" justifySelf="center">
            Navbar
          </GridItem>
          <GridItem area="header" alignSelf="center">
            Header
          </GridItem>
          <GridItem area="main">
            {/* Aquí puedes agregar más contenido al Main si es necesario */}
            Main
          </GridItem>
          <GridItem area="footer" alignSelf="center">
            Footer
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
