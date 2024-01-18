import { Heading } from "@chakra-ui/react";

const HomeH1 = () => {
return (
  <Heading className="font-chakra text-primary font-semibold text-3xl xl:text-4xl" as="h1" noOfLines={2} m="0">
      ¡Bienvenido a <span className="font-brand font-semibold text-primary">All Blocks!</span>
    </Heading>
  );
};

export default HomeH1