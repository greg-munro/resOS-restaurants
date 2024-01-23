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
      opening_hours: ['12:00 - 16:00', '18:00 - 23:00'],
      image: 'https://www.equinoxmagazine.fr/wp-content/uploads/2023/04/bodega-picarol.jpg'
    },
    {
      name: 'Sushi Palace',
      address: '123 Main St',
      tags: ['Japanese', 'Sushi'],
      status: 'Open',
      creation_date: '15/02/2023',
      opening_hours: ['11:30 - 14:30', '17:00 - 21:00'],
      image: 'https://www.aluxurytravelblog.com/wp-content/uploads/2018/01/I-kibana.jpg'
    },
    {
      name: 'Cake Fiesta',
      address: '789 Oak Blvd',
      tags: ['Ice Cream', 'Dessert'],
      status: 'Open',
      creation_date: '20/02/2023',
      opening_hours: ['12:00 - 20:00'],
      image: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-12-07-at-11-15-41-am-1607358551.png'
    },
    {
      name: 'Pasta Paradise',
      address: '456 Pasta Lane',
      tags: ['Italian', 'Pizza'],
      status: 'Closed',
      creation_date: '25/02/2023',
      opening_hours: ['18:00 - 22:00'],
      image: 'https://assets.suitcasemag.com/images/hero_mobile/125575-pasta-table-spread.jpg'
    },  
    {
      name: 'Robata',
      address: '555 Burger Street',
      tags: ['Japanese', 'Sushi'],
      status: 'Open',
      creation_date: '05/04/2023',
      opening_hours: ['11:00 - 21:30'],
      image: 'https://media.cntraveller.com/photos/611bf2328c1b7286f1c12024/16:9/w_2992,h_1683,c_limit/sumi-interiors-1-jun21-pr.jpg'
    },
    {
      name: 'Bodega Quimet',
      address: 'Carrer de Enric Granados 180',
      tags: ['Local', 'Mediterranean'],
      status: 'Closed',
      creation_date: '10/01/2023',
      opening_hours: ['12:00 -16:00', '18:00 - 23:00'],
      image: 'https://www.totbarcelona.cat/app/uploads/sites/11/2023/03/bodega-quimet.jpg'
    },
    {
      name: 'Jai',
      address: '108 Turner Lane',
      tags: ['Japanese', 'Sushi'],
      status: 'Open',
      creation_date: '05/04/2023',
      opening_hours: ['11:00 - 00:30'],
      image: 'https://d267qvt8mf7rfa.cloudfront.net/restaurant/256/mainImage.jpg'
    },
    {
      name: 'Pepes',
      address: '155 Turner Lane',
      tags: ['Italian', 'Pizza'],
      status: 'Open',
      creation_date: '05/04/2023',
      opening_hours: ['11:00 - 00:30'],
      image: 'https://assets.bonappetit.com/photos/5ca680eff7c9b51309c95d26/16:9/w_2560%2Cc_limit/luigis-2.jpg'
    },
    {
      name: 'Jumbo Palace',
      address: '18 Horn Street',
      tags: ['Ice Cream', 'Dessert'],
      status: 'Open',
      creation_date: '20/02/2023',
      opening_hours: ['17:00 - 23:00'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORKNZnq5_n9NoScr6XW9EznRFvesBmFSVpg&usqp=CAU'
    },
  ];
  
  

  restaurantsData.forEach((restaurant) => {
    RestaurantsCollection.insert(restaurant)
  })
})

