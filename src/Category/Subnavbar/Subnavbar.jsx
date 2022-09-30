import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import {Link, useParams} from 'react-router-dom'
import './SubNavbar.css'
const SubNavbar = () => {
  const pathname = window.location.pathname
  // console.log(pathname)
  return (
   <Box className='subnavbar'>
     <Box className='subnavbar-main-box'>
        <Box><Link to='/' className='link' ><Text >Home</Text></Link></Box>
        <Text className='pathname'>{pathname}</Text>
        <Box className='category'>
        <Box><Link to='/Packages' className='link' ><Text >Packages </Text></Link></Box>
        <Box><Link to='/Furniture'  className='link'><Text >Furniture </Text></Link></Box>
        <Box><Link to='/Appliances' className='link' ><Text >Appliances </Text></Link></Box>
        <Box><Link to='/Electronics'  className='link'><Text >Electronics </Text></Link></Box>
        <Box><Link to='/Fitness' className='link' ><Text > Fitness</Text></Link></Box>
        </Box>
    </Box>
   </Box>
  )
}

export default SubNavbar