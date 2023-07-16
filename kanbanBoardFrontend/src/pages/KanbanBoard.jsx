import React, { useState, useEffect } from "react";
import "../App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import KanbanList from "../components/KanbanList";
import KanbanTaskModal from "../components/KanbanTaskModal";

function KanbanBoard() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      { id: 1, text: "Not started(1)" },
      { id: 2, text: "In progress(2)" },
      { id: 3, text: "Completed(3)" },
    ]);
  }, []);
  return (
    <Box margin={"5%"}>
      <Text fontSize={"36px"} fontWeight={"400"}>
        Kanban Board
      </Text>
      <Text fontSize={"24px"} fontWeight={"400"}>
        Buzz Aldrin's tasks
      </Text>
      {/* <Button
        borderRadius={"4px"}
        border={"1px solid #D9D9D9"}
        marginTop={"4%"}
        color={"white"}
        background={"#2a4ecb"}
        2_hover={{ bg: "#a4fff" }}
        fontWeight={"400"}
        fontSize={"14px"}
      >
        Create
      </Button> */}
      <KanbanTaskModal />
      <Box marginTop={"3%"} display={"flex"}>
        {list.map((item) => (
          <Box marginRight={"3%"} key={item.id}>
            <Text fontSize={"16px"} paddingBottom={"3%"}>
              {item.text}
            </Text>
            <KanbanList />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KanbanBoard;
