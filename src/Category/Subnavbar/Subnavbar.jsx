import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import './SubNavbar.css'
const SubNavbar = () => {
  return (
   <Box className='subnavbar'>
     <Box className='subnavbar-main-box'>
        <Box><Link to='/' className='link' ><Text >Home</Text></Link></Box>
        <Box className='category'>
        <Box><Link to='' className='link' ><Text >Packages </Text></Link></Box>
        <Box><Link to=''  className='link'><Text >Furniture </Text></Link></Box>
        <Box><Link to='' className='link' ><Text >Appliances </Text></Link></Box>
        <Box><Link to=''  className='link'><Text >Electronics </Text></Link></Box>
        <Box><Link to='' className='link' ><Text > Fitness</Text></Link></Box>
        </Box>
    </Box>
   </Box>
  )
}

export default SubNavbar