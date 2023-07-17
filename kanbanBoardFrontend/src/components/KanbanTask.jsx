import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import TaskPriority from "./TaskPriority";
import "../App.css";

function KanbanTask() {
  return (
    <Box
      paddingTop={"5%"}
      marginLeft={"5%"}
      marginRight={"5%"}
      marginTop={"5%"}
    >
      <Box backgroundColor={"#ffffff"} width={"195px"} height={"auto"}>
        <Text
          paddingTop={"5px"}
          fontWeight={"500"}
          fontSize={"14px"}
          paddingLeft={"5px"}
          paddingRight={"5px"}
        >
          Clean office space
        </Text>
        <Text
          fontWeight={"400"}
          paddingLeft={"5px"}
          paddingRight={"5px"}
          fontSize={"12px"}
        >
          This is the test description for the dummy project above.
        </Text>
        <Box
          marginTop={"10px"}
          display={"flex"}
          justifyContent={"flex-end"}
          bottom={"0"}
          marginRight={"5px"}
          paddingBottom={"5px"}
        >
          <TaskPriority />
          <Text
            backgroundColor={"#eeeeee"}
            fontSize={"10px"}
            fontWeight={"400"}
            borderRadius={"8px"}
            width={"28px"}
            textAlign={"center"}
          >
            3
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default KanbanTask;
