import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  ModalFooter,
  Button,
  FormControl,
  Input,
  Box,
  Select,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

function KanbanTaskEditModal({
  onClose,
  isOpen,
  task_id,
  column,
  task_name,
  description,
  acceptance_criteria,
  assigner,
  assignee,
  story_points,
  start_date,
  end_date,
  priority,
  created_at,
  updated_at,
  initialRef,
}) {
  const status = ["To-do", "In progress", "Completed"];
  const priorityPick = [1, 2, 3, 4];

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://127.0.0.1:8000/kanban/tasks/${task_id}/`,
      formData
    );
    console.log(response);
    window.location.reload(true);
    // Handle the response as needed
  };

  const [formData, setformData] = useState({
    task_id: 1,
    column: 1,
    task_name: task_name,
    description: "",
    acceptance_criteria: "",
    assigner: "",
    assignee: "",
    story_points: "",
    start_date: "",
    end_date: "",
    priority: "",
    created_at: "",
    updated_at: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = (closed) => {
    if (closed == "closed") {
      setIsEditable(false);
    } else {
      setIsEditable(!isEditable);
    }
  };

  return (
    <>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handleEdit("closed");
        }}
        size={"3xl"}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent overflowX={"hidden"}>
          <ModalHeader>
            <Text paddingLeft={"10px"} fontSize={"26px"} fontWeight={"400"}>
              {task_name}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {!isEditable ? (
              <Box>
                <Box paddingLeft={"11px"} fontSize={"14px"}>
                  <Text>Description: {description}</Text>
                  <Text>Acceptance criteria: {acceptance_criteria}</Text>
                  <Text>Status: {status[column]}</Text>
                  <Text>Priority: P{priority}</Text>
                  <Text>Story points: {story_points}</Text>
                  <Text>Assigner ID: {assigner}</Text>
                  <Text>Assignee ID: {assignee}</Text>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"} bottom={0}>
                  <Button
                    paddingBottom={"5px"}
                    onClick={onClose}
                    background={"transparent"}
                    _hover={{ bg: "transparent" }}
                    fontSize={"14px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleEdit}
                    color={"#ffffff"}
                    width={"79px"}
                    height={"30px"}
                    borderRadius={"4px"}
                    fontSize={"14px"}
                    background={"#2a4ecb"}
                    fontWeight={"400"}
                    _hover={{ bg: "#2a4fff" }}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Box display={"flex"}>
                    <Box paddingLeft={"10px"}>
                      <Text
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                        paddingBottom={"8px"}
                      >
                        Description
                      </Text>
                      <Textarea
                        color={"#333333"}
                        defaultValue={description}
                        name={"description"}
                        onChange={handleChange}
                        type="textbox"
                        textAlign={"start"}
                        width={"420px"}
                        height={"260px"}
                        borderRadius={"4px"}
                        fontSize={"14px"}
                      />
                      <Text
                        marginTop={"3.5%"}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                        paddingBottom={"8px"}
                      >
                        Acceptance criteria
                      </Text>
                      <Textarea
                        defaultValue={acceptance_criteria}
                        name={"acceptance_criteria"}
                        onChange={handleChange}
                        type="textbox"
                        textAlign={"start"}
                        width={"420px"}
                        height={"30px"}
                        borderRadius={"4px"}
                        fontSize={"14px"}
                      />
                    </Box>
                    <Box marginLeft={"50px"} paddingRight={"20px"}>
                      <FormLabel
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                      >
                        Status
                      </FormLabel>
                      <Select
                        id={"column"}
                        defaultValue={column}
                        name={"column"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        fontSize={"12px"}
                      >
                        {status.map((status, index) => (
                          <option key={index} value={index + 1}>
                            {status}
                          </option>
                        ))}
                      </Select>
                      <FormLabel
                        paddingTop={"8%"}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                      >
                        Priority
                      </FormLabel>
                      <Select
                        defaultValue={priority}
                        name={"priority"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        fontSize={"12px"}
                      >
                        {priorityPick.map((priorityPick) => (
                          <option key={priorityPick} value={priorityPick}>
                            P{priorityPick}
                          </option>
                        ))}
                      </Select>
                      <FormLabel
                        paddingTop={"8%"}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                      >
                        Story points
                      </FormLabel>
                      <Input
                        defaultValue={story_points}
                        name={"story_points"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        type={"text"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        placeholder="Min: 1 Max: 5"
                        fontSize={"12px"}
                      />
                      <FormLabel
                        paddingTop={"8%"}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                      >
                        Assigner
                      </FormLabel>
                      <Input
                        defaultValue={assigner}
                        name={"assigner"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        type={"text"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        placeholder="Assigner ID"
                        fontSize={"12px"}
                      />
                      <FormLabel
                        paddingTop={"8%"}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"rgba(0,0,0,0.50)"}
                      >
                        Assignee
                      </FormLabel>
                      <Input
                        defaultValue={assignee}
                        name={"assignee"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        type={"text"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        placeholder="Assignee ID"
                        fontSize={"12px"}
                      />
                    </Box>
                  </Box>
                  <Box
                    marginTop={"30px"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Button
                      paddingBottom={"5px"}
                      onClick={onClose}
                      background={"transparent"}
                      _hover={{ bg: "transparent" }}
                      fontSize={"14px"}
                      fontWeight={"400"}
                      color={"rgba(0,0,0,0.50)"}
                    >
                      Cancel
                    </Button>
                    <Button
                      type={"submit"}
                      onClick={onClose}
                      color={"#ffffff"}
                      width={"79px"}
                      height={"30px"}
                      borderRadius={"4px"}
                      fontSize={"14px"}
                      background={"#2a4ecb"}
                      fontWeight={"400"}
                      _hover={{ bg: "#2a4fff" }}
                    >
                      Save
                    </Button>
                  </Box>
                </FormControl>
              </form>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default KanbanTaskEditModal;
