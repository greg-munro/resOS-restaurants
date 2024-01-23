import React from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import IcecreamIcon from '@mui/icons-material/Icecream';


const CuisineBtn = () => {
  
  return (
    <div className='cuisine-icons'>
        <LocalPizzaIcon fontSize='large' className='cuisine-button'></LocalPizzaIcon>
        <FastfoodIcon  fontSize='large'className='cuisine-button'></FastfoodIcon>
        <RamenDiningIcon fontSize='large' className='cuisine-button' />
        <IcecreamIcon  fontSize='large' className='cuisine-button' />
    </div>
  )
}

export default CuisineBtn
