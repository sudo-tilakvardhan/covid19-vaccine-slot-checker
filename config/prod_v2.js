// Use below value to set query parameters

var date = "13-05-2021";
var checkForAge = 18 ;
var district = 312; // For Bhopal


// Change only if source API changes
var baseUrl = "https://cdn-api.co-vin.in/"
var path = "api/v2/appointment/sessions/calendarByDistrict?"
var q1= "district_id="
var q2 = "&date="
var targetUrl = baseUrl+path+q1+district+q2+date

module.exports = { targetUrl , checkForAge, date
}