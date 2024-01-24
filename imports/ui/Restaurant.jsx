import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const Restaurant = ({
  name,
  address,
  tags,
  status,
  creation_date,
  openingHours,
  image,
}) => {
  const getCurrentTime = () => {
    const now = new Date()
    const time = now.getHours() * 100 + now.getMinutes() // Convert hours and minutes to a 24-hour format
  }

  const buttonStyle = {
    backgroundColor: status === 'Open' ? '#6AA84F' : '#C0C0C0',
  }

  return (
    <>
      <Card className='restaurant-card' sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 130 }} image={image} title={name} />
        <CardContent>
          <div className='card-header'>
            <h3>{name}</h3>
            <span className='btn-standard status' style={buttonStyle}>
              {status}
            </span>
          </div>

          <p className='light-font'>{tags.join(', ')}</p>
          <p>{address}</p>
        </CardContent>
      </Card>
    </>
  )
}
