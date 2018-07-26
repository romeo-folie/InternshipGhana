const request = require('request-promise');
const $ = require('cheerio')

var tapwage = "https://tapwage.com/search?q=&l=Ghana"
// var jobhouse = "https://jobhouse.com.gh/jobs-in-ghana/view-jobs/search-jobs/?search_keywords=&search_location=Accra&search_categories%5B%5D=#s=1"

//why is this an async function?
const fetcher = async () => {
  const options = {
    uri: tapwage,
    transform: function(body) {
      return $.load(body)
    }
  }

  var results = request(options)
    .then(($) => {
      var internshipOffers = []
      $('div #jobs ul.search-items').children().each(function(i, elem) {
        var singleOffer = {}
        if (
          $(this)
          .find('li.search-item h2 a')
          .attr('href')) {
          singleOffer.title = $(this)
            .find('li.search-item h2 a')
            .text()
            .trim()
          singleOffer.company = $(this)
            .find('li div.search-item-text a')
            .text()
            .trim()
          singleOffer.location = $(this)
            .find('li div.search-item-text')
            .text()
            .split("-")[1]
            .trim()
          internshipOffers.push(singleOffer)
        }
      });
      return internshipOffers
    }).catch((err) => {
      console.log(err)
    });
  // console.log(results)
  return results;
};

module.exports = {
  fetcher
}
