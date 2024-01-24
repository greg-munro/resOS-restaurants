import React from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import IcecreamIcon from '@mui/icons-material/Icecream';

const CuisineBtn = ({ onCuisineClick }) => {
  return (
    <div className='cuisine-icons'>
      <LocalPizzaIcon
        fontSize='large'
        className='btn-standard cuisine'
        onClick={() => onCuisineClick('Pizza')}
      />
      <LocalDiningIcon fontSize='large' className='btn-standard cuisine' onClick={() => onCuisineClick('Spanish')} />
      <RamenDiningIcon fontSize='large' className='btn-standard cuisine' onClick={() => onCuisineClick('Sushi')} />
      <IcecreamIcon fontSize='large' className='btn-standard cuisine' onClick={() => onCuisineClick('Dessert')} />
    </div>
  );
};

export default CuisineBtn;
