import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");
  return (
    <Box
      textAlign="center"
      p="5"
      color={textColor}
      borderTop="1px"
      borderColor="gray.100"
    >
      2022 Beind Homes, Inc
    </Box>
  );
};

export default Footer;
