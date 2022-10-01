import './Electronics.css'
import {Box,Button,Image,Text,Select,Stack,Checkbox,Input} from '@chakra-ui/react'
import {HiOutlineTruck} from 'react-icons/hi'
import {BiRupee} from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiFilter} from 'react-icons/fi'


const applianceData=[
    {
        id:1,
        name:"Top Load Washing Machine",
        image:"https://p.rmjo.in/productSquare/ad3v3tmb-250x250.jpg",
        category:"appliance",
        subcategory:"washing_machines",
        price:769
    },
    {
        id:2,
        name:"Semi Automatic Washing Machine",
        image:"https://p.rmjo.in/productSquare/ow2weu3y-250x250.jpg",
        category:"appliance",
        subcategory:"washing_machines",
        price:479
    },
    {
        id:3,
        name:"Front Load Washing Machine",
        image:"https://p.rmjo.in/productSquare/b2xbq6rc-250x250.jpg",
        category:"appliance",
        subcategory:"washing_machines",
        price:1189
    },
    
    {
        id:4,
        name:"Cloth Dryer",
        image:"https://p.rmjo.in/productSquare/ex9dpggj-250x250.jpg",
        category:"appliance",
        subcategory:"washing_machines",
        price:929
    },
    {
      id:5,
      name:"IFB Dishwasher",
      image:"https://p.rmjo.in/moodShot/dgzow825-1024x512.jpg",
      category:"appliance",
      subcategory:"dishwashers",
      price:1929
  },
  {
    id:6,
    name:"Air Cooler 35L",
    image:"https://p.rmjo.in/moodShot/mx0zcxv0-1024x512.jpg",
    category:"appliance",
    subcategory:"air_coolers",
    price:429
},
{
  id:7,
  name:"Air Cooler 70 L",
  image:"https://p.rmjo.in/moodShot/y3u8am09-1024x512.jpg",
  category:"appliance",
  subcategory:"air_coolers",
  price:649
},
{
  id:8,
  name:"Air Cooler 27 L",
  image:"https://p.rmjo.in/moodShot/qlilhijp-1024x512.jpg",
  category:"appliance",
  subcategory:"air_coolers",
  price:329
},
{
  id:9,
  name:"Microwave Solo 20L",
  image:"https://p.rmjo.in/moodShot/pcyfdgub-1024x512.jpg",
  category:"appliance",
  subcategory:"microwaves",
  price:399
},
{
  id:10,
  name:"Convection Microwave 20L",
  image:"https://p.rmjo.in/moodShot/eshpj99l-1024x512.jpg",
  category:"appliance",
  subcategory:"microwaves",
  price:329
},
{
  id:11,
  name:"Induction Cooktop",
  image:"https://p.rmjo.in/moodShot/4s0k2na8-1024x512.jpg",
  category:"appliance",
  subcategory:"microwaves",
  price:329
},
{
  id:12,
  name:"Air Conditioner 1.5 Ton (4 Star)",
  image:"https://p.rmjo.in/productSquare/v1c75c2j-500x500.jpg",
  category:"appliance",
  subcategory:"air_conditioners",
  price:4679
},
{
  id:13,
  name:"DrinkPrime - Smart Water Purifier",
  image:"https://p.rmjo.in/moodShot/evz6r0tl-1024x512.jpg",
  category:"appliance",
  subcategory:"purifire",
  price:467
},
{
  id:14,
  name:"Livpure Bolt - Smart Water Purifier",
  image:"https://p.rmjo.in/moodShot/82zs4ny4-1024x512.jpg",
  category:"appliance",
  subcategory:"purifire",
  price:497
},
{
  id:15,
  name:"Air Purifier",
  image:"https://p.rmjo.in/moodShot/dx0ibbuu-1024x512.jpg",
  category:"appliance",
  subcategory:"purifire",
  price:779
},
{
  id:16,
  name:"LED TV - 32",
  image:"https://p.rmjo.in/moodShot/rmj0xelr-1024x512.jpg",
  category:"appliance",
  subcategory:"television",
  price:1779
},
{
  id:17,
  name:"Smart LED TV - 32",
  image:"https://p.rmjo.in/moodShot/lhma5sga-1024x512.jpg",
  category:"appliance",
  subcategory:"television",
  price:1079
},
{
  id:18,
  name:"LED TV - 40",
  image:"https://p.rmjo.in/moodShot/kim05hbi-1024x512.jpg",
  category:"appliance",
  subcategory:"television",
  price:1579
},
{
  id:19,
  name:"Single Door Fridge (210 Litre)",
  image:"https://p.rmjo.in/moodShot/30d2mypn-1024x512.jpg",
  category:"appliance",
  subcategory:"refrigerators",
  price:1579
},
{
  id:20,
  name:"Double Door Fridge (240 Litre)",
  image:"https://p.rmjo.in/moodShot/a8ssqqst-1024x512.jpg",
  category:"appliance",
  subcategory:"refrigerators",
  price:1389
},
{
  id:21,
  name:"Single Door Fridge (170 Litre)",
  image:"https://p.rmjo.in/moodShot/3pqys4n0-1024x512.jpg",
  category:"appliance",
  subcategory:"refrigerators",
  price:879
},

]






const ImageBox=({id,name,category,subcategory,desc,price,image})=>{
     
    const [isHovering, setIsHovering] = useState(false);
    const [heart,setHeart]=useState(false)





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
            <Button className='btn' style={{ transition:"2s"}}>Add to Cart</Button>
          </Box>
        )}
           
        </Box>
       
       </Box>
    )
}







const Appliances = () => {
    const[Data,setData]=useState([])
    const [sortType, setSortType] = useState('');// for sorting the data ===

   // console.log('sortState:', sortState)

    //console.log('Data:', Data)

    useEffect(()=>{
      setData(applianceData)
     if(sortType==="asc"){
      const sorted = [...Data].sort((a, b) => a.price - b.price);
      console.log('sorted:', sorted)
      setData(sorted)
     }
     if(sortType==="des"){
      const sorted = [...Data].sort((a, b) => b.price - a.price);
      setData(sorted)
     } 
       
    
    
    },[applianceData,sortType,Data])


  return (
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
      <Checkbox  style={{color:"teal",fontSize:"15px",}}  >Refrigerators & Freezers</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Television</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Water & Air Purifier</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Washing Machine</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Air Conditioner</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} >Microwave & Induction</Checkbox>
       <Checkbox style={{color:"teal",fontSize:"15px",}} >Air Cooler</Checkbox>
       <Checkbox style={{color:"teal",fontSize:"15px",}} >Dishwasher</Checkbox>
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
  )
}

export default Appliances