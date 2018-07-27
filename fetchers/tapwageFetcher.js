const request = require('request-promise');
const $ = require('cheerio')

var tapwage = "https://tapwage.com/search?q=&l=Ghana"

const tapwageFetcher = async () => {
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
          singleOffer.description = $(this)
            .find('li div.search-item-text a')
            .text()
            .trim()
          singleOffer.location = $(this)
            .find('li div.search-item-text')
            .text()
            .split("-")[1]
            .trim()
          singleOffer.link = $(this)
            .find('li.search-item h2 a')
            .attr('href')
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
  tapwageFetcher
}
