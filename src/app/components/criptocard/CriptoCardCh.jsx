'use client';
import { Card, CardHeader, CardBody, Heading, Text, VStack, HStack, Avatar } from '@chakra-ui/react';

export default function CriptoCardCh() {
  return (
    <Card bg="white" boxShadow="md" rounded="md" overflow="hidden">
      <CardHeader color="purple.300">
          <HStack>
            <Heading color="purple.600">Criptomoneda #id</Heading>
            <Avatar size="l" bg="gray.300" />
          </HStack>
      </CardHeader>
      <VStack p={4}>
        <CardBody justifyContent="space-between" w="full">
          <VStack align="start">
            <Text fontSize="lg" fontWeight="semibold">Criptomoneda</Text>
            <Text color="gray.600">Cambio Diario: <Text as="span" fontWeight="semibold" color="green.500">6.7%</Text></Text>
            <Text color="gray.600">Market Cap: <Text as="span" fontWeight="semibold">396.7B</Text></Text>
            <Text color="gray.600">Precio: <Text as="span" fontWeight="semibold">46.7 K</Text></Text>
          </VStack>
        </CardBody>
      </VStack>
    </Card>
  );
};