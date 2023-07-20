import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Text, Box } from "@chakra-ui/react";

function TaskPriority({ priority }) {
  if (priority >= 3) {
    return (
      <>
        <Box marginTop={"1"} marginRight={"1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path
              d="M1.86625 0.442505L5.5 3.8775L9.13375 0.442505L10.25 1.5L5.5 6L0.75 1.5L1.86625 0.442505Z"
              fill="#30AD53"
            />
          </svg>
        </Box>
        <Text fontSize={"10px"} marginRight={"5%"}>
          Low
        </Text>
      </>
    );
  } else if (priority == 1) {
    return (
      <>
        <Box marginTop={"1"} marginRight={"1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9px"
            height="5.56px"
            viewBox="0 0 9 6"
            flex-shrink="0"
          >
            <path
              d="M1.0575 5.56L4.5 2.12345L7.9425 5.56L9 4.50202L4.5 -2.38419e-06L0 4.50202L1.0575 5.56Z"
              fill="#CB2A2A"
            />
          </svg>
        </Box>
        <Text fontSize={"10px"} marginRight={"5%"}>
          High
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Box marginTop={"1"} marginRight={"1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path
              d="M1.86625 0.442505L5.5 3.8775L9.13375 0.442505L10.25 1.5L5.5 6L0.75 1.5L1.86625 0.442505Z"
              fill="#2A4ECB"
            />
          </svg>
        </Box>
        <Text fontSize={"10px"} marginRight={"5%"}>
          Med
        </Text>
      </>
    );
  }
}

export default TaskPriority;
