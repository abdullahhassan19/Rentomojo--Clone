import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "@reacticons/ionicons";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  slide: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
//   .....above is slider setting..........

export default function Firstcarousel() {
  const [slider, setSlider] = React.useState(0);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://user-images.githubusercontent.com/101388860/192748921-dea0e4b6-85ee-4f78-9375-91f9af9304bd.png",
    "https://s.rmjo.in/Paytm-Bank-.png",
    "https://s.rmjo.in/WP-Web.png",
  ];
  return (
    <Box
      position={"relative"}
      height={{ base: "270px", md: "300px", lg: "470px" }}
      width={"73.5%"}
      overflow={"hidden"}
      // border={"1px solid black"}
      borderRadius={"30px"}
      margin={"auto"}
      marginTop={{ base: "-140px", md: "-60px", lg: "100px" }}
      backgroundColor={"#d4e0e9"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsChevronLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsChevronRight />
      </IconButton>
      {/* Slider */}
      <Slider
        {...settings}
        ref={(slider) => setSlider(slider)}
        borderRadius="md"
      >
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"420"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${url})`}
            borderRadius="20px"
          />
        ))}
      </Slider>
      <Box
        backgroundColor={"#d4e0e9"}
        display={"flex"}
        height={"50px"}
        width={"full"}
      >
        <p style={{ fontSize: "12px", marginTop: "8px", margin: "auto" }}>
          Safety precautions during COVID-19. We’re taking additional steps and
          precautionary measures to protect our community from COVID-19.{" "}
        </p>
      </Box>
      
    </Box>
  );
}
