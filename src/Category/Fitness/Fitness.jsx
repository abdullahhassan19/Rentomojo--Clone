import './Electronics.css'
import {Box,Button,Image,Text,Select,Stack,Checkbox,Input} from '@chakra-ui/react'
import {HiOutlineTruck} from 'react-icons/hi'
import {BiRupee} from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiFilter} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../Redux/App/action'
import SubNavbar from '../Subnavbar/Subnavbar'


const data=[
    {
        id:101,
        name:"Exercise Cycle AB-100",
        image:"https://p.rmjo.in/moodShot/edbtdmwn-1024x512.jpg",
        desc:"Experience total elliptical and upper body training in one machine with Reach AB-100 air bike exercise cycle. The dual-action arms and manual resistance control ensure a true full-body workout from start till the end while the belt drive system ensures a natural position of cycling giving you the confidence to reach your fitness goals every time.",
        category:"fitness",
        subcategory:"tredmills",
        price:409 ,
    },
    {
        id:102,
        name:"Motorized Treadmill AF-515",
        image:"https://p.rmjo.in/moodShot/y0lv2tcu-1024x512.jpg",
        desc:"Workout from the comfort of your home with AF 515 Motorized Treadmill. Equipped with a powerful and noiseless 2.0 HP motor (4.0 peak) and a high-density 2-ply urethane belt, AF515 is a great option for beginners and fitness enthusiasts to crush your fitness goals.",
        category:"fitness",
        subcategory:"tredmills",
        price: 2069,
    },
    {
        id:103,
        name:"Auto Inclination Treadmill T-501",
        image:"https://p.rmjo.in/moodShot/300hordo-1024x512.jpg",
        desc:"Designed for the modern fitness enthusiast, Reach T-501 is a sleek and intuitive treadmill that’s equipped with features like auto-inclination and pro cushioning system to ensure a comfortable workout while reducing stress in your knees. Featuring 15 pre-set smart workout programs and a 5HP motor (peak), the T-501 will keep you motivated to push harder.",
        category:"fitness",
        subcategory:"tredmills",
        price:2119 ,
    },
    {
        id:104,
        name:"Motorized Treadmill AF 517",
        image:"https://p.rmjo.in/moodShot/2mryybvl-1024x512.jpg",
        desc:"Train harder with the new AF 517 Motorized Treadmill (N.S.). Ideal for muscle strengthening and improving your heart and circulatory functions, AF 517 is equipped with a powerful 2.0 HP motor (4.0 peak) with P.W.M. control to make your workout sessions at home better than ever.",
        category:"fitness",
        subcategory:"tredmills",
        price:2359 ,
    },
    {
        id:105,
        name:"Foldable Treadmill TD-M4",
        image:"https://p.rmjo.in/moodShot/6m35agi4-1024x512.jpg",
        desc:"Powermax TD-M4 is a modern lightweight design treadmill that subverts the traditional with folding storage less than 0.5 square meters for your ambition to lose weight. The TD-M4 Treadmill has a top speed of 14km/hr powered by a 2.0 Horse Power HiTorque DC LAMMER motor and equipped with 4 Rubber Balloon Powerflex precision cushioning by which you can challenge yourself to take your fitness to the next level.",
        category:"fitness",
        subcategory:"tredmills",
        price:2159 ,
    },
    {
        id:106,
        name:"Cross Trainer With Seat",
        image:"https://p.rmjo.in/moodShot/aak3eoor-1024x512.jpg",
        desc:"Using a cross-trainer can deliver an instinctively natural stride by ensuring a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. This cross trainer makes for an ideal fitness companion for your everyday workouts with an 8-level manual resistance control and additional personalization for your training sessions with heart-rate monitoring.",
        category:"fitness",
        subcategory:"cross_trainers",
        price:1189 ,
    },
    {
      id:107,
      name:"Cross Trainer EH-400",
      image:"https://p.rmjo.in/moodShot/gb76g4ep-1024x512.jpg",
      desc:"Powermax EH-400 Elliptical Cross Trainer delivers an instinctively natural stride with its patented front-drive design and electromagnetic 8-level resistance control ensuring safe and consistent strengthening workouts for your upper and lower body. The two-way ribbed drive system and pulse pads provide additional personalization for your workouts, making it an ideal fitness companion.",
      category:"fitness",
      subcategory:"cross_trainers",
      price:1499 ,
    },
    {
      id:108,
      name:"Cross Trainer C-500",
      image:"https://p.rmjo.in/moodShot/zqztx0ou-1024x512.jpg",
      desc:"The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
      category:"fitness",
      subcategory:"cross_trainers",
      price:1089 ,
    },
    {
      id:109,
      name:"Exercise Cycle AB-100",
      image:"https://p.rmjo.in/moodShot/edbtdmwn-1024x512.jpg",
      desc:"The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
      category:"fitness",
      subcategory:"excercise_bikes",
      price:409 ,
    },
    {
      id:110,
      name:"Smart Magnetic Exercise Bike",
      image:"https://p.rmjo.in/moodShot/g4iy0pi8-1024x512.jpg",
      desc:"Built to keep you fit, the Cockatoo CUB-01 is a modern exercise bike that comes with 8-level magnetic resistance to ensure uniform pressure across each weight level. The engineered seat structure allows the body to conform precisely to the desired posture, enabling maximum workout effect and helping you shed those extra K's",
      category:"fitness",
      subcategory:"excercise_bikes",
      price:689 ,
    },
    {
      id:111,
      name:"Crazy Fit Massager VP-500",
      image:"https://p.rmjo.in/moodShot/0m0zomav-1024x512.jpg",
      desc:"Built to keep you fit, the Cockatoo CUB-01 is a modern exercise bike that comes with 8-level magnetic resistance to ensure uniform pressure across each weight level. The engineered seat structure allows the body to conform precisely to the desired posture, enabling maximum workout effect and helping you shed those extra K's",
      category:"fitness",
      subcategory:"massagers",
      price:929,
    },
    {
      id:112,
      name:"Smart Magnetic Exercise Bike",
      image:"https://p.rmjo.in/moodShot/g4iy0pi8-1024x512.jpg",
      desc:"Built to keep you fit, the Cockatoo CUB-01 is a modern exercise bike that comes with 8-level magnetic resistance to ensure uniform pressure across each weight level. The engineered seat structure allows the body to conform precisely to the desired posture, enabling maximum workout effect and helping you shed those extra K's",
      category:"fitness",
      subcategory:"massagers",
      price:1935 ,
    },
    ]






