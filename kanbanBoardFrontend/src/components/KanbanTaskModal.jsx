import React from "react";
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

function KanbanTaskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        marginTop={"4%"}
        width={"79px"}
        height={"30px"}
        borderRadius={"4px"}
        border={"1px solid #D9D9D9"}
        background={"#2a4ecb"}
        _hover={{ bg: "#2a4fff" }}
        onClick={onOpen}
      >
        <Text color={"#ffffff"} fontSize={"14px"} fontWeight={"400"}>
          Create
        </Text>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text paddingLeft={"10px"} fontSize={"26px"} fontWeight={"400"}>
              Clean office space
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                  type="textbox"
                  placeholder="Describe your task"
                  textAlign={"start"}
                  width={"391px"}
                  height={"249px"}
                  borderRadius={"4px"}
                  fontSize={"14px"}
                />
              </Box>
              <Box marginLeft={"35px"} paddingRight={"20px"}>
                <FormControl>
                  <FormLabel
                    fontSize={"12px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Status
                  </FormLabel>
                  <Select
                    borderRadius={"4px"}
                    height={"32px"}
                    width={"185px"}
                    ref={initialRef}
                    placeholder="Select status"
                    fontSize={"12px"}
                  />
                  <FormLabel
                    paddingTop={"8%"}
                    fontSize={"12px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Priority
                  </FormLabel>
                  <Select
                    borderRadius={"4px"}
                    height={"32px"}
                    width={"185px"}
                    ref={initialRef}
                    placeholder="Select priority"
                    fontSize={"12px"}
                  />
                  <FormLabel
                    paddingTop={"8%"}
                    fontSize={"12px"}
                    fontWeight={"400"}
                    color={"rgba(0,0,0,0.50)"}
                  >
                    Story points
                  </FormLabel>
                  <Select
                    borderRadius={"4px"}
                    height={"32px"}
                    width={"185px"}
                    ref={initialRef}
                    placeholder="Select story points"
                    fontSize={"12px"}
                  />
                </FormControl>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default KanbanTaskModal;
