import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanTask from "../components/KanbanTask";

function KanbanList() {
  return (
    <Box
      marginRight={"10%"}
      width={"200%"}
      height={"637px"}
      backgroundColor={"#eeeeee"}
    >
      <KanbanTask />
    </Box>
  );
}

export default KanbanList;
