'use client';
// Versión Chakra UI con enlaces
import { Flex, Box, Text, HStack, VStack, Image, Link } from '@chakra-ui/react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <Box  width="full" height="24px"  bg="gray.800" color="blackalpha.400" p={4}>
      <Flex direction='horizontal' spacing={4} align="stretch">
        <HStack>
          <Image alt="Imagotipo" src="/logo/imagotipo.svg" width={55} height={60} color='purple.400' />
          <Text>All Blocks. Todos los derechos reservados: Ernesto, Jorge, Chema y Alejandra.</Text>
          <Text>Proyecto Consumo de API con Nextjs para curso Desarrollo web full stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.</Text>
        </HStack>
        <VStack>
          <Text>APIs usadas:</Text>
          <Link href="https://developers.coinranking.com/api/documentation" isExternal color='purple.500' >
            <Text as="a" textDecoration="underline">Coinranking API</Text>
          </Link>
          <Link href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api" isExternal color='purple.500' >
            <Text as="a" textDecoration="underline">Bing News Search API</Text>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;