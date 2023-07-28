import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanTask from "../components/KanbanTask";

//list component that will be populated with tasks
function KanbanList({ column }) {
  const [lists, setLists] = useState([]);

  //API call to get lists (To-do, In progress, Completed)
  const fetchList = async () => {
    const response = await fetch("https://127.0.0.1:8000/kanban/lists");
    const resultJson = await response.json();
    setLists(resultJson);
  };
  useEffect(() => {
    fetchList();
  }, []);

  //Return list of tasks
  return (
    <Box
      marginRight={"10%"}
      width={"216px"}
      height={"autp"}
      backgroundColor={"#eeeeee"}
      scrollBehavior={"inside"}
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "4px 4px 10px rgba(0, 0, 255, 0.1)",
      }}
    >
      <KanbanTask column_id={column} />
    </Box>
  );
}

export default KanbanList;
