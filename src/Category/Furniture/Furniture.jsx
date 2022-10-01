import './Electronics.css'
import {Box,Button,Image,Text,Select,Stack,Checkbox,Input} from '@chakra-ui/react'
import {HiOutlineTruck} from 'react-icons/hi'
import {BiRupee} from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiFilter} from 'react-icons/fi'


const furnitureData=[
    {
        id:1,
        name:"Barney Leather Recliner (Brown)",
        image:"https://p.rmjo.in/productSquare/iercjo4s-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:799
    },
    {
        id:2,
        name:"Leo 3 - Seater Fabric Sofa (Blue)",
        image:"https://p.rmjo.in/productSquare/jgzhbnjy-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:919
    },
    {
        id:3,
        name:"Garfield 1-Seater Fabric Sofa (Grey)",
        image:"https://p.rmjo.in/productSquare/mhvnab1o-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:379
    },
    
    {
        id:4,
        name:"Garfield 3-Seater Fabric Sofa (Grey)",
        image:"https://p.rmjo.in/productSquare/950xy4xz-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:789
    },
    {
        id:5,
        name:"Felix 1-Seater Fabric Sofa (Blue)",
        image:"https://p.rmjo.in/productSquare/70gd43fg-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:379
    },
    {
        id:6,
        name:"Rex #-Seater Leather Sofa (Black)",
        image:"https://p.rmjo.in/productSquare/h1uwy1tr-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:659
    },
    
    {
        id:7,
        name:"Pixar TV Unit",
        image:"https://p.rmjo.in/productSquare/osn54glq-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:239
    },
    {
        id:8,
        name:"Lack TV Bench",
        image:"https://p.rmjo.in/productSquare/fgm22vkb-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:79
    },
    {
        id:9,
        name:"Caramel 4 - Seater Wooden Coffee Table",
        image:"https://p.rmjo.in/productSquare/0gj8t6w6-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:549,
    },
    {
        id:10,
        name:"Mocha Centre Table",
        image:"https://p.rmjo.in/productSquare/rjv08bll-250x250.jpg",
        category:"furniture",
        subcategory:"living room",
        price:69
    },
    {
        id:11,
        name:"Kipper Basic Bedroom",
        image:"https://p.rmjo.in/moodShot/vgqeajhe-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:919
    },
    {
        id:12,
        name:"Hutch 2-Door Wardrobe & Saddle Shoe Rack",
        image:"https://p.rmjo.in/moodShot/lcc7ot7j-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:589
    },
    {
        id:13,
        name:"Double Bed with Fridge & Washing Machine",
        image:"https://p.rmjo.in/moodShot/i05w1kj4-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:2286
    },
    
    {
        id:14,
        name:"Double Bed with Study Table & Chair",
        image:"https://p.rmjo.in/moodShot/pkfsbdyg-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:861
    },
    {
        id:15,
        name:"Napster Single Bed & Single Door Fridge Combo",
        image:"https://p.rmjo.in/moodShot/13yn4y8f-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:881
    },
    {
        id:16,
        name:"Magnum Bedroom Storage",
        image:"https://p.rmjo.in/moodShot/t8e463u6-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:947
    },
    
    {
        id:17,
        name:"Bedroom Basics",
        image:"https://p.rmjo.in/moodShot/aokzhdw0-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:714
    },
    {
        id:18,
        name:"Magnum Queen Master Bedroom",
        image:"https://p.rmjo.in/moodShot/02q6pz7x-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:1723
    },
    {
        id:19,
        name:"Napster Queen BAsic Bedroom",
        image:"https://p.rmjo.in/moodShot/974vl0xx-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:715
    },
    {
        id:20,
        name:"Napster Queen Utility Bedroom",
        image:"https://p.rmjo.in/moodShot/dimk2cl1-512x256.jpg",
        category:"furniture",
        subcategory:"Bed Room",
        price:634
    },
    {
        id:21,
        name:"IKEA Mammut Table & Chair Set",
        image:"https://p.rmjo.in/productSquare/s0yo6ill-500x500.jpg",
        category:"furniture",
        subcategory:"Baby Furniture",
        price:234
    },
    {
        id:22,
        name:"Mammut Children Chair by Ikea",
        image:"https://p.rmjo.in/moodShot/4m273cvn-1024x512.jpg",
        category:"furniture",
        subcategory:"Baby Furniture",
        price:94
    },
    {
        id:23,
        name:"Antilop Highchair with tray",
        image:"https://p.rmjo.in/moodShot/oa6h9w25-1024x512.jpg",
        category:"furniture",
        subcategory:"Baby Furniture",
        price:89
    },
    {
        id:24,
        name:"Michelle 4-Seater Dining Table & Chairs",
        image:"https://p.rmjo.in/moodShot/ev94fsl8-1024x512.jpg",
        category:"furniture",
        subcategory:"kitchen",
        price:1189
    },
    {
        id:25,
        name:"Downey Wooden Bar Unit",
        image:"https://p.rmjo.in/moodShot/zwz0s99n-1024x512.jpg",
        category:"furniture",
        subcategory:"kitchen",
        price:489
    },
    {
        id:26,
        name:"Heston 4-Seater Dining Table & Chairs",
        image:"https://p.rmjo.in/moodShot/5q3aaexs-1024x512.jpg",
        category:"furniture",
        subcategory:"kitchen",
        price:589
    },
    {
        id:27,
        name:"Emily Metal Study Table White",
        image:"https://p.rmjo.in/moodShot/ffsjeqws-1024x512.jpg",
        category:"furniture",
        subcategory:"WorkFromHome",
        price:289
    },
    {
        id:28,
        name:"Stuart Study Table",
        image:"https://p.rmjo.in/moodShot/98xy5bfu-1024x512.jpg",
        category:"furniture",
        subcategory:"WorkFromHome",
        price:189
    },
    {
        id:29,
        name:"Spotch Smart Workstation (White)",
        image:"https://p.rmjo.in/moodShot/qnbwn3a0-1024x512.jpg",
        category:"furniture",
        subcategory:"WorkFromHome",
        price:1509
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







const Furniture = () => {
    const[Data,setData]=useState([])
    const [sortType, setSortType] = useState('');// for sorting the data ===
   
   // console.log('sortState:', sortState)
   



    //console.log('Data:', Data)
    useEffect(()=>{
      setData(furnitureData)
     if(sortType==="asc"){
      const sorted = [...Data].sort((a, b) => a.price - b.price);
      console.log('sorted:', sorted)
      setData(sorted)
     }
     if(sortType==="des"){
      const sorted = [...Data].sort((a, b) => b.price - a.price);
      setData(sorted)
     } 
     
    

    },[furnitureData,sortType,Data])


 






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
     <Text  >ROOMS</Text>
      <Checkbox  style={{color:"teal",fontSize:"15px",}} 
         value="Bed Room" > Bed Room</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} value='living room' >Living Room</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} value='Baby Furniture' >Baby Furniture</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} value='kitchen' >Kitchen & Dining</Checkbox>
      <Checkbox style={{color:"teal",fontSize:"15px",}} value='WorkFromHome' >Work From Home(WFH)</Checkbox>
     
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

export default Furniture