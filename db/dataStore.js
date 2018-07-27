//This is going to push all the data that we scraped to the database
const {
  tapwageFetcher
} = require('./../fetchers/tapwageFetcher');
const {
  jobListFetcher
} = require('./../fetchers/jobListFetcher');
const {
  Offer
} = require('./../models/offers');

//Retrieve the values from the returned promises
const receiveData = async() => {
  try {
    const joblistOffers = await jobListFetcher()
    const tapwageOffers = await tapwageFetcher()
    //get all the data into one array, iterate over it, then add data to the database

    let jointData = joblistOffers.concat(tapwageOffers)
    jointData.forEach((offer) => {
      Offer.findOrCreate({
          title: offer.title,
          link: offer.link,
          description: offer.description,
          location: offer.location || "Unknown"
        })
        .then(result => {
          var status = result.doc
          // console.log('The document you want to add was', status.created ? 'found' : 'created')
        }).catch((e) => {})
    })
  } catch (e) {
    console.log(e)
  }
}
receiveData()
