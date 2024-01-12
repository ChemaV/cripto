'use client';
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import styles from './noticiacard.module.css';

export default function NoticiaCardCh() {
  const bgCard = useColorModeValue('gray.100', 'gray.700');
  const bgTitle = useColorModeValue('purple.200', 'purple.600');
  const bgFooter = useColorModeValue('yellow.100', 'yellow.600');

  return (
    <Card
      bg={bgCard}
      borderRadius="8px"
      w="100%"
      h="440px"
      overflow="hidden"
      textAlign="left"
      fontSize="16px"
      color="gray.800"
      fontFamily="'Chakra Petch', sans-serif"
    >
      <Flex direction="column" h="100%">
        <CardHeader
          bg={bgTitle}
          w="100%"
          h="110px"
          color="purple.700"
          fontSize="24px"
          position="relative"
          p="4"
        >
          <Image
            src="path_to_your_image.jpg"
            alt="Noticia"
            boxSize="122px"
            objectFit="cover"
            borderRadius="full"
            position="absolute"
            top="16px"
            right="16px"
          />
          <Text noOfLines={3}>
            Título de Noticia lorem ipsum hasta 3 líneas de texto
          </Text>
        </CardHeader>
        <CardBody flex="1" p="6">
          <Text mb="0">
            Lorem ipsum dolor sit amet consectetur. Lectus in gravida blandit arcu tortor viverra. Pellentesque purus in turpis ac diam cursus aliquam elementum. Augue aliquam nisi pulvinar mauris nibh libero est massa. Vitae posuere diam elementum.
          </Text>
        </CardBody>
        <CardFooter
          bg={bgFooter}
          w="100%"
          h="60px"
          color="gray.600"
          position="relative"
          align="center"
          p="4"
        >
          <Text fontSize="sm">Timestamp</Text>
          <Flex align="center" ml="auto">
            {/* Asumiendo que tienes un avatar para el medio */}
            <Image
              src="path_to_your_avatar.jpg"
              alt="Media Avatar"
              boxSize="48px"
              objectFit="cover"
              borderRadius="full"
            />
            <Text ml="3" fontSize="sm">
              MediaName
            </Text>
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
};