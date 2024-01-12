import Links from "./links/Links";
import { Flex, Spacer, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg='purple.600'>
      <div>
      <Image
              src="/logoallblocks.svg"
              alt="Logo All Blocks"
              className="dark:invert"
              width={62}
              height={141}
              priority
            />
      </div>
      <div>
        <Links />
      </div>
    </Flex>
  );
};