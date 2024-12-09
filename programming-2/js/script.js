// script.js
// Uses jQuery version 3.7.1

// Document loaded
$(document).ready(function() 
{
    // Hide hidden elements
    $("#craft-system").hide();
    $("#card-games").hide();
    $("#bracken-cave-simulation").hide();
    $("#weather-app").hide();
    $("#ordle").hide();

    // Set footer text
    $("#footer").html(`&#169; Echo Schwartz, ${new Date().getFullYear()}`);

    // craft-system
    $("#craft-system-button").click(function ()
    {
        $("#craft-system").slideToggle();
    });

    // card-games
    $("#card-games-button").click(function ()
    {
        $("#card-games").slideToggle();
    });

    // bracken-cave-simulation
    $("#bracken-cave-simulation-button").click(function ()
    {
        $("#bracken-cave-simulation").slideToggle();
    });

    // weather-app
    $("#weather-app-button").click(function ()
    {
        $("#weather-app").slideToggle();
    });

    // ordle
    $("#ordle-button").click(function ()
    {
        $("#ordle").slideToggle();
    });
});