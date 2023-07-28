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
import image from "../assets/KanbanLogo.png";

// Sign-up page
function SignupPage() {
  // Credentials required for sign-up
  const [username, setUsername] = useState("");
  const [pass_field, setPass_Field] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // Navigate back to login page
  function GoBack(e) {
    e.preventDefault();
    navigate("/login");
  }

  // Function handle submission of the sign-up form
  // This function filters existing users and posts registration credentials based on the result
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        pass_field
      ) == false
    ) {
      const response = await axios.post(
        "https://127.0.0.1:8000/kanban/signup/",
        {
          username: username,
          pass_field: pass_field,
          email: email,
        }
      );
      alert("Registered successfully");
      navigate("/login");
    } else {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, at least one number, and at least one special character (!@#$%^&*(),.?:{}|<>)."
      );
    }
  };

  // Sign-up page component
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
                Email
              </FormLabel>
              <Input
                boxShadow={"4px 4px 10px rgba(0, 0, 255, 0.1)"}
                fontSize={"14px"}
                placeholder="mrkanban@board.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={GoBack}
              >
                Go Back
              </Button>
              <Button
                background={"transparent"}
                _hover={{
                  bg: "transparent",
                  transform: "scale(1.05)",
                }}
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
