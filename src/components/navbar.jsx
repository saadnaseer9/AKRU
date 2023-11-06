import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

import { ReactComponent as Logo } from "../assets/logo.svg";

const NavBar = (props) => {


  return (
    <NavBarContainer {...props}>
      <Logo style={{marginRight:"70px"}} />
      <Box className="Navcontainer">
      <MenuLinks/>
      </Box>
    </NavBarContainer>
  );
};


const MenuItem = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{
        base: isOpen ? "block" : "none",
        md: "block",
      }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={[
          "space-between",
        ]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {/* <MenuItem> */}
        <Text textDecoration={["none"]} color={["#052460"]} fontSize={["18px"]} fontWeight={[500]} padding={["0px 10px"]} >
          Home
        </Text>
        {/* </MenuItem> */}
        <Text textDecoration={["none"]} color={["#052460"]} fontSize={["18px"]} fontWeight={[500]} padding={["0px 10px"]}>
          AKRU Advantage <TriangleDownIcon w={["10px"]} h={["10px"]}/>
        </Text>
        <Text textDecoration={["none"]} color={["#666666"]} fontSize={["18px"]} fontWeight={[500]} padding={["0px 10px"]}>
         
          Listings
        </Text>
        <Text textDecoration={["none"]} color={["#666666"]} fontSize={["18px"]} fontWeight={[500]} padding={["0px 10px"]}>
          About
        </Text>
        <MenuItem>
          <Button
            size="sm"
            rounded="md"
            color={["#666666"]}
            fontSize={["16px"]}
            border={["none"]}
            bg={["#F2F4F7"]}
            p={["0px 30px"]}
            // width={["140px"]}
            height={["46px"]}
            borderRadius={["10px"]}
          >
            Asset Owners
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            size="sm"
            rounded="md"
            color={["#666666"]}
            fontSize={["16px"]}
            border={["none"]}
            bg={["#F2F4F7"]}
            // width={["140px"]}
            height={["46px"]}
            borderRadius={["10px"]}
            p={["0px 20px"]}
          >
            Wealth Managers
          </Button>
        </MenuItem>

        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["#666666"]}
            fontSize={["16px"]}
            border={["none"]}
            bg={["#F2F4F7"]}
            width={["140px"]}
            height={["46px"]}
            borderRadius={["10px"]}
            _hover={{
              bg: [
                "primary.100",
                "primary.100",
                "primary.600",
                "primary.600",
              ],
            }}
          >
            Login <TriangleDownIcon w={["10px"]} h={["10px"]} ml={["5px"]}/>
          </Button>
        </MenuItem>
        <MenuItem to="/signup" isLast>
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
            _hover={{
              bg: [
                "primary.100",
                "primary.100",
                "primary.600",
                "primary.600",
              ],
            }}
          >
            Getting Started
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      w="100%"
      mb={8}
      p={["20px 0px"]}
      //   p={["0px 100px"]}
      bg={[
        "primary.500",
        "primary.500",
        "transparent",
        "transparent",
      ]}
      color={[
        "white",
        "white",
        "primary.700",
        "primary.700",
      ]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
