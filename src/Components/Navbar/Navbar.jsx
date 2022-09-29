import React, { useState } from "react";
import { Stack, Image, Select, Input, Text, Flex, Box } from "@chakra-ui/react";
import "./Navbar.css";
import { BsSearch, BsCart3 } from "react-icons/bs";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import rentomojopic from "../../Assest/rentomojologo.png"
import Login from "../Login/Login";


const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  };
 


  return (
    <Flex
      justifyContent={{
        xl: "space-between",
        md: "space-between",
        base: "flex-start",
      }}
      alignItems="center"
      p="10px"
      width="100%"
      gap="10px"
      background="white"
      zIndex="9"
      pl={{ base: "5%", md: "", xl: "10%" }}
      pr={{ base: "5%", md: "", xl: "10%" }}
      position="sticky"
      top="0"
      left="0"
      boxShadow=" 2px 2px 8px rgba(0,0,0,0.2)"
    >
      <Image
        src={rentomojopic}
        alt="errorloading logo"
        width={"190px"}
        height={"33px"}
        display={{ base: "none", md: "none", xl: "inline-flex" }}
        onClick={() => navigate(`/`)}
        cursor={"pointer"}
      />

      <Select
        width={"180px"}
        display={{ base: "none", md: "none", lg: "inline-flex" }}
      >
        <option value="">Mumbai</option>
        <option value="">Pune</option>
        <option value="">Banglore</option>
        <option value="">Delhi</option>
      </Select>
      <Stack
        className="searchinp"
        direction={"row"}
        border={"1px solid rgba(0,0,0,0.2)"}
        padding={{ xl: "0 15px", md: "0 15px", base: "10px 10px" }}
        alignItems={{ xl: "center", md: "center", base: "center" }}
        borderRadius={"10px"}
        h={{ xl: "", md: "", base: "auto" }}
        display={{ base: "inline", md: "inline-flex", xl: "inline" }}
      >
        <Input
          variant={"unstyled"}
          placeholder="Search for products"
          htmlSize={50}
          onChange={(e) => searchItems(e.target.value)}
          p={{ xl: "10px", md: "10px", base: "0px" }}
        />

        <BsSearch className="searchlogo" cursor={"pointer"} />

      </Stack>
      <Stack
        direction={"row"}
        alignItems="center"
        marginRight={{ xl: 16, md: 16, base: 2 }}
        cursor={"pointer"}
        // onClick={() => navigate(`/cart`)}
        h="50px"
        w={{ xl: "80px", md: "40px", base: "80px" }}
        position="relative"
      >
        <Flex
          position="absolute"
          borderRadius="full"
          top="4%"
          right="4%"
          backgroundColor="#1dbdc0"
          h={{ xl: "20px", md: "16px", base: "14px" }}
          w={{ xl: "20px", md: "16px", base: "14px" }}
          justifyContent="center"
          alignItems="center"
        //   display={Cart.length === 0 ? "none" : "inline"}
        >
          <Text fontSize="10px" color="white" textAlign="center" mt={{xl:"2px"}}>
            {/* {Cart.length} */}
          </Text>
        </Flex>
        <BsCart3 />
        <Link to="/cart">
        
        <Text display={{ base: "none", md: "none", lg: "inline-flex" }}>
          Cart
        </Text>
        </Link>
      </Stack>
      <Login />
    </Flex>
  );
};

export default Navbar;

const Button = styled.button`
  border-radius: 10px;
  padding: 0.25em 1em;
  font-size: 13px;
  color: white;
  border: 2px solid #de4034;
  background-color: #de4034;
  &:hover {
    color: tomato;
    padding: 0.25em 1em;
    border: 2px solid #de4034;
    border-radius: 10px;
    background-color: white;
  }
`;

