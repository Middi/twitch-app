$(document).ready(function () {

    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

    var game;
    var online;
    var avatar;

    channels.forEach(function (element) {

            $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + element +'?callback=?', function (data) {

online = data.stream;


if (online !== null) {
    game = online.game;
    avatar = online.channel.logo;
}

else if (online === null) {
    avatar = "http://placehold.it/100x100";
}

if (online === null) {
// --- Add To Dom --- //
        $("section").append('<a href="https://www.twitch.tv/' + element + '"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>Currently not Streaming</p></div><div class="status"><i class="fa fa-circle offline" aria-hidden="true"></i></div></article></a>');
    }

    else if (online === undefined) {
        // --- Add To Dom --- //
        $("section").append('<a href="#"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>User Doesnt exist</p></div><div class="status"><i class="fa fa-circle offline" aria-hidden="true"></i></div></article></a>');
    }
    else {
         // --- Add To Dom --- //
        $("section").append('<a href="https://www.twitch.tv/' + element + '"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>' + game + '</p></div><div class="status"><i class="fa fa-circle online" aria-hidden="true"></i></div></article></a>');
    }
    });


    });

});