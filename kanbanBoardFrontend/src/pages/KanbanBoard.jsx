import React, { useState, useEffect } from "react";
import "../App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanList from "../components/KanbanList";
import KanbanTaskModal from "./KanbanTaskModal";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Main dashboard with all components
function KanbanBoard() {
  // Passing the username and user_id to display on the dashboard
  const { state } = useLocation();
  const { username, user_id } = state;

  const [count, setCount] = useState([]);
  const [lists, setLists] = useState([]);

  // API call to fetch all the lists and tasks
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

  // Hook used to access react router history and navigates to other routers
  const navigate = useNavigate();

  // Code to capitalize the first letter of the username
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Navigate users to login page after logout
  const handleLogout = () => {
    navigate("/");
  };

  // Columns and tasked mapped based on the progress
  return (
    <Box margin={"5%"}>
      <Box display={"flex"} width={"100%"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Text fontSize={"36px"} fontWeight={"400"}>
            Kanban Board
          </Text>
        </motion.div>
        <Button
          justifyContent={"flex-end"}
          marginLeft={"auto"}
          width={"79px"}
          height={"30px"}
          borderRadius={"4px"}
          border={"1px solid #D9D9D9"}
          background={"#2a4ecb"}
          _hover={{
            bg: "#2a4fff",
            transform: "scale(1.05)",
            boxShadow: "4px 4px 10px rgba(0, 0, 255, 0.1)",
          }}
          color={"#ffffff"}
          fontSize={"14px "}
          fontWeight={"400"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* <Text fontSize={"24px"} fontWeight={"400"}>
          {capitalizeFirstLetter(username)}'s tasks
        </Text> */}
        <Text fontSize={"24px"} fontWeight={"400"}>
          Welcome {capitalizeFirstLetter(username)}
        </Text>
      </motion.div>
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
