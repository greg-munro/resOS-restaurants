import React from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import IcecreamIcon from '@mui/icons-material/Icecream';


const CuisineBtn = () => {
  
  return (
    <div className='cuisine-icons'>
        <LocalPizzaIcon fontSize='large' className='btn-standard cuisine'></LocalPizzaIcon>
        <FastfoodIcon  fontSize='large' className='btn-standard cuisine'></FastfoodIcon>
        <RamenDiningIcon fontSize='large' className='btn-standard cuisine' />
        <IcecreamIcon  fontSize='large' className='btn-standard cuisine' />
    </div>
  )
}

export default CuisineBtn
