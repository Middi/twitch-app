$(document).ready(function(){var i=["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","brunofin","comster404"],s,e,a;i.forEach(function(i){$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+i+"?callback=?",function(l){null!==l.stream?$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+i+"?callback=?",function(l){e=l.stream,s=e.game,a=e.channel.logo,$("section").append('<a class="online-stream visible" href="https://www.twitch.tv/'+i+'" target="_blank"><article><div class="avatar"><img src="'+a+'"></div><div class="description"><h4>'+i+"</h4><p>"+s+'</p></div><div class="status"><i class="fa fa-circle  fa-lg online" aria-hidden="true"></i></div></article></a>')}):$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+i+"?callback=?",function(s){void 0===s.logo?(a="images/no-user.png",$("section").append('<a class="visible fade"><article><div class="avatar"><img src="'+a+'"></div><div class="description"><h4>'+i+'</h4><p>Could not find User</p></div><div class="status"><i class="fa fa-circle fa-lg offline" aria-hidden="true"></i></div></article></a>')):(a=s.logo,$("section").append('<a class="offline-stream visible" href="https://www.twitch.tv/'+i+'" target="_blank"><article><div class="avatar"><img src="'+a+'"></div><div class="description"><h4>'+i+'</h4><p>Offline</p></div><div class="status"><i class="fa fa-circle fa-lg offline" aria-hidden="true"></i></div></article></a>'))})})}),$(".toggle-all").css({color:"white"}),$(".toggle-all").on("click",function(){$("section").children().removeClass("hidden","visible").addClass("visible"),$(this).css({color:"white"}),$(".toggle-online").css({color:"rgba(175, 152, 218, 1.0)"}),$(".toggle-offline").css({color:"rgba(175, 152, 218, 1.0)"})}),$(".toggle-online").on("click",function(){$("section").find(".online-stream").removeClass("hidden").addClass("visible"),$("section").find(".offline-stream").removeClass("visible").addClass("hidden"),$("section").find(".fade").removeClass("visible").addClass("hidden"),$(this).css({color:"white"}),$(".toggle-all").css({color:"rgba(175, 152, 218, 1.0)"}),$(".toggle-offline").css({color:"rgba(175, 152, 218, 1.0)"})}),$(".toggle-offline").on("click",function(){$("section").find(".online-stream").removeClass("visible").addClass("hidden"),$("section").find(".offline-stream").removeClass("hidden").addClass("visible"),$("section").find(".fade").removeClass("visible").addClass("hidden"),$(this).css({color:"white"}),$(".toggle-online").css({color:"rgba(175, 152, 218, 1.0)"}),$(".toggle-all").css({color:"rgba(175, 152, 218, 1.0)"})})});