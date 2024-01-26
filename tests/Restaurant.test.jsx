import React from 'react';
import { render, screen } from '@testing-library/react';
import { Restaurant } from '../imports/ui/Restaurant';

describe('Restaurant component', () => {
  const restaurantData = {
    name: 'Sample Restaurant',
    address: '123 Sample Street',
    tags: ['Italian', 'Pizza', 'Pasta'],
    creation_date: '2023-01-01',
    openingHours: ['10:00 - 14:00', '17:00 - 22:00'],
    image: 'sample-image-url.jpg',
  };

  it('renders restaurant name correctly', () => {
    render(
      <Restaurant
        name={restaurantData.name}
        address={restaurantData.address}
        tags={restaurantData.tags}
        creation_date={restaurantData.creation_date}
        openingHours={restaurantData.openingHours}
        image={restaurantData.image}
      />
    );

    const restaurantNameElement = screen.getByText(restaurantData.name);
    expect(restaurantNameElement).toBeInTheDocument();
  });
  
});
