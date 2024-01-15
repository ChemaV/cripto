import { Heading } from "@chakra-ui/react";
import { criptopagesections } from "../../constants";

const CriptomonedasH2 = () => {
return (
    <Heading className="headingh2" as="h2" noOfLines={2} m="0">
      {criptopagesections.headingH2}
    </Heading>
  );
};

export default CriptomonedasH2