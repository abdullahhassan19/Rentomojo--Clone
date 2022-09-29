import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom"

const Options = () => {
  const data = [
    {
      img: "https://user-images.githubusercontent.com/101388860/192859965-823dd13c-42eb-4867-a72e-d081c9630c48.png",
      title: "Packages",
    },
    {
      img: "https://user-images.githubusercontent.com/101388860/192860397-53b97102-ac86-46cf-b193-09212f33d012.png",
      title: "Furniture",
    },
    {
      img: "https://user-images.githubusercontent.com/101388860/192860617-a18f7003-1178-4900-aa01-cf1636df11ca.png",
      title: "Appliances",
    },
    {
      img: "https://user-images.githubusercontent.com/101388860/192862261-662340eb-4277-4af9-9217-36205dd53787.png",
      title: "Electronics",
    },
    {
      img: "https://user-images.githubusercontent.com/101388860/192861736-12b3728d-a08d-4dfc-b4dd-7e368d22e3fe.png",
      title: "Fitness",
    },
    {
      img: "https://user-images.githubusercontent.com/101388860/192862598-173f2c6c-1794-4abf-a717-1dbae34491d0.png",
      title: "WfhEssentials",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/${name}`, { replace : true })
  }

  return (
    <Box
      display={{ xl: "flex", md: "grid", base: "grid" }}
      gridTemplateColumns={{ base: "repeat(4,1fr)", md: "repeat(4,1fr)" }}
      gridGap={{ md: "20px", base: "20px" }}
      justifyContent="space-between"
      
      m="auto"
      p="10px 10px"
      width={{ base: "100%", md: "100%", xl: "80%" }}
      h="fit-content"
    >
      {data.map((item) => (
        <Box
          key={item.title}
          display="flex"
          flexDirection="column"
          border="1px solid #d4e0e9"
          w={{ xl: "220.33px", md: "170px", base: "81px" }}
          h={{ xl: "127.19px", md: "107px", base: "101px" }}
          justifyContent="center"
          marginTop={"20px"}
          alignItems="center"
          borderRadius={{ xl: "10px", md: "8px", base: "6px" }}
          _hover={{ boxShadow: "0px 10px 10px #d4e0e9" }}
          transition="all 0.2s ease-in"
          onClick={() => handleClick(item.title)}
        >
          <Box
            h={{ base: "36px", md: "55px", xl: "55px" }}
            w={{ base: "36px", md: "55px", xl: "55px" }}
          >
            <Image h="80%" w="80%" src={item.img} alt={item.title} />
          </Box>
          <Text fontSize={{ base: "10px", md: "12px", xl: "14px" }} pt="7px">
            {item.title}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Options;