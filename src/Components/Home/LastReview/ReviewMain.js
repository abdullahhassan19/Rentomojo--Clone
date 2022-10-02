import React from "react";

import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "pure-react-carousel/dist/react-carousel.es.css";
import {

 
 
  StyledSlide2,
  StyledSlider2,
  BackButton2,
  NextButton2,
  CardText,
  CardImage,
  CardButton,
  CardButtonBlue,
  TextCont,
  Card2,
  ButtonContainer2,
  SliderContainer2
} from "./ReviewStyle";

const data = [
  {
    title: "Kushal Tiwari",
    cardText: "Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come.",
    src: "https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg"
  },
  {
    title: "Navin Kumar",
    cardText: "When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work.",
    src: "https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg"
  },
  {
    title: "Anjali Sharma",
    cardText: "I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.",
    src: "https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg"
  },
  {
    title: "Shreyas Ravet",
    cardText: "Rentomojo was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. The customer support staff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. ",
    src: "https://www.rentomojo.com/public/images/testimonials/shreyas-ravetkar.jpg"
  },
  {
    title: "Nikita Sharma",
    cardText: "The thought of renting the furniture had never occurred to me. When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb. I don’t have to carry the same furniture to every house I move to and can change the look of my home whenever I want.",
    src: "https://www.rentomojo.com/public/images/testimonials/nikita-sharma.jpg"
  },
  {
    title: "Manish Shrivastava",
    cardText: "I was suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done ☺. No tension for delivery, Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Rentomojo. It made my house a happy home!",
    src: "https://www.rentomojo.com/public/images/testimonials/manish-srivastava.jpg"
  },
  
];

const CardCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={2}
      step={1}
    >
      <ButtonContainer2>
        <TextCont>
        <span style={{marginLeft:"-200px"}}>Over 1.5 lac</span>
        <br/>
      <span  style={{marginLeft:"-198px"}}>happy subscribers</span>
<br/>
<br/>

<span  style={{marginLeft:"-200px"}}>Here's what they have</span><br/> <span style={{marginLeft:"-200px"}}>to say about their</span><br/> <span  style={{marginLeft:"-200px"}}>RentoMojo experience.</span>
          </TextCont>
        <BackButton2 style={{marginLeft:"-80px"}}>
          <FiChevronLeft size="1.5em" />
        </BackButton2>
        <NextButton2 style={{marginLeft:"-80px"}}>
          <FiChevronRight size="1.5em" />
        </NextButton2>
      </ButtonContainer2>
      <SliderContainer2>
        <StyledSlider2 classNameAnimation="animating">
          {data.map((item, index) => (
            <StyledSlide2
            key={index}
              index={index}
              classNameHidden="hidden"
              classNameVisible="visible"
            >
              <Card2>
                <CardImage backgroundImage={item.src} />
                <CardText>
                  <h2 style={{marginTop:"-450px",marginLeft:"100px",fontSize:"14px",color:"grey",fontFamily:"sans-serif"}}>{item.title}</h2>
                  <p style={{marginTop:"90px",lineHeight:"25px",textAlign:"center",color:"gray",fontFamily:"sans-serif",fontSize:"14px"}}>{item.cardText}</p>
                </CardText>
                {/* <CardButton />
                <CardButtonBlue /> */}
              </Card2>
            </StyledSlide2>
          ))}
        </StyledSlider2>
      </SliderContainer2>
    </CarouselProvider>
  );
};

export default CardCarousel;
