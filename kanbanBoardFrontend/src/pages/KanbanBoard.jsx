import React, { useState, useEffect } from "react";
import "../App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanList from "../components/KanbanList";
import KanbanTaskModal from "./KanbanTaskModal";

function KanbanBoard() {
  const [count, setCount] = useState([]);
  const [lists, setLists] = useState([]);

  const fetchData = async () => {
    const listResponse = await fetch("http://127.0.0.1:8000/kanban/lists");
    const taskResponse = await fetch("http://127.0.0.1:8000/kanban/tasks/");
    const listJson = await listResponse.json();
    const taskJson = await taskResponse.json();
    setLists(listJson);
    setCount(taskJson);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box margin={"5%"}>
      <Text fontSize={"36px"} fontWeight={"400"}>
        Kanban Board
      </Text>
      <Text fontSize={"24px"} fontWeight={"400"}>
        Buzz Aldrin's tasks
      </Text>
      <KanbanTaskModal />
      <Box marginTop={"3%"} display={"flex"}>
        {lists.map((lists, i) => (
          <Box key={i} marginRight={"3%"}>
            <Text fontSize={"16px"}>
              {lists.col_name} (
              {count.filter((task) => task.column === lists.column_id).length})
            </Text>
            <KanbanList column={lists.column_id} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KanbanBoard;
