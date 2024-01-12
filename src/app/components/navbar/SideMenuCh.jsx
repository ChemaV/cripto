'use client';
import { Box, VStack, Text, Image } from '@chakra-ui/react';
import LogoAllBlocksVCh from '/LogoAllBlocksVCh';

export default function SideMenuCh() {
  return (
    <VStack spacing={4} align="center">
      <Box>
        <Text>Contacto</Text>
        <Image src="/menuicons/icocontacto.svg" alt="Contacto" boxSize="30px" />
      </Box>
      <Box>
        <Text>Noticias</Text>
        <Image src="/menuicons/iconoticias.svg" alt="Noticias" boxSize="30px" />
      </Box>
      <Box>
        <Text>Estadísticas</Text>
        <Image src="/menuicons/icostats.svg" alt="Estadísticas" boxSize="30px" />
      </Box>
      <Box>
        <Text>Intercambios</Text>
        <Image src="/menuicons/icointercambios.svg" alt="Intercambios" boxSize="30px" />
      </Box>
      <Box>
        <Text>Criptomonedas</Text>
        <Image src="/menuicons/icocriptomonedas.svg" alt="Criptomonedas" boxSize="30px" />
      </Box>
      <Box>
        <LogoAllBlocksVCh />
      </Box>
    </VStack>
  )
}