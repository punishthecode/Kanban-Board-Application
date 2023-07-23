import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  FormControl,
  Text,
  Button,
  FormLabel,
  Input,
  Center,
  Image,
} from "@chakra-ui/react";
import "../App.css";

// Login page
function LoginPage() {
  // Hook to handle use credentials
  const [credentials, setCredentials] = useState({
    email: "",
    pass_field: "",
  });
  const [users, setUsers] = useState([]);

  //Custom hook to navigate between routers
  const navigate = useNavigate();

  // Function to handle the event of input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // Function to handle navigation to sign-up page
  const navigateToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  // API call to fetch all the users
  const fetchCredentials = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/users/");
    const resultJson = await response.json();
    setUsers(resultJson);
  };

  useEffect(() => {
    fetchCredentials();
  }, []);

  // Function to validate the user credentials and provide access to the board based on the validation
  function checkCredentials(e) {
    e.preventDefault();
    const validate = users.filter(
      (user) =>
        user.email === credentials.email &&
        user.pass_field === credentials.pass_field
    );
    if (validate.length != 0) {
      navigate("/kanban", {
        state: {
          username: validate[0].username,
          user_id: validate[0].user_id,
        },
      });
    } else {
      alert("Invalid Credentials");
    }
  }

  // Login screen component
  return (
    <Center height={"100vh"}>
      <Box
        width={"25%"}
        borderRadius={"6px"}
        boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
      >
        <Box padding={"10%"}>
          <Image
            src="src\assets\KanbanLogo.png"
            width={"50px"}
            borderRadius={"6px"}
            boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
          ></Image>
          <Text
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={"16px"}
            paddingBottom={"10px"}
          >
            Login
          </Text>
          <form onSubmit={checkCredentials}>
            <FormControl paddingBottom={"20px"} isRequired>
              <FormLabel
                fontSize={"14px"}
                fontWeight={"400"}
                color={"rgba(0,0,0,0.50"}
              >
                Email
              </FormLabel>
              <Input
                boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
                fontSize={"14px"}
                placeholder="mrkanban@board.com"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl paddingBottom={"20px"} isRequired>
              <FormLabel
                fontSize={"14px"}
                fontWeight={"400"}
                color={"rgba(0,0,0,0.50"}
              >
                Password
              </FormLabel>
              <Input
                boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
                fontSize={"14px"}
                placeholder="password"
                type="password"
                name="pass_field"
                value={credentials.pass_field}
                onChange={handleChange}
              />
            </FormControl>
            <Center display={"flex"} justifyContent={"flex-end"}>
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
                Login
              </Button>
              <Button
                background={"transparent"}
                _hover={{ bg: "transparent", transform: "scale(1.05)" }}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"rgba(0,0,0,0.50)"}
                onClick={navigateToSignUp}
              >
                Register
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
    </Center>
  );
}

export default LoginPage;
