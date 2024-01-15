import { Heading } from "@chakra-ui/react";
import { criptopagesections } from "../../constants";

const CriptomonedasH1 = () => {
return (
    <Heading className="headingh1" as="h1" noOfLines={2} m="0">
      {criptopagesections.headingH1}
    </Heading>
  );
};

export default CriptomonedasH1