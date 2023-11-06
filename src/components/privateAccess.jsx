import React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as City } from "../assets/City.svg";
import Rectangle  from "../assets/Rectangle.png";


const PrivateAccess = () => {
  return (
    <>
    <Box
      style={{
        padding: "200px 180px 80px 180px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box display={["flex"]} justifyContent={["center"]}>
        <Box>

        <Text   fontSize={["80px"]}
          color={["#333333"]} lineHeight={["90px"]} width={["600px"]}>
          Institutional Investors?<br/> We have you covered
        </Text>
        </Box>
        <div style={{width:"2px",background:"#052460",margin:"0 20px"}}></div>
        <Box>
          <Text   fontSize={["42px"]}
          color={["#333333"]} margin={["0px"]} lineHeight={["50px"]}>
            AKRU Private Access for Wealth Managers
          </Text>
          <Text   fontSize={["20px"]}
          color={["#666666"]} margin={["20px 0px 0px 0px"]}>
            Keeping in mind the needs of RIAs and
            institutional investors, we have created a
            portal specifically tailored to their
            requirements. Explore the benefits that AKRU
            Private Access offers.
          </Text>
          <Button
            size="sm"
            rounded="md"
            color={["#052460"]}
            fontSize={["16px"]}
            border={["none"]}
            bg={["#0524601A"]}
            // width={["140px"]}
            padding={["0 20px"]}
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
           AKRU Private Access
          </Button>
        </Box>
      </Box>
    </Box>
      <City width={["100%"]}/>
      <Box width={["100%"]} bg={["#052460"]} marginTop={["-70px"]}>
      <img src={Rectangle} style={{width:"100%"}}/>
      </Box>
    </>
  );
};

export default PrivateAccess;
