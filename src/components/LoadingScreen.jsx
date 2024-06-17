import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box, Flex, Text } from "@chakra-ui/react";

const LoadingScreen = () => {
  const loadingRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    const loadingTimeline = gsap.timeline({ repeat: -1 });

    loadingTimeline
      .fromTo(
        loadingRef.current,
        { rotation: 0 },
        { rotation: 360, duration: 2, ease: "none", repeat: -1 }
      )
      .to(
        percentageRef.current,
        {
          text: "100%",
          duration: 2,
          ease: "none",
          modifiers: {
            text: (value) => `${value.toFixed(0)}%`,
          },
          onStart: () => {
            gsap.set(percentageRef.current, { scaleX: 0 });
          },
          onUpdate: () => {
            gsap.set(percentageRef.current, {
              scaleX: parseFloat(percentageRef.current.textContent) / 100,
            });
          },
        },
        0
      );
  }, []);

  return (
    <Flex
      minH="100vh"
      bg="gray.800"
      justify="center"
      align="center"
      direction="column"
    >
      <Box ref={loadingRef} color="white" mb={4}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58ZM32 60C15.8594 60 2 46.1406 2 32C2 17.8594 15.8594 4 32 4C48.1406 4 62 17.8594 62 32C62 46.1406 48.1406 60 32 60Z"
            fill="currentColor"
          />
        </svg>
      </Box>
      <Flex bg="white" rounded="full" px={4} position="relative">
        <Text
          ref={percentageRef}
          fontWeight="bold"
          color="gray.800"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          0%
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoadingScreen;