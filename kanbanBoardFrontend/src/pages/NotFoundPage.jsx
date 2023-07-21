import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box p={10} textAlign="center">
      <Heading as="h1" size="2xl" mb={5}>
        404 - Not Found
      </Heading>
      <Text fontSize="xl" mb={8}>
        The requested page was not found.
      </Text>
      <Button
        type={"submit"}
        color={"#ffffff"}
        width={"79px"}
        height={"30px"}
        borderRadius={"4px"}
        fontSize={"14px"}
        background={"#2a4ecb"}
        fontWeight={"400"}
        _hover={{ bg: "#2a4fff" }}
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NotFoundPage;
