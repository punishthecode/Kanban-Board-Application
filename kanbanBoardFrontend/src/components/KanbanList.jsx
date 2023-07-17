import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanTask from "../components/KanbanTask";

function KanbanList() {
  return (
    <Box
      marginRight={"10%"}
      width={"216px"}
      height={"698px"}
      backgroundColor={"#eeeeee"}
    >
      <KanbanTask />
    </Box>
  );
}

export default KanbanList;
