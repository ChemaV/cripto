import { Box, Flex } from '@chakra-ui/react';
import HeadingH1 from "./HeadingH1";
import HeadingH2 from "./HeadingH2";

export default function HeaderCh() {
  return (
    <Box boxShadow='xs' px='58px' py='24px' bg='gray.200' w="full" h="300px" overflow="hidden" >
      <Flex className='header' direction="column" alignItems="start" justifyContent="center" wrap="wrap" gap='1' rounded='sm' bg="gray.300" h="auto" maxW="1225px" maxH="210px"  px='40px' py='20px' >
        <HeadingH1 />
        <HeadingH2 />
      </Flex>
          
    </Box>
  );
};
