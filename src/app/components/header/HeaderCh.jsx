import { Box, Flex } from '@chakra-ui/react';
import CriptomonedasH1 from "./CriptomonedasH1";
import CriptomonedasH2 from "./CriptomonedasH2";

export default function HeaderCh() {
  return (
    <Box boxShadow='xs' px='58px' py='24px' bg='gray.200' w="full" h="300px" overflow="hidden" >
      <Flex className='header' direction="column" alignItems="start" justifyContent="center" wrap="wrap" gap='1' rounded='sm' bg="gray.300" h="auto" maxW="1225px" maxH="210px"  px='40px' py='20px' >
        <CriptomonedasH1 />
        <CriptomonedasH2 />
      </Flex>
          
    </Box>
  );
};
