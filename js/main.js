$(document).ready(function () {

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var data;

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {


console.log(data);

});

channels.forEach(function(element) {
    
    
    
    console.log(element);
});

});