import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import image from "../assets/KanbanLogo.png";
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
import PropTypes from "prop-types";

// Login page
function LoginPage({ setToken }) {
  // Hook to handle use credentialsS
  const [username, setUsername] = useState("");
  const [pass_field, setPass_Field] = useState("");
  //Custom hook to navigate between routers
  const navigate = useNavigate();

  // Function to handle navigation to sign-up page
  const navigateToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/kanban/login/",
        {
          username,
          pass_field,
        }
      );
      if (response.status === 200) {
        setToken({
          username: response.data.username,
          // user_id: response.data.user_id,
        });
        window.location.reload();
        setUsername(response.data.username);
        // navigate(`/kanban?username=${response.data.username}`);
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert("Error occured while logging in");
    }
  };

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
            src={image}
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
          <form onSubmit={handleLogin}>
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
                placeholder="mrkanban"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={pass_field}
                onChange={(e) => setPass_Field(e.target.value)}
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

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;
