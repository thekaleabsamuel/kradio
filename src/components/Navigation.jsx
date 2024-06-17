import React, { useRef, useEffect } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { gsap } from "gsap";

const Navigation = ({ mode, setMode }) => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  ///fdfdfdf

  return (
    <Flex
      ref={navRef}
      bg="gray.800"
      color="white"
      py={4}
      px={8}
      justify="space-between"
      align="center"
    >
      <Box fontWeight="bold" fontSize="xl">
        K Radio
      </Box>
      <Flex>
        <Button
          colorScheme={mode === "library" ? "teal" : "gray"}
          mr={4}
          onClick={() => setMode("library")}
        >
          Library
        </Button>
        <Button
          colorScheme={mode === "radio" ? "teal" : "gray"}
          onClick={() => setMode("radio")}
        >
          Radio
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navigation;