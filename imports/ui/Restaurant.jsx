import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const Restaurant = ({ name, openingHours, image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={name}
        />
        <CardContent>
          {name}
        </CardContent>
      </Card>
    </div>
  )
}
