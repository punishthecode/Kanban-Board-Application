import React from "react";
import "../App.css";
import { Box, Text, Button } from "@chakra-ui/react";

function KanbanBoard() {
  return (
    <Box margin={"5%"}>
      <Text fontSize={"36px"} fontWeight={"400"}>
        Kanban Board
      </Text>
      <Text fontSize={"24px"} fontWeight={"400"}>
        Buzz Aldrin's tasks
      </Text>
      <Button
        borderRadius={"4px"}
        border={"1px solid #D9D9D9"}
        marginTop={"5%"}
        color={"white"}
        background={"#2a4ecb"}
        _hover={{ bg: "#2a4fff" }}
      >
        Create
      </Button>
    </Box>
  );
}

export default KanbanBoard;
