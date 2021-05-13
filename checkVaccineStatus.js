var config = require('./config/prod_v2.js');
var request = require('request');

var options = {
  'method': 'GET',
  'url': config.targetUrl,
  'headers': {
  }
};
request(options, function (error, response) {
  //if (error) throw new Error(error);
  parseResponse(response.body);
});


function parseResponse(b) {
  let intData = JSON.parse(b);
  let data = intData.centers;
  //console.log(data)

  let i = 0
  for(var k in data) {
    let agLm = data[k].sessions[0].min_age_limit
    let avSl = data[k].sessions[0].available_capacity
    if (agLm == config.checkForAge && avSl > 0) {
      i++;
      console.log(">> ", 
        avSl, " slots available for age ",
        agLm , " at",
        data[k].name, " on date ", 
        data[k].sessions[0].date);
    }
  }
  if (i == 0) {
    console.log("No Slots Available for age" , config.checkForAge , "from" , config.date, "till next seven days")
  }

}