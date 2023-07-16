import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "../App.css";

function KanbanTask() {
  return (
    <Box padding={"5%"}>
      <Box backgroundColor={"#ffffff"} width={"195px"} height={"110px"}>
        <Text
          fontWeight={"500"}
          paddingLeft={"5px"}
          paddingRight={"5px"}
          fontSize={"14px"}
        >
          Clean office space
        </Text>
        <Text
          fontWeight={"400"}
          paddingLeft={"5px"}
          paddingRight={"5px"}
          fontSize={"12px"}
        >
          Description
        </Text>
      </Box>
    </Box>
  );
}

export default KanbanTask;
