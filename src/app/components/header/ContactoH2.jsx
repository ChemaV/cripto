import { Heading } from "@chakra-ui/react";

const ContactoH2 = () => {
  return (
    <Heading className="headingh2" as="h2" noOfLines={2} m="0">
      Si tienes alguna criptoduda ¡contacta con{" "}
      <span className="font-brand font-semibold text-primary">All Blocks!</span>
    </Heading>
  );
};

export default ContactoH2;
