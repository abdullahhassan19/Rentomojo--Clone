import './Footer.css'
import {Box,Button,Center,Heading,Text,Input,Image,Divider} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import { SiFacebook} from 'react-icons/si';
import {FiTwitter}from 'react-icons/fi';
import {ImLinkedin}from 'react-icons/im';
import {BsYoutube}from 'react-icons/bs';
import {ImInstagram}from 'react-icons/im';
import {BsDribbble}from 'react-icons/bs';
import {IoIosArrowForward} from "react-icons/io";
import {SiMinutemailer} from "react-icons/si"



function ReadMore(){

return (
<>
<div className='footermaindiv'>
        <Heading fontSize={['15px','18px','18px']}>
        Rent Everything You Need For Your Home From One Convenient Location.
         </Heading>
        <Text fontSize={['12px','12px','13px']} style={{marginTop:"-15px"}}>We offer a handpicked selection of furniture, appliances, and electronics for residents of Bangalore.</Text>
      <ul>
      <li>  <Text fontSize={['12px','12px','13px']}>
      <a>Furniture on rent:</a> You can rent furniture for your bedroom, living room, dining room or nursery. Our furniture is made by top, reputed brands.</Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
         <a>Appliances on rent:</a> We offer appliances for your home and kitchen. You can rent TVs, air conditioners, washing machines, microwaves, fridges,
          and cooktops made by top brands like Samsung and Haier.
        </Text></li>
        <li>  
          <Text fontSize={['12px','12px','13px']}>
      
<a>Electronics on rent:</a> Apple or Android? You can freely choose between both, thanks to RentoMojo! We offer the latest smartphones, laptops, tablets, and other smart devices on rent in Bangalore.
          </Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Furniture & appliance packages on rent:</a> Want a big discount with your rental furniture, appliances, or electronics? Pick out a package that offers everything you need at a discounted price!</Text>
         </li>
        </ul> 



        <Heading fontSize={['15px','18px','18px']}>
        Renting From Us Is Smarter Than Buying From A Retailer
         </Heading>
        <Text fontSize={['12px','12px','13px']} style={{marginTop:"-15px"}}>
        RentoMojo offers you multiple advantages that no retailer can offer.</Text>
      <ul>
      <li>  <Text fontSize={['12px','12px','13px']}>
      <a>Product swap:</a>Every 12 months, you can trade your rental items for a newer design.</Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
         <a>Free maintenance:</a> Our team will periodically maintain and clean your rental products for free.
        </Text>
        </li>
        <li>  
          <Text fontSize={['12px','12px','13px']}>
      
         <a>Damage waiver:</a> We don’t charge for any minor damage.
          </Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Free relocation:</a> RentoMojo will pack and move your rented items to any new PIN code we are present in, for free!</Text>
         </li>

         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Hassle-free returns:</a>  You can return any item you don’t like at the time of delivery, without a deposit deduction.</Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Free delivery and installation:</a>  We offer free delivery and installation in Bangalore city.</Text>
         </li>
        </ul> 




        <Heading fontSize={['15px','18px','18px']}>
        Why RentoMojo in Bangalore?
         </Heading>
        <Text fontSize={['12px','12px','13px']} style={{marginTop:"-15px"}}>
        RentoMojo lets you use top-quality furniture, branded electronics, and the best appliances in the market for a fraction of the retail price.</Text>
      <ul>
      <li>  <Text fontSize={['12px','12px','13px']}>
      <a>Flexible plans: </a>Our plans start at 3 months and go up all the way to 3 years! Choose any plan that best suits your needs and budget.
</Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
         <a>Option to close early:</a> You can opt-out of your rental agreement at any time. You only pay till the current usage date.
        </Text>
        </li>
        <li>  
          <Text fontSize={['12px','12px','13px']}>
      
         <a>Quality checks:</a>RentoMojo takes care to provide you with the best quality possible. All our rental items undergo strict quality checks and are in mint condition.

          </Text>
         </li>
         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Top-notch service:</a>  Our service is both efficient and reliable. Ordering from us takes less than 5 minutes.</Text>
         </li>

         <li>  <Text fontSize={['12px','12px','13px']}>
        <a> Huge savings: </a>  RentoMojo’s Rental Monthly Installment (RMI) fee is cheaper than the EMI you pay when you buy a product from a store. We offer big savings to our customers in Bangalore!
        </Text>
         </li>
        
        </ul> 
        </div>

</>)

}


 const Footer = () => {
 const [show,setShow]=useState(false)
//  const ScrollButton = () =>{
  
//   const [visible, setVisible] = useState(false)
  
//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300){
//       setVisible(true)
//     } 
//     else if (scrolled <= 300){
//       setVisible(false)
//     }
//   };
  
//   const scrollToTop = () =>{
//     window.scrollTo({
//       top: 0, 
//       behavior: 'smooth'
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };
// }
//   window.addEventListener('scroll', toggleVisible);


  return (
    <Box className="footer-main">
    <Center w={['95%','90%',"85%"]}  className="first-child-footer" >
        <Box >
         <Heading fontSize={['15px','18px','18px']}>
         Enjoy An Upgraded Lifestyle In Bangalore City On A Budget With RentoMojo!
         </Heading>
        <Text   fontSize={['12px','12px','13px']}>RentoMojo is a leading rental company with a pan-India presence. We offer furniture, appliances, 
            and electronics on rent in Bangalore at an affordable monthly fee. When you choose to rent from us 
            instead of buying from a store, you get to use the best products in the market and still save money!</Text>
        <Text fontSize={['12px','12px','13px']}>Whether you have a home in Bangalore or have just rented a room here, you’ll find everything you
         need on our website. We offer top-quality furniture, appliances, and electronics, made by the most dependable, in-demand brands around. If you choose to 
         rent from us, you will receive multiple rewards like free maintenance, free relocation, and damage waiver</Text>
        <Text fontSize={['12px','12px','13px']}>
        RentoMojo makes it effortless for you to rent from us. All you need to do is pick out the products you 
        like, add them to your cart, and then check out. Our team will deliver your rental items directly to your home and also install them for you. We offer fast delivery to all parts of Bangalore, including 
        locations such as Bangalore Bazaar, Malleswaram, Doorvavinagar, Bangalore Sub Foreign Post, and Agara.
        </Text>

        {!show?null:<ReadMore/>}

        <Button style={{border:"0px"}} onClick={()=>setShow(!show)}>Read{show?" Less":" More"}<IoIosArrowForward/></Button>
     
     </Box>
    </Center>

    <Box className='middle-box'>
    
    <Box >
      <Box>
           <Text className='main-text'>RENTOMOJO</Text>  
             </Box>
           <Box fontSize={['12px','12px','13px']}>
            <Text>About Us</Text>
            <Text>Culture</Text>
            <Text>Investors</Text>
            <Text>Careers</Text>
            <Text>Contact</Text>
            <Text>Our Benefits</Text>
            <Text>Sitemap</Text>
         </Box>
         </Box>
 


         <Box >
      <Box>
           <Text className='main-text'>INFORMATION</Text>  
             </Box>
           <Box fontSize={['12px','12px','13px']}>
            <Text>Blog</Text>
            <Text>FAQS</Text>
            <Text>Documents Required</Text>
            </Box>
         </Box>





         <Box >
      <Box>
           <Text className='main-text'>POLICIES</Text>  
             </Box>
           <Box fontSize={['12px','12px','13px']} >
            <Text>Shipping Policy</Text>
            <Text>Cancellation & Return</Text>
            <Text>Privacy Policy</Text>
            <Text>Rental Terms & Conditions</Text>
            <Text>Referral Terms & Conditions</Text>
          
         </Box>
         </Box>

         



         <Box >
      <Box>
           <Text className='main-text'>NEED HELP ?</Text>  
             </Box>
           <Box>
            <Button height="40px" style={{border:"1px solid black",borderRadius:"5%" }}>Chat with us(9AM-6PM)</Button>
            <Text fontSize={['12px','12px','13px']}><a href='mailto:jo@rentomojo.com' style={{color:"gray"}}>
              <SiMinutemailer/>jo@rentomojo.com</a></Text>
          <Box>  <Text className='main-text'>DOWNLOAD APP</Text>
            <Box className='google-Apple-play'>
             <a href='https://play.google.com/store/apps/details?id=com.rentomojo&_branch_match_id=981958682668916786&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTL3ILTfYKK052jAQA4IGbfRsAAAA%3D'>
             
             <Image height="40px" src='https://www.freepnglogos.com/uploads/itunes-logo/google-play-itunes-png-logo-4.png' width='120px'/>
             </a> 
             <a href='https://apps.apple.com/in/app/rentomojo-products-on-rent/id1404801676?_branch_match_id=981958682668916786&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTNyu1MM8wL3bzigIAWVRPyxsAAAA%3D'>

              <Image width='140px' height="50px" src="data:image/png;base64,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" />
             </a>
            </Box>
            </Box>
         </Box>
         </Box>







        
    </Box>

    <Divider orientation='horizontal' />

<Box className='lower-box'>

<Box><Text fontSize={['12px','12px','13px']}>© 2022. Edunetwork Pvt. Ltd.</Text></Box>
<Box className='social-media'>
 <a href='https://www.facebook.com/rentomojo' target='_blank'><SiFacebook/></a>
 <a href='https://twitter.com/rentomojo' target='_blank'><FiTwitter/></a>
 <a href='https://www.linkedin.com/company/rentomojo' target='_blank'><ImLinkedin/></a>
 <a href='https://www.youtube.com/c/RentomojoOfficial' target='_blank'><BsYoutube/></a>
 <a href='https://www.instagram.com/rentomojo/' target='_blank'><ImInstagram/></a>
 <a href='https://dribbble.com/RentoMojo' target='_blank'><BsDribbble/></a>
</Box>

{/* <Box style={{textAlign:"right",cursor:"pointer",
display: visible ? 'inline' : 'none'}} onClick={scrollToTop} 
     ><Text >Go Up ^ </Text></Box> */}

</Box> 
    </Box>
  )
}

export default Footer;