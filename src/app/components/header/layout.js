import { Heading } from "@chakra-ui/react";

const HeaderLayout = () => {
return (
    <Heading className="font-chakra text-primary font-semibold text-4xl" as="h1" noOfLines={2} m="0">
      Criptomonedas
    </Heading>
  );
};

export default HeaderLayout