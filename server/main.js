import { Meteor } from 'meteor/meteor'
import { RestaurantsCollection } from '../imports/api/RestaurantsCollection'

// in here you are exporting the data to the server
Meteor.startup(() => {
  RestaurantsCollection.remove({})

  const restaurantsData = [
    { name: 'rest1', opening_hours: '09.00-17.00' },
    { name: 'rest2', opening_hours: '09.00-17.00' },
    { name: 'rest3', opening_hours: '09.00-17.00' },
  ]

  restaurantsData.forEach((restaurant) => {
    RestaurantsCollection.insert(restaurant)
  })
})

