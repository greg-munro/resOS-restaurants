import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const Restaurant = ({ name, address, tags, status, creation_date, openingHours, image }) => {

  const buttonStyle = {
    backgroundColor: status === 'Open' ? '#6AA84F' : '#C0C0C0',
  };

  return (
    <div>
      <Card className='restaurant-card' sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 130 }} image={image} title={name} />
        <CardContent>
          <h3>{name}</h3>
          <span>{tags.join(', ')}</span>
          <p class="btn-standard status" style={buttonStyle}>{status}</p>
        </CardContent>
      </Card>
    </div>
  )
}
