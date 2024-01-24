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
    const now = new Date();
    return now;
  };

  // Check if the current time is within any of the opening hour ranges
  const isOpen = openingHours.some(schedule => {
    const [startHour, startMinute, endHour, endMinute] = schedule
      .split(/[^\d]+/)
      .map(Number);

    const startTime = new Date();
    startTime.setHours(startHour, startMinute);

    const endTime = new Date();
    endTime.setHours(endHour, endMinute);

    const currentTime = getCurrentTime();

    return currentTime >= startTime && currentTime <= endTime;
  });

  const buttonStyle = {
    backgroundColor: isOpen ? '#6AA84F' : '#C0C0C0',
  }

  return (
    <>
      <Card className='restaurant-card' sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 130 }} image={image} title={name} />
        <CardContent>
          <div className='card-header'>
            <h3>{name}</h3>
            <span className='btn-standard status' style={buttonStyle}>
              {isOpen ? 'Open': 'Closed'}
            </span>
          </div>

          <p className='light-font'>{tags.join(', ')}</p>
          <p>{address}</p>
        </CardContent>
      </Card>
    </>
  )
}
