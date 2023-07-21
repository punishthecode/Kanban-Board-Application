import React, { useState, useEffect } from "react";
import "../App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanList from "../components/KanbanList";
import KanbanTaskModal from "./KanbanTaskModal";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function KanbanBoard() {
  const { state } = useLocation();
  const { username, user_id } = state;
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

  const navigate = useNavigate();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box margin={"5%"}>
      <Box display={"flex"} width={"100%"}>
        <Text fontSize={"36px"} fontWeight={"400"}>
          Kanban Board
        </Text>
        <Button
          justifyContent={"flex-end"}
          marginLeft={"auto"}
          width={"79px"}
          height={"30px"}
          borderRadius={"4px"}
          border={"1px solid #D9D9D9"}
          background={"#2a4ecb"}
          _hover={{ bg: "#2a4fff" }}
          color={"#ffffff"}
          fontSize={"14px "}
          fontWeight={"400"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Text fontSize={"24px"} fontWeight={"400"}>
        {capitalizeFirstLetter(username)}'s tasks
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
