import React from "react";
import Image from "next/image";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Logo from "@/components/atoms/Logo";
import { Center, VStack } from "@chakra-ui/react";

const LandingPage = () => {
  const title = "There’s a new way to shop the stores you love.";
  return (
    <>
      <Center pt={16}>
        <VStack maxW="40rem" textAlign="center">
          <VStack>
            <Text as="h1" light textTransform="uppercase">
              coming soon
            </Text>
            <Heading as="h2" size="2xl">
              {title}
            </Heading>
          </VStack>

          <Image
            src="/shoppingbox.png"
            alt="Online shopping box"
            width={500}
            height={450}
            priority
          />
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
