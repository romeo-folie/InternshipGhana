const request = require('request-promise');
const $ = require('cheerio')

var jobList = "https://joblistghana.com/category/internships-in-ghana"

const jobListFetcher = async () => {
  const options = {
    uri: jobList,
    transform: function(body){
      return $.load(body)
    }
  }

  var results = request(options)
    .then(($) => {
      var internshipOffers = []
      $('.employers-left').children().each(function(i, elem){
        var singleOffer = {}
        if($(this)
        .find('div .Trust h3 a').text()){
          singleOffer.title = $(this)
            .find('div .Trust h3 a')
            .text()
            .trim()
          singleOffer.excerpt = $(this)
            .find('.Trust-bot-left p')
            .text()
            .trim()
          singleOffer.link = $(this)
            .find('div .Trust h3 a')
            .attr('href')
            .trim()
          internshipOffers.push(singleOffer)
        }
      });
      return internshipOffers
    }).catch(e => console.log(e))
    return results
}

module.exports = {jobListFetcher}
