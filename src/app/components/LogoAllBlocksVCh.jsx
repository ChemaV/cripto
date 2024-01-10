import { NextPage } from 'next'
import { Image, VStack } from '@chakra-ui/react'

const LogoAllBlocksVCh: NextPage = () => {
  return (
    <VStack spacing={4}>
      <Image
        src="../assets/images/logo/letras.svg"
        alt="Logo letras"
        boxSize="500px"
      />
      <Image
        src="../assets/images/logo/imagotipo.svg"
        alt="Logo imagotipo"
        boxSize="500px"
      />
    </VStack>
  )
}

export default LogoAllBlocksVCh
