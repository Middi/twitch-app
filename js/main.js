$(document).ready(function () {


    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

    var game;
    var online;
    var avatar;

    channels.forEach(function (element) {

        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + element + '?callback=?', function (data) {



            if (data.stream !== null) {

                $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + element + '?callback=?', function (data1) {

                    online = data1.stream;
                    game = online.game;
                    avatar = online.channel.logo;

                    // --- Add To Dom --- //
                    $("section").append('<a class="online-stream visible" href="https://www.twitch.tv/' + element + '" target="_blank"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>' + game + '</p></div><div class="status"><i class="fa fa-circle  fa-lg online" aria-hidden="true"></i></div></article></a>');

                });
            }

            else {
                $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + element + '?callback=?', function (data2) {

if (data2.logo === undefined) {

    avatar = 'images/no-user.png';

    $("section").append('<a class="visible fade"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>Could not find User</p></div><div class="status"><i class="fa fa-circle fa-lg offline" aria-hidden="true"></i></div></article></a>');
}

else {
                    avatar = data2.logo;

                    $("section").append('<a class="offline-stream visible" href="https://www.twitch.tv/' + element + '" target="_blank"><article><div class="avatar"><img src="' + avatar + '"></div><div class="description"><h4>' + element + '</h4><p>Offline</p></div><div class="status"><i class="fa fa-circle fa-lg offline" aria-hidden="true"></i></div></article></a>');
}
                });

            }
        });

    });

    $('.toggle-all').css({ 'color': 'white' });


    $('.toggle-all').on('click', function () {

        $("section").children().removeClass("hidden", "visible").addClass("visible");
        $(this).css({ 'color': 'white' });
        $('.toggle-online').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
        $('.toggle-offline').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
    });


    $('.toggle-online').on('click', function () {

        $("section").find(".online-stream").removeClass("hidden").addClass("visible");
        $("section").find(".offline-stream").removeClass("visible").addClass("hidden");
        $("section").find(".fade").removeClass("visible").addClass("hidden");
        $(this).css({ 'color': 'white' });
        $('.toggle-all').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
        $('.toggle-offline').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
    });

    $('.toggle-offline').on('click', function () {

        $("section").find(".online-stream").removeClass("visible").addClass("hidden");
        $("section").find(".offline-stream").removeClass("hidden").addClass("visible");
        $("section").find(".fade").removeClass("visible").addClass("hidden");
        $(this).css({ 'color': 'white' });
        $('.toggle-online').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
        $('.toggle-all').css({ 'color': 'rgba(175, 152, 218, 1.0)' });
    });
});