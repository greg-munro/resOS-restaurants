import { Mongo } from 'meteor/mongo';

export const RestaurantsCollection = new Mongo.Collection('restaurants');
// creating a new collection to send up to MongoDB. In here you can store API related code, publications, methods.