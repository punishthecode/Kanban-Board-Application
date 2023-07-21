import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanTask from "../components/KanbanTask";

function KanbanList({ column }) {
  const [lists, setLists] = useState([]);
  const fetchList = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/lists");
    const resultJson = await response.json();
    setLists(resultJson);
    console.log(resultJson);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <Box
      marginRight={"10%"}
      width={"216px"}
      height={"400px"}
      backgroundColor={"#eeeeee"}
      scrollBehavior={"inside"}
    >
      <KanbanTask column_id={column} />
    </Box>
  );
}

export default KanbanList;
