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

// Passing task fields as props
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
  // Progress and priority
  const status = ["To-do", "In progress", "Completed"];
  const priorityPick = [1, 2, 3, 4];

  // Function to handle the event of changing input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // Function to delete a task upon clicking the delete button
  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await axios.delete(
      `https://127.0.0.1:8000/kanban/tasks/${task_id}/`
    );
    window.location.reload(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      `https://127.0.0.1:8000/kanban/tasks/${task_id}/`,
      formData
    );
    window.location.reload(true);
  };

  // Setting form defaults
  const currentTime = new Date();
  const [formData, setformData] = useState({
    task_id: task_id,
    column: column,
    task_name: task_name,
    description: description,
    acceptance_criteria: acceptance_criteria,
    assigner: assigner,
    assignee: assignee,
    story_points: story_points,
    start_date: start_date,
    end_date: end_date,
    priority: priority,
    created_at: created_at,
    updated_at: currentTime.toISOString(),
  });

  // Code block tp handle and track edit operation on tasks
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = (closed) => {
    if (closed == "closed") {
      setIsEditable(false);
    } else {
      setIsEditable(!isEditable);
    }
  };

  // Using OR to switch between view-only and editable state
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handleEdit("closed");
        }}
        size={"3xl"}
        scrollBehavior={"inside"}
      >
        <ModalOverlay backdropFilter={"blur(5px)"} />
        <ModalContent overflowX={"hidden"}>
          <ModalHeader>
            <Text paddingLeft={"10px"} fontSize={"26px"} fontWeight={"400"}>
              {task_name}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                  <Text>Deadline: {end_date}</Text>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"} bottom={0}>
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
                  {column === 2 && (
                    <Button
                      onClick={handleDelete}
                      color={"#ffffff"}
                      width={"79px"}
                      height={"30px"}
                      marginRight={"10px"}
                      borderRadius={"4px"}
                      fontSize={"14px"}
                      background={"#ff0000"}
                      fontWeight={"400"}
                      _hover={{
                        bg: "#ff000f",
                        transform: "scale(1.05)",
                        boxShadow: "4px 4px 10px rgba(255, 0, 0, 0.1)",
                      }}
                    >
                      Delete
                    </Button>
                  )}
                  {column != 2 && (
                    <Button
                      onClick={handleEdit}
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
                      Edit
                    </Button>
                  )}
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
                        height={"auto"}
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
                        defaultValue={end_date}
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
                        defaultChecked={column}
                        id={"column"}
                        // defaultValue={column}
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
                        defaultChecked={priority}
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
                        Story points (Min: 1 Max:5)
                      </FormLabel>
                      <Input
                        min={1}
                        max={5}
                        defaultValue={story_points}
                        name={"story_points"}
                        onChange={handleChange}
                        borderRadius={"4px"}
                        type={"number"}
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
                        type={"number"}
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
                        type={"number"}
                        height={"32px"}
                        width={"215px"}
                        ref={initialRef}
                        placeholder="Assignee ID"
                        fontSize={"12px"}
                      />
                    </Box>
                  </Box>
                </FormControl>
                <Box
                  marginBottom={"2.5%"}
                  marginTop={"5%"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    paddingBottom={"5px"}
                    onClick={handleEdit}
                    background={"transparent"}
                    _hover={{ bg: "transparent" }}
                    fontSize={"14px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Go back
                  </Button>
                  {column == 2 && (
                    <Button
                      onClick={handleDelete}
                      color={"#ffffff"}
                      width={"79px"}
                      height={"30px"}
                      marginRight={"10px"}
                      borderRadius={"4px"}
                      fontSize={"14px"}
                      background={"#ff0000"}
                      fontWeight={"400"}
                      _hover={{
                        bg: "#ff000f",
                        transform: "scale(1.05)",
                        boxShadow: "4px 4px 10px rgba(255, 0, 0, 0.1)",
                      }}
                    >
                      Delete
                    </Button>
                  )}
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
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default KanbanTaskEditModal;
