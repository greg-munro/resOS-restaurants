import { Meteor } from 'meteor/meteor'
import { RestaurantsCollection } from '../imports/api/RestaurantsCollection'

// in here you are exporting the data to the server
Meteor.startup(() => {
  RestaurantsCollection.remove({})

  const restaurantsData = [
    {
      name: 'Bodega Picarol',
      address: 'Carrer de Valencia 224',
      tags: ['Local', 'Mediterranean'],
      status: 'Closed',
      creation_date: '10/01/2023',
      opening_hours: ['12:00 -16:00', '18:00 - 23:00'],
    },
    {
      name: 'Sushi Palace',
      address: '123 Main St',
      tags: ['Japanese', 'Sushi'],
      status: 'Open',
      creation_date: '15/02/2023',
      opening_hours: ['11:30 - 14:30', '17:00 - 21:00'],
    },
    {
      name: 'Taco Fiesta',
      address: '789 Oak Blvd',
      tags: ['Mexican', 'Tacos'],
      status: 'Open',
      creation_date: '20/02/2023',
      opening_hours: ['12:00 - 20:00'],
    },
    {
      name: 'Pasta Paradise',
      address: '456 Pasta Lane',
      tags: ['Italian', 'Pasta'],
      status: 'Closed',
      creation_date: '25/02/2023',
      opening_hours: ['18:00 - 22:00'],
    },  
    {
      name: 'Burger Barn',
      address: '555 Burger Street',
      tags: ['American', 'Burgers'],
      status: 'Open',
      creation_date: '05/04/2023',
      opening_hours: ['11:00 - 21:30'],
    },
    {
      name: 'Veggie Delight',
      address: '876 Garden Ave',
      tags: ['Vegetarian', 'Healthy'],
      status: 'Open',
      creation_date: '10/04/2023',
      opening_hours: ['09:00 - 18:00'],
    },

    {
      name: 'Seafood Sensation',
      address: '321 Ocean View',
      tags: ['Seafood', 'Fine Dining'],
      status: 'Closed',
      creation_date: '30/04/2023',
      opening_hours: ['17:30 - 22:00'],
    },
    {
      name: 'Steakhouse Supreme',
      address: '789 Prime Cut Lane',
      tags: ['Steakhouse', 'Fine Dining'],
      status: 'Open',
      creation_date: '01/06/2023',
      opening_hours: ['17:30 - 23:00'],
    },
    {
      name: 'Thai Tantalize',
      address: '321 Spicy Street',
      tags: ['Thai', 'Spicy'],
      status: 'Closed',
      creation_date: '10/06/2023',
      opening_hours: ['12:00 - 15:00', '18:00 - 21:30'],
    },
    {
      name: 'Crepes Corner',
      address: '234 Sweet Lane',
      tags: ['French', 'Desserts'],
      status: 'Open',
      creation_date: '30/07/2023',
      opening_hours: ['10:00 - 19:00'],
    },
    {
      name: 'Rustic Roasts',
      address: '789 Timber Lane',
      tags: ['Barbecue', 'Grill'],
      status: 'Open',
      creation_date: '10/08/2023',
      opening_hours: ['12:00 - 21:00'],
    },
    {
      name: 'Mango Tango',
      address: '456 Tropical Ave',
      tags: ['Caribbean', 'Fusion'],
      status: 'Closed',
      creation_date: '15/08/2023',
      opening_hours: ['18:00 - 22:00'],
    },
    {
      name: 'Bella Italia',
      address: '234 Olive Street',
      tags: ['Italian', 'Fine Dining'],
      status: 'Open',
      creation_date: '20/08/2023',
      opening_hours: ['17:30 - 23:00'],
    },
    {
      name: 'Pho Evermore',
      address: '789 Noodle Blvd',
      tags: ['Vietnamese', 'Pho'],
      status: 'Open',
      creation_date: '25/08/2023',
      opening_hours: ['11:00 - 15:30', '18:00 - 21:30'],
    },
    {
      name: 'Crispy Bites',
      address: '555 Crispy Street',
      tags: ['Fast Food', 'Snacks'],
      status: 'Open',
      creation_date: '01/09/2023',
      opening_hours: ['10:00 - 22:00'],
    },
    {
      name: 'Sizzle & Spice',
      address: '876 Spice Lane',
      tags: ['Indian', 'Spicy'],
      status: 'Closed',
      creation_date: '05/09/2023',
      opening_hours: ['12:30 - 15:00', '18:30 - 22:30'],
    },
    {
      name: 'Pancake Paradise',
      address: '321 Maple Ave',
      tags: ['Breakfast', 'Pancakes'],
      status: 'Open',
      creation_date: '25/10/2023',
      opening_hours: ['07:00 - 12:00'],
    },
    {
      name: 'Zen Garden',
      address: '789 Tranquil Street',
      tags: ['Vegetarian', 'Asian'],
      status: 'Open',
      creation_date: '30/10/2023',
      opening_hours: ['11:30 - 20:00'],
    },
    {
      name: 'Bistro Bliss',
      address: '234 Serene Lane',
      tags: ['French', 'Bistro'],
      status: 'Closed',
      creation_date: '15/11/2023',
      opening_hours: ['18:00 - 23:00'],
    },
  ];
  
  

  restaurantsData.forEach((restaurant) => {
    RestaurantsCollection.insert(restaurant)
  })
})

