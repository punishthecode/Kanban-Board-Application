import React, { useState, useEffect } from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import TaskPriority from "./TaskPriority";
import "../App.css";

function KanbanTask({ column_id }) {
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/tasks/");
    const resultJson = await response.json();
    setTasks(resultJson);
    // console.log(resultJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const column = tasks.filter((task) => task.column === column_id);
  // const count = column.length;

  return (
    <Box
      paddingTop={"5%"}
      marginLeft={"5%"}
      marginRight={"5%"}
      marginTop={"5%"}
    >
      {column.map((tasks, i) => (
        <Box
          key={i}
          backgroundColor={"#ffffff"}
          width={"195px"}
          height={"auto"}
          marginBottom={"10px"}
        >
          <Text
            paddingTop={"5px"}
            fontWeight={"500"}
            fontSize={"14px"}
            paddingLeft={"5px"}
            paddingRight={"5px"}
          >
            {tasks.task_name}
          </Text>
          <Text
            fontWeight={"400"}
            paddingLeft={"5px"}
            paddingRight={"5px"}
            fontSize={"12px"}
          >
            {tasks.description}
          </Text>
          <Box
            marginTop={"10px"}
            display={"flex"}
            justifyContent={"flex-end"}
            bottom={"0"}
            marginRight={"5px"}
            paddingBottom={"5px"}
          >
            <TaskPriority priority={tasks.priority} />
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
      ))}
    </Box>
  );
}

export default KanbanTask;
