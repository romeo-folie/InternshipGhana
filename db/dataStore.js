//This is going to push all the data that we scraped to the database
const {
  tapwageFetcher
} = require('./fetchers/tapwageFetcher');
const {
  jobListFetcher
} = require('./fetchers/jobListFetcher');
const {
  Offers
} = require('./../models/offers');


//Retrieve the values from the returned promises
const recepient = async() => {
  try {
    const joblistOffers = await jobListFetcher()
    const tapwageOffers = await tapwageFetcher()
  //add the data to the database


  } catch (e) {
    console.log(e)
  }
}
