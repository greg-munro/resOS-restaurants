import React from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import Tooltip from '@mui/material/Tooltip';

const CuisineBtn = ({ onCuisineClick }) => {
  return (
    <div className='cuisine-icons'>
      <Tooltip title='Pizza'>
        <LocalPizzaIcon
          fontSize='large'
          className='btn-standard cuisine'
          onClick={() => onCuisineClick('Pizza')}
        />
      </Tooltip>
      <Tooltip title='Spanish'>
        <LocalDiningIcon
          fontSize='large'
          className='btn-standard cuisine'
          onClick={() => onCuisineClick('Spanish')}
        />
      </Tooltip>
      <Tooltip title='Sushi'>
        <RamenDiningIcon
          fontSize='large'
          className='btn-standard cuisine'
          onClick={() => onCuisineClick('Sushi')}
        />
      </Tooltip>
      <Tooltip title='Dessert'>
        <IcecreamIcon
          fontSize='large'
          className='btn-standard cuisine'
          onClick={() => onCuisineClick('Dessert')}
        />
      </Tooltip>
    </div>
  );
};

export default CuisineBtn;
