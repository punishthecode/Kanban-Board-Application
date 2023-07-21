import React, { useState, useEffect } from "react";
import { Box, Icon, Text, useDisclosure, Modal } from "@chakra-ui/react";
import TaskPriority from "./TaskPriority";
import KanbanTaskEditModal from "../pages/kanbanTaskEditModal";
import "../App.css";

function KanbanTask({ column_id }) {
  const [tasks, setTasks] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/tasks/");
    const resultJson = await response.json();
    setTasks(resultJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const column = tasks.filter((task) => task.column === column_id);

  return (
    <Box
      key={tasks.task_id}
      paddingTop={"5%"}
      marginLeft={"5%"}
      marginRight={"5%"}
      marginTop={"5%"}
    >
      {column.map((tasks, i) => (
        <Box
          key={tasks.task_id}
          backgroundColor={"#ffffff"}
          width={"195px"}
          height={"auto"}
          marginBottom={"10px"}
          cursor={"pointer"}
          onClick={() => {
            setSelectedCard(tasks);
            onOpen();
          }}
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
              {tasks.story_points}
            </Text>
          </Box>
        </Box>
      ))}
      <KanbanTaskEditModal
        key={selectedCard.task_id}
        task_id={selectedCard.task_id}
        column={selectedCard.column}
        task_name={selectedCard.task_name}
        description={selectedCard.description}
        acceptance_criteria={selectedCard.acceptance_criteria}
        assigner={selectedCard.assigner}
        assignee={selectedCard.assignee}
        story_points={selectedCard.story_points}
        start_date={selectedCard.start_date}
        end_date={selectedCard.end_date}
        priority={selectedCard.priority}
        created_at={selectedCard.created_at}
        updated_at={selectedCard.updated_at}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}

export default KanbanTask;
