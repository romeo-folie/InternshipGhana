const request = require('request-promise');
const $ = require('cheerio')

var uri = "https://jobhouse.com.gh/jobs-in-ghana/view-jobs/search-jobs/?search_keywords=software%20developer&search_location=Accra&search_categories%5B%5D=#s=2"
// var uri = "https://www.google.com.gh/search?ei=R9RYW9-tEsG6swHO7JXYDg&q=internship+offers&oq=internship+offers&gs_l=psy-ab.3.o..5449.15926.0.16229.42.1.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..42.0.0.0...0.yc9epMnZ7Qs&ibp=htl;jobs&sa=X&ved=0ahUKEwii_ZvxgrvcAhXDXSwKHWj6AjkQiYsCCEgoAQ#fpstate=tldetail&htidocid=Sl4t4Tt8a8uMpI5xAAAAAA%3D%3D&htivrt=jobs"

// var fetcher = () => {
//   const options = {
//     uri,
//     transform: function(body) {
//       return $.load(body)
//     }
//   }
//
//   var results = request(options).then(($) => {
//     var internshipOffers = []
//     var text = $('div.ZdOleb.tab-sel div#immersive_desktop_root div.CjdhYc div.drPJve div.YbRs3e div.UbEfxe div.MZpzq.pN5iDd.r-iSDrMl5lrRNo.tl-no-filters div.iSDrMl5lrRNo-ymqqGfR20_8.SBFvB ul')
//     .find("li.PaEvOc.gws-horizon-textlists__li-ed").find("div.BjJfJf.LqLjSc").text()
//         // .find('div.PaEvOc')
//       console.log(text)
//   })
//
//   return results
// }
const options = {
  uri,
  transform: function(body) {
    return $.load(body)
  }
}



request(options).then(($) => {
  var internshipOffers = []
  var text = $('#content div div div div div div.job_listings').find('ul.job_listings').children().length
    console.log(text)
}).catch((e) => console.log(e))
