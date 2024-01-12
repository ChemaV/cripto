'use client';
// Versión Chakra UI con enlaces
import { Flex, Spacer, Box, Text, HStack, VStack, Image, Link } from '@chakra-ui/react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <Box width="full" height="60px" bg="gray.100" color="blackalpha.300" p={2} mt={2} fontSize='.6em' >
      <Flex direction='horizontal' spacing={4} alignItems="center" justifyContent="space-between">
        <HStack textAlign='left' lineHeight='1em'>
          <Image alt="Imagotipo" src="/logo/imagotipopurple300.svg" width={55} height={60} m='8px' />
          <Text textAlign='left' as 'b'>All Blocks.</Text>
          <Text>Todos los derechos reservados: Ernesto, Jorge, Chema y Alejandra.</Text>
          <Text textAlign='left'>Proyecto Consumo de API con Nextjs para curso Desarrollo web full stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.</Text>
        </HStack>
        <Spacer />
        <VStack textAlign='left'>
          <Text textAlign='left'>APIs usadas:</Text>
          <Link href="https://developers.coinranking.com/api/documentation" isExternal >
            <Text textAlign='left' as="b" textDecoration="underline" color='purple.500' >Coinranking API</Text>
          </Link>
          <Link href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api" isExternal >
            <Text textAlign='left' as="b" textDecoration="underline" color='purple.500' >Bing News Search API</Text>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;