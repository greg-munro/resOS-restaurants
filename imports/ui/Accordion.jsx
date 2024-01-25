import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionCard = ({ expanded, handleChange }) => {
  return (
    <>
        <Accordion className='accordion' expanded={expanded} onClick={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          More info...
        </AccordionSummary>
        <AccordionDetails>
lololol
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionCard