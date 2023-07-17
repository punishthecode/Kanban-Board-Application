import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

function TaskPriority({ priority }) {
  if (priority >= 3) {
    return (
      <>
        <ChevronDownIcon width={4} height={4} color={"#30ad53"} />
        <Text fontSize={"10px"} marginRight={"5%"}>
          Low
        </Text>
      </>
    );
  } else if (priority == 1) {
    return (
      <>
        <ChevronUpIcon width={"4"} height={"4"} color={"#cb2a2a"} />
        <Text fontSize={"10px"} marginRight={"5%"}>
          High
        </Text>
      </>
    );
  } else {
    return (
      <>
        <ChevronDownIcon width={"4"} height={"4"} color={"#2a4ecb"} />
        <Text fontSize={"10px"} marginRight={"5%"}>
          Med
        </Text>
      </>
    );
  }
}

export default TaskPriority;
