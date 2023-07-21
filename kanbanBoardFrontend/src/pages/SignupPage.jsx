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
import axios from "axios";

function SignupPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    pass_field: "",
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchCredentials = async () => {
    const response = await fetch("http://127.0.0.1:8000/kanban/users/");
    const resultJson = await response.json();
    setUsers(resultJson);
    console.log(resultJson);
  };
  useEffect(() => {
    fetchCredentials();
  }, []);

  function GoBack(e) {
    e.preventDefault();
    navigate("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (users.filter((user) => user.email === credentials.email).length != 0) {
      alert("Email already registered");
    } else {
      const response = await axios.post(
        "http://127.0.0.1:8000/kanban/users/",
        credentials
      );
      console.log(response);
      alert("Registered successfully");
      navigate("/");
    }
  };
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
            Register
          </Text>
          <form onSubmit={handleRegister}>
            <FormControl paddingBottom={"20px"} isRequired>
              <FormLabel
                fontSize={"14px"}
                fontWeight={"400"}
                color={"rgba(0,0,0,0.50"}
              >
                Username
              </FormLabel>
              <Input
                boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
                fontSize={"14px"}
                placeholder="mrkanbanboard"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
            </FormControl>
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
                color={"#ffffff"}
                width={"79px"}
                height={"30px"}
                borderRadius={"4px"}
                fontSize={"14px"}
                background={"#2a4ecb"}
                fontWeight={"400"}
                _hover={{ bg: "#2a4fff" }}
                onClick={GoBack}
              >
                Go Back
              </Button>
              <Button
                background={"transparent"}
                _hover={{ bg: "transparent" }}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"rgba(0,0,0,0.50)"}
                type={"submit"}
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

export default SignupPage;