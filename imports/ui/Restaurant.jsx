import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Restaurant = ({
  name,
  address,
  tags,
  status,
  creation_date,
  openingHours,
  image,
}) => {

  const [expanded, setExpanded] = useState(false);

  // Check if the current time is within the opening hour range
  const getCurrentTime = () => {
    const now = new Date();
    return now;
  };

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
    backgroundColor: isOpen ? '#549239' : '#a3a3a3',
    color: 'white',
  }

  const handleChange = () => {
    setExpanded(!expanded); 
  };

  return (
    <Card className='restaurant-card' sx={{ maxWidth: 345 }} style={{ overflow: "visible"}}>
      <CardMedia sx={{ height: 130 }} image={image} title={name} alt={name} />
      <CardContent>
        <div className='card-header'>
          <h3>{name}</h3>
          <span className='btn-standard status' style={buttonStyle}>
            {isOpen ? 'Open': 'Closed'}
          </span>
        </div>

        <p className='light-font'>{tags.join(', ')}</p>
      </CardContent>
      <div style={{ height: 45, overflow: "visible", zIndex: 9999 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            More info...
          </AccordionSummary>
          <AccordionDetails>
            <p class="light-font">{address}</p>
            <h5>Opening times:</h5>
            {openingHours.map(hours => <p class="light-font black">{hours}</p>)}
          </AccordionDetails>
        </Accordion>
      </div>
    </Card>
  );
};
