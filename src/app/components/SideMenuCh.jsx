import { NextPage } from 'next'
import { Box, VStack, Text, Image } from '@chakra-ui/react'

const SideMenuCh: NextPage = () => {
  return (
    <VStack spacing={4} align="center">
      <Box>
        <Text>Contacto</Text>
        <Image src="/icContacto.svg" alt="Contacto" boxSize="50px" />
      </Box>
      <Box>
        <Text>Noticias</Text>
        <Image src="/icNoticias.svg" alt="Noticias" boxSize="50px" />
      </Box>
      <Box>
        <Text>Estadísticas</Text>
        <Image src="/Vector 19.svg" alt="Estadísticas" boxSize="50px" />
      </Box>
      <Image src="/Intercambios.png" alt="Intercambios" boxSize="100px" />
      <Box>
        <Text>Criptomonedas</Text>
        <Image src="/icCriptomonedas.svg" alt="Criptomonedas" boxSize="50px" />
      </Box>
      <Box>
        <Image src="/letras.svg" alt="Logo letras" boxSize="100px" />
        <Image src="/imagotipo.svg" alt="Logo imagotipo" boxSize="100px" />
      </Box>
    </VStack>
  )
}

export default SideMenuCh
