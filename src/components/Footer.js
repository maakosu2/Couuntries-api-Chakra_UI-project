import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" pt={{sm:500,md:0 }}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          w="100%"
          height={16}
        >
          <p>Akosu• © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
