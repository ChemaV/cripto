import { Inter } from "next/font/google";
import "./globals.css";
import { Grid, GridItem } from '@chakra-ui/react'
import Footer from "@/components/footer/Footer";

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
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={"header"}>
            Header
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Navbar
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            Main
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            <Footer>Footer</Footer>
          </GridItem>
        </Grid>
      </body>
    </html>
  );
}
