import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
  Box,
  Textarea,
  Select,
} from "@chakra-ui/react";

// Modal component to create new tasks
function KanbanTaskModal() {
  //Custom hook to handle the modal view
  const { isOpen, onOpen, onClose } = useDisclosure();
  const status = ["To-do", "In progress", "Completed"];
  const priority = [1, 2, 3, 4];
  // Allows us to reduce unnecessary re-renders by storing mutable value
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const currentTime = new Date();
  const [formData, setFormData] = useState({
    task_id: 1,
    column_id: 1,
    task_name: "",
    description: "",
    acceptance_criteria: "",
    assigner: "",
    assignee: "",
    story_points: "",
    start_date: "",
    end_date: "",
    priority: "",
    created_at: "",
    updated_at: currentTime.toISOString,
  });

  // Code block to handle event change event and submission of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // Application reloads upon submission to reflect changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8000/kanban/tasks/",
      formData
    );
    window.location.reload(true);
  };

  return (
    <>
      <Button
        marginTop={"4%"}
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
        onClick={onOpen}
      >
        <Text color={"#ffffff"} fontSize={"14px "} fontWeight={"400"}>
          Create
        </Text>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        scrollBehavior={"inside"}
      >
        <ModalOverlay backdropFilter={"blur(5px)"} />
        <ModalContent overflowX={"hidden"}>
          <ModalHeader>
            <Text paddingLeft={"10px"} fontSize={"26px"} fontWeight={"400"}>
              Create new task
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Input
                  value={formData.task_name}
                  name={"task_name"}
                  onChange={handleChange}
                  type={"text"}
                  marginLeft={"10px"}
                  placeholder="Task title"
                  width={"50%"}
                  marginBottom={"10px"}
                ></Input>
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
                      value={formData.description}
                      name={"description"}
                      onChange={handleChange}
                      type="textbox"
                      placeholder="Describe your task"
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
                      value={formData.acceptance_criteria}
                      name={"acceptance_criteria"}
                      onChange={handleChange}
                      type="textbox"
                      placeholder="Acceptance criteria"
                      textAlign={"start"}
                      width={"420px"}
                      height={"30px"}
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
                      Due date
                    </Text>
                    <Input
                      value={formData.end_date}
                      name={"end_date"}
                      onChange={handleChange}
                      type="date"
                      textAlign={"start"}
                      width={"420px"}
                      height={"30px"}
                      borderRadius={"4px"}
                      fontSize={"14px"}
                    ></Input>
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
                      placeholder="Select status"
                      id={"column"}
                      value={formData.column}
                      name={"column"}
                      onChange={handleChange}
                      borderRadius={"4px"}
                      height={"32px"}
                      width={"215px"}
                      ref={initialRef}
                      fontSize={"12px"}
                    >
                      {status.map((status, index) => (
                        <option key={index} value={index}>
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
                      placeholder="Select priority"
                      value={formData.priority}
                      name={"priority"}
                      onChange={handleChange}
                      borderRadius={"4px"}
                      height={"32px"}
                      width={"215px"}
                      ref={initialRef}
                      fontSize={"12px"}
                    >
                      {priority.map((priority) => (
                        <option key={priority} value={priority}>
                          P{priority}
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
                      value={formData.story_points}
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
                      value={formData.assigner}
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
                      value={formData.assignee}
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
                    _hover={{
                      bg: "transparent",
                      transform: "scale(1.05)",
                    }}
                    fontSize={"14px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Cancel
                  </Button>
                  <Button
                    type={"submit"}
                    color={"#ffffff"}
                    width={"79px"}
                    height={"30px"}
                    borderRadius={"4px"}
                    fontSize={"14px"}
                    background={"#2a4ecb"}
                    fontWeight={"400"}
                    _hover={{
                      bg: "#2a4fff",
                      transform: "scale(1.05)",
                      boxShadow: "4px 4px 10px rgba(0, 0, 255, 0.1)",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default KanbanTaskModal;
