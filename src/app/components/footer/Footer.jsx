'use client';
// Versión Chakra UI con enlaces
import { Flex, Spacer, Box, Text, HStack, VStack, Image, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box width="full" height="60px" bg="gray.100"p={2} mt={2} fontSize='.6em' >
      <Flex direction='horizontal' spacing={4} alignItems="start" justifyContent="space-between" gap={4}>
        <HStack alignItems="start" >
          <Image alt="Imagotipo" src="/logo/imagotipopurple300.svg" width={55} height={60} m='8px' />
          <Text className='brandtxt' as="b" textAlign='left' lineHeight='1.2em' color="purple.600" >All Blocks.</Text>
          <Text color='gray.400' lineHeight='1.2em' >Todos los derechos reservados: Ernesto, Jorge, Chema y Alejandra.</Text>
          <Text color='gray.400' textAlign='left' lineHeight='1.2em'>Proyecto Consumo de API con Nextjs para curso Desarrollo web full stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.</Text>
        </HStack>
        <Spacer />
        <VStack textAlign='left'>
          <Text textAlign='left' color='gray.400' >APIs usadas:</Text>
          <Link href="https://developers.coinranking.com/api/documentation" isExternal >
            <Text as="b" textAlign='left'textDecoration="underline" color='purple.500' >Coinranking API</Text>
          </Link>
          <Link href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api" isExternal >
            <Text as="b" textDecoration="underline" color='purple.500' >Bing News Search API</Text>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;