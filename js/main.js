$(document).ready(function(){
    $("#jumpstock").hover(function(){
        $("#stockup").fadeIn(6000);
    }, function(){
        $("#stockup").fadeOut(7000);
    });

    $("#igallery").hover(function(){
        $("#igaler").fadeIn(6000);
    }, function(){
        $("#igaler").fadeOut(7000);
    });

    $("#instaclone").hover(function(){
        $("#insta").fadeIn(6000);
    }, function(){
        $("#insta").fadeOut(7000);
    });

    $("#sharefeed").hover(function(){
        $("#share").fadeIn(6000);
    }, function(){
        $("#share").fadeOut(7000);
    });

    $("#githubsearch").hover(function(){
        $("#search").fadeIn(6000);
    }, function(){
        $("#search").fadeOut(7000);
    });

    event.preventDefault();
});