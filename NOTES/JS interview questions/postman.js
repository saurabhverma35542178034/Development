const $ = require('jquery');
var settings = {
    "url": "https://reqres.in/api/users/2",
    "method": "GET",
    "timeout": 0
};
  
$.ajax(settings).done(function (response) {
    console.log(response);
});
