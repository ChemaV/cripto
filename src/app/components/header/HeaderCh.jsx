import { Box, Text } from '@chakra-ui/react';
import CriptomonedasH1 from "./CriptomonedasH1";
import CriptomonedasH2 from "./CriptomonedasH2";

export default function HeaderCh() {
  return (
    <Box position="relative" w="full" h="300px" overflow="hidden" textAlign="left" fontSize="36px" color="gray.700" fontFamily="'Chakra Petch', sans-serif">
      {
        <Box position="absolute" top="45px" left="58px" w="1225px" h="210px">
        <Box position="absolute" top="0" left="0" borderRadius="14px" bg="gray.100" w="1225px" h="210px" />
        <Box position="absolute" top="92px" left="64px" lineHeight="48px" fontWeight="medium" w="1121px" h="84px">
          <CriptomonedasH2 />
        </Box>
        <Text position="absolute" top="19.4px" left="64px" fontSize="48px" fontWeight="semibold" color="purple.700" w="823px" h="65.1px">
          <CriptomonedasH1 />
        </Text>
        </Box>
      }
    </Box>
  );
};
