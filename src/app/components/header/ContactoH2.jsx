import { Heading } from "@chakra-ui/react";

const ContactoH2 = () => {
  return (
    <Heading className="font-chakra text-gray-title font-medium text-md lg:text-2xl xl:text-3xl" as="h2" noOfLines={3} m="0">
      Si tienes alguna criptoduda ¡contacta con{" "}
      <span className="font-brand font-semibold text-primary">All Blocks!</span>
    </Heading>
  );
};

export default ContactoH2;
