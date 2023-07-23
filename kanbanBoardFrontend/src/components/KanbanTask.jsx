import React, { useState, useEffect } from "react";
import {
  Box,
  Icon,
  Text,
  useDisclosure,
  Modal,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TaskPriority from "./TaskPriority";
import KanbanTaskEditModal from "../pages/kanbanTaskEditModal";
import "../App.css";

// Task component (Cards within the list) with column_id prop
function KanbanTask({ column_id }) {
  const [tasks, setTasks] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  // Custom hook to handle the modal views
  const { isOpen, onOpen, onClose } = useDisclosure();

  //API call to fetch all the tasks
  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/tasks/");
    const resultJson = await response.json();
    setTasks(resultJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtering tasks based on column_id
  const column = tasks.filter((task) => task.column === column_id);

  // Sorting tasks based on priority
  const sortedColumns = column.sort((a, b) => a.priority - b.priority);

  // Search function for searching tasks within each column/list
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTasks = sortedColumns.filter((task) =>
    task.task_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      key={tasks.task_id}
      paddingTop={"5%"}
      marginLeft={"5%"}
      marginRight={"5%"}
      marginTop={"5%"}
    >
      <InputGroup
        width={"100%"}
        size={"sm"}
        marginBottom={"5%"}
        fontWeight={"400"}
        _hover={{
          border: "#2a4fff",
          transform: "scale(1.05)",
          boxShadow: "4px 4px 10px rgba(0, 0, 255, 0.1)",
        }}
        fontSize={"14px"}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={SearchIcon} color="gray.300" />}
        />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks"
        />
      </InputGroup>
      {filteredTasks.map((tasks, i) => (
        <Box
          key={tasks.task_id}
          backgroundColor={"#ffffff"}
          width={"195px"}
          height={"auto"}
          marginBottom={"10px"}
          cursor={"pointer"}
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "4px 4px 10px rgba(0, 0, 255, 0.1)",
          }}
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
