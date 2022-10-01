import './Electronics.css'
// import {Box,Button,Image,Text} from '@chakra-ui/react'
import {Box,Button,Image,Text,Select,Stack,Checkbox,Input} from '@chakra-ui/react'
import {HiOutlineTruck} from 'react-icons/hi'
import {BiRupee} from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import SubNavbar from '../Subnavbar/Subnavbar'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../Redux/App/action'
import {FiFilter} from 'react-icons/fi'

const data=[
    {
        id:1,
        name:"OnePlus 7 (Mirror Gray)",
        image:"https://p.rmjo.in/moodShot/zorunxgt-1024x512.jpg",
        desc:"A true successor to OnePlus 6T, OnePlus 7 makes a grand return with its 6.41” FHD+ Optic AMOLED packed in a neat waterdrop notch, dual-stereo speakers and a superior dual-rear camera setup (48+5 MP). Experience uninterrupted gaming experience with the new Fnatic gaming mode and Warp Charge 30 technology that’s ready for the day in less than 20 minutes.",
        category:"electronics",
        subcategory:"smartphones",
        price:"989"
    },
    {
        id:2,
        name:"Redmi K20 Pro (Carbon Black)",
        image:"https://p.rmjo.in/moodShot/0el20cnj-1024x512.jpg",
        desc:"Make way for the alpha flagship with Redmi K20 Pro. The new K20 Pro features a notch-less 6.39” Horizon AMOLED and a premium glass and aluminum Aura Prime design. Loaded with a 20MP pop-up camera, Game Turbo 2.0, and 8-layer graphite stack cooling system, K20 Pro opens up a whole new world of possibilities.",
        category:"electronics",
        subcategory:"smartphones",
        price:"829"
    },
    {
        id:3,
        name:"Samsung Galaxy Note 10 (Aura Black)",
        image:"https://p.rmjo.in/moodShot/dem5mxy3-1024x512.jpg",
        desc:"With a 6.3-inch dynamic AMOLED screen and a 7nm processor, Samsung Galaxy Note10 is a mobile that packs the experience of a computer, a gaming console, a movie-tech camera and an intelligent pen into one device! The Note10 has 4 cameras ( 1 front and 3 rear) and scores big on all the camera essentials, from the dual aperture lens to an ultra wide camera, live focus, and even scene optimizer. With the all-new elegant S pen, writing notes on-the-go is easier and the Note10 will turn your handwritten notes into readable, shareable text.",
        category:"electronics",
        subcategory:"smartphones",
        price:"1049"
    },
    
    {
        id:4,
        name:"Windows i5/4GB - Powered by MF",
        image:"https://p.rmjo.in/moodShot/f7dcph7i-1024x512.jpg",
        desc:"Best suited for low to moderate multitasking and basic gaming.",
        category:"electronics",
        subcategory:"Laptops",
        price:"3033"
    },
    {
        id:5,
        name:"MacBook Pro i5 - Powered by MF",
        image:"https://p.rmjo.in/moodShot/9bqyg56t-1024x512.jpg",
        desc:"Meet your new taskmaster, featuring an Intel Core i5 processor with an integrated graphics card. The MacBook Pro is up for anything you need at ultra-fast speed. Incredibly thin and light-weight, this 13.3-inch display laptop is the one you bring along wherever you go!",
        category:"electronics",
        subcategory:"Laptops",
        price:"7449"
    },
    {
        id:6,
        name:"MacBook Pro i7 - Powered by MF",
        image:"https://p.rmjo.in/moodShot/vljk1zpi-1024x512.jpg",
        desc:"This MacBook Pro is bundled with an Intel Core i7 processor to ensure that wherever you go, you function at your highest potential and speed. This 13.3-inch display laptop is one of the thinnest, brightest on the market.",
        category:"electronics",
        subcategory:"Laptops",
        price:"1049"
    },
    
    {
        id:7,
        name:"Amazon Echo",
        image:"https://p.rmjo.in/moodShot/ticpw82j-1024x512.jpg",
        desc:"Designed to be your smart home companion, Amazon Echo is more than just a nifty little handsfree smart speaker. Play music, make calls, ask for information on news, sports or weather or simply control all your smart-home devices with the power of your voice. With Amazon Echo, it all starts with ‘Hey, Alexa’.",
        category:"electronics",
        subcategory:"smart_devices",
        price:"199"
    },
    {
        id:8,
        name:"Amazon Fire TV Stick",
        image:"https://p.rmjo.in/moodShot/a0zja0h7-1024x512.jpg",
        desc:"With the all-new Fire TV stick, experience over 2000+ apps, live news, sports, thousands of movies and TV series with the power of your voice. With the Alexa Voice remote, play and control content by simply asking, “Alexa, find thriller movies” or “Alexa, find the latest TV shows”, and start streaming within minutes. With the Fire TV stick, there’s always something great to watch.",
        category:"electronics",
        subcategory:"smart_devices",
        price:"119"
    },
    {
        id:9,
        name:"boAt AAVANTE",
        image:"https://p.rmjo.in/moodShot/1wrkjz59-1024x512.jpg",
        desc:"Watch your favorite movies and songs come alive with boAt AAVANTE Bar wireless Bluetooth soundbar speaker. Whether it’s playing a song or watching a movie, boAt AAVANTE Bar comes together to create an exhilarating cinematic experience with its sleek elegant design, multiple connectivity modes, 2-way subwoofer, and powerful 120W total output. Ready to rock and roll?",
        category:"electronics",
        subcategory:"smart_devices",
        price:"179"
    },
    {
        id:10,
        name:"Apple iPad Pro 11 (Space Grey)",
        image:"https://p.rmjo.in/moodShot/0vzvxqc6-1024x512.jpg",
        desc:"The Apple iPad Pro is one of the best tablets available in the market. The A12 Bionic chip is the most powerful chip ever. This device is the perfect choice for all the multi-taskers out there. If you want to take your creativity to the next level, iPad Pro is what you need. Be it gaming, creating or watching movies, you’ll get the best of everything with just one device.",
        category:"electronics",
        subcategory:"tables",
        price:"2449"
    },
    {
        id:11,
        name:"Samsung Galaxy Tab S4 (Black)",
        image:"https://p.rmjo.in/moodShot/hw444up0-1024x512.jpg",
        desc:"The Samsung Galaxy Tab S4 comes with an amazing 10.5-inch Super AMOLED display, which gives you an expansive viewing area. The stylus lets you send personalised messages and also jot down notes or ideas without having to unlock. That’s not it, this tablet also comes with an 8MP front camera, Qualcomm Snapdragon processor and multi-layer security to protect your data.",
        category:"electronics",
        subcategory:"tables",
        price:"1599"
    }, 
    {
        id:12,
        name:"Apple iPad 10.2 inch (Grey)",
        image:"https://p.rmjo.in/moodShot/qo33wdzt-1024x512.jpg",
        desc:"From taking notes, sketching out an idea or just editing a document, Apple iPad 10.2 can get all your work done without any hassle. Powered by A10 Fusion chip, iPad 10.2 is perfect for watching your favorite series or working on your next masterpiece. With the versatility of a computer and portability of a smart device, iPad 10.2 is ready for all your adventures.",
        category:"electronics",
        subcategory:"tables",
        price:"1129"
    },
    
    {
        id:13,
        name:"Playstation 5 - Powered by MF",
        image:"https://p.rmjo.in/productSquare/4aavxjxz-500x500.jpg",
        desc:"It's finally here on public demand, one of the most powerful gaming consoles on the planet. Also, with backwards compatibility, so that you still could play your old but favourite games.",
        category:"electronics",
        subcategory:"gaming",
        price:"11199"
    },
    {
        id:14,
        name:"Xbox One + 3 Games - Powered by MF",
        image:"https://p.rmjo.in/moodShot/3axytqpw-1024x512.jpg",
        desc:"For all the Microsoft fans out there. The console that brings out the gamer in you, bundled with any three games of your choice.",
        category:"electronics",
        subcategory:"gaming",
        price:"5509"
    },
    {
        id:15,
        name:"Playstation 5 + FIFA 21 - Powered by MF",
        image:"https://p.rmjo.in/moodShot/vcjn30oa-1024x512.jpg",
        desc:"It's finally here on public demand, one of the most powerful gaming consoles on the planet, bundled with your favourite, FIFA 21.",
        category:"electronics",
        subcategory:"gaming",
        price:"1049"
    },
    
    ]

const ImageBox=({id,name,category,subcategory,desc,price,image})=>{
     
    const [isHovering, setIsHovering] = useState(false);
    const [heart,setHeart]=useState(false)
   
    const dispatch=useDispatch()
   
    const payload={
        id:id,
        name:name,
        image:image,
        desc:desc,
        category:category,
        subcategory:subcategory,
        price:price
      }
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





const Electronics = () => {
    const[Data,setData]=useState([])
    const [sortType, setSortType] = useState('');// for sorting the data ===

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
    <div>
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
          <Checkbox  style={{color:"teal",fontSize:"15px",}}  >SmartPhones</Checkbox>
          <Checkbox style={{color:"teal",fontSize:"15px",}} >Laptops</Checkbox>
          <Checkbox style={{color:"teal",fontSize:"15px",}} >Gaming Consoles</Checkbox>
          <Checkbox style={{color:"teal",fontSize:"15px",}} >Smart Devices</Checkbox>
          <Checkbox style={{color:"teal",fontSize:"15px",}} >Tables</Checkbox>
    
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
    </div>
  )
}

export default Electronics