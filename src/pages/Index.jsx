import React, { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Input, Button, Box, Heading, Text, useToast } from "@chakra-ui/react";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const toast = useToast();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userDetails = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Here you would typically send a request to your backend
    // For demonstration, we'll just show a toast
    toast({
      title: isRegistering ? "Registration Successful" : "Login Successful",
      description: `Welcome ${userDetails.email}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // Reset form
    event.target.reset();
  };

  return (
    <Container centerContent p={4}>
      <Box w="full" maxW="md" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <VStack spacing={4} as="form" onSubmit={handleFormSubmit}>
          <Heading size="lg">{isRegistering ? "Register" : "Login"}</Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" name="password" type="password" placeholder="Enter your password" />
          </FormControl>
          <Button leftIcon={isRegistering ? <FaUserPlus /> : <FaSignInAlt />} colorScheme="blue" type="submit" w="full">
            {isRegistering ? "Register" : "Login"}
          </Button>
          <Button variant="link" colorScheme="blue" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Already have an account? Login" : "Need an account? Register"}
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
