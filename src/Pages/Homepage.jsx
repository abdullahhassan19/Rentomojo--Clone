import React from "react"

import Finalcarousel2 from "../Components/Home/Carousel2/Finalcarousel2"
import Firstcarousel from "../Components/Home/FirstCarousel"
import { Knowmore } from "../Components/Home/Knowmore"
import Review from "../Components/Home/LastReview/Review"

import Options from "../Components/Home/Options"



const Homepage=()=>{
    return(
   <>
   <Firstcarousel/>
   <Options/>
   <Finalcarousel2/>
   <Knowmore/>
   <Review/>
  
   </>
    )
}
export default Homepage