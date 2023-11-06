import React from "react";
import { ReactComponent as HeroImage } from "../assets/heroRight.svg";
import { Box, Button, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box display={["flex"]}>
      <Box
        display={["flex"]}
        flexDirection={["column"]}
        padding={["50px 0px 0px 185px"]}
        position={["relative"]}
        margin={["0px"]}
      >
        <Text
          fontSize={["100px"]}
          zIndex={["9"]}
          margin={["0px"]}
          fontWeight={[400]}
        >
          Commercial Real Estate
        </Text>
        <Text
          fontSize={["100px"]}
          margin={["0px"]}
          lineHeight={["50px"]}
          zIndex={["9"]}
          fontWeight={[400]}
        >
          Investing that is:
        </Text>
        <Text
          zIndex={["9"]}
          fontSize={["60px"]}
          marginTop={["50px"]}
          fontWeight={[700]}
          color={["#052460"]}
          marginBottom={["0px"]}
        >
          Safer. Simpler. More Liquid.
        </Text>
        <Text
          zIndex={["9"]}
          width={["60%"]}
          fontSize={["24px"]}
          color={["#666666"]}
          margin={["0px"]}
          marginTop={["30px"]}
        >
          Experience premium U.S. commercial real estate
          starting at just $100. AKRU brings high-end
          investment opportunities within reach. Be at the
          vanguard of this launch by joining our waitlist,
          and gain early access to top-tier American
          commercial real estate assets.
        </Text>
        <Button
            size="sm"
            rounded="md"
            color={["#ffffff"]}
            fontSize={["16px"]}
            border={["none"]}
            bg={["#052460"]}
            width={["140px"]}
            height={["46px"]}
            borderRadius={["10px"]}
            marginTop={["45px"]}
            _hover={{
              bg: [
                "primary.100",
                "primary.100",
                "primary.600",
                "primary.600",
              ],
            }}
          >
            Join the waitlist
          </Button>
      </Box>
      <Box position={["absolute"]} right={["0"]}>
        <HeroImage width={["750px"]} height={["662px"]} />
      </Box>
    </Box>
  );
};

export default Hero;