const ImageBox=({id,name,category,subcategory,desc,price,image})=>{
     
    const [isHovering, setIsHovering] = useState(false);
    const [heart,setHeart]=useState(false)
    const payload={
      id:id,
      name:name,
      image:image,
      desc:desc,
      category:category,
      subcategory:subcategory,
      price:price
    }

    const dispatch=useDispatch()
    const handleaddtocart=(id)=>{
      // console.log("CART")
      dispatch(addtocart(payload))
      // console.log(id)
  }

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };


    const onClickHeart=()=>{
        setHeart(!heart)
    }

    return(
       <Box >
         
         <Box className='image-main-box' style={{height:`${isHovering?"360px":"340px"}`,transition:"1s"}}   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
           <Box  className='image-box'>
           <div className="heart-box" onClick={onClickHeart}>{heart?<Image width="20px" height="20px" src='https://img.icons8.com/emoji/2x/red-heart.png'/>:<AiOutlineHeart/>}</div>
            <Image className='img' src={image}  /></Box> 
           <Box className='name'><Text fontWeight="500" style={{textAlign:"center"}}>{name}</Text></Box>
         
           <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"-15px",
        width:"95%",margin:"auto",marginBottom:"5px"}}>
            <Box><Text fontWeight="500"><BiRupee/>{price}/mo</Text></Box>
            <Box><Text fontWeight="500"><HiOutlineTruck/>5 days</Text></Box>


            </Box> 

            {isHovering && (
          <Box className='button-box'>
            <Button className='btn' style={{ transition:"2s"}} onClick={(e)=>handleaddtocart(id)}>Add to Cart</Button>
          </Box>
        )}
           
        </Box>
       
       </Box>
    )
}







const Fitness = () => {
    const[Data,setData]=useState([])
    const [sortType, setSortType] = useState('');// for sorting the data ===

   // console.log('sortState:', sortState)

    //console.log('Data:', Data)

    useEffect(()=>{
      setData(data)
     if(sortType==="asc"){
      const sorted = [...Data].sort((a, b) => a.price - b.price);
      console.log('sorted:', sorted)
      setData(sorted)
     }
     if(sortType==="des"){
      const sorted = [...Data].sort((a, b) => b.price - a.price);
      setData(sorted)
     } 
       
    
    
    },[data,sortType])


  return (
    <>
    <SubNavbar/>
    
    <Box className='main-outer-box'>
      
      <Box style={{display:"flex",justifyContent:"space-between",padding:"2%"}}>
        <Box><FiFilter/>Filters</Box>
        <Box>
         
          <Stack spacing={2}>
             
       <Select onChange={(e) =>setSortType(e.target.value)} placeholder='Relevance' size='sm' 
         style={{color:"teal",border:"0px",backgroundColor:"#F0F8FF",fontSize:"14px"}}>
                    
                     <option value="asc"> Rent-Low To High</option>
                     <option value="des"> Rent-High To Low </option>
              </Select>
              
          </Stack>
          </Box>
        </Box>


 <Box style={{display:"flex"}}>
     <Box w={["0%","25%","25%"]} style={{paddingBottom:"2%",textAlign:"left"}} >


     <Stack className='filter-stack'  direction={['column',]}>
     <Text  >PRODUCT TYPE</Text>
      <Checkbox  style={{color:"teal",fontSize:"15px",}}  >Treadmills</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Cross Trainers</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Excercise Bikes</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Massagers</Checkbox>

     </Stack>



    <Stack className='filter-stack'>
      <Text >AVAILABILITY</Text>
      <Checkbox style={{color:"teal",fontSize:"15px",}}  defaultChecked>Out Of Stock</Checkbox>
      </Stack> 

<Stack className='filter-stack' style={{backgroundColor:"#E0FFFF",border:"0.5px solid teal",borderRadius:"1%"}}>
<Text fontSize='sm' fontWeight="500">What do you want us to launch next?</Text>
<Text fontSize='xs' color="gray">Suggest us a product</Text>
<Input  height='45px' placeholder='Your Suggestion' style={{border:"1px solid teal",marginBottom:"3%",borderRadius:"2%"}} />
</Stack>

     </Box>
     


     <Box className='container'>   {
             Data.map((item)=>{
                return <ImageBox key={item.id}  
                            image={item.image}
                            name={item.name}
                            id={item.id}
                            desc={item.desc}
                            price={item.price}
                            category={item.category}
                            subcategory={item.subcategory}
                            />
            })
        }
        </Box>
        
    </Box>
    </Box>
    </>
  )
}

export default Fitness