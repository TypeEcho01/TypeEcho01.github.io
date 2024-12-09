// script.js
// Uses jQuery version 3.7.1

const screenBreakpoints = {
    laptop: 769,
    desktop: 1024,
    large: 1400
};

// Media Query for laptop screens
const laptopScreenMediaQuery = window.matchMedia(`(min-width: ${screenBreakpoints.laptop}px)`);

// Function to call when the media query is matched
function handleLaptopScreenChange() 
{
    // Screen is desktop screen
    if (laptopScreenMediaQuery.matches) 
    {
        // leftBar is always shown when on desktop
        $("#leftBar").show();
        return;
    }
    
    // Screen is not desktop screen
    $("#leftBar").hide();
}

// Add event listener to detect when media query matches
laptopScreenMediaQuery.addEventListener("change", handleLaptopScreenChange);

function getFooterHtml()
{
    return `&#169; Echo Schwartz, ${new Date().getFullYear()}`;
}

function getTopBar() {
    // Create the top bar container
    let $topBar = $("<div>", { id: "topBar" });

    // Navigation Button on the left
    let $navigationButton = $("<button>", { id: "navigationButton" })
        .html("-----------<br>-----------<br>-----------<br>Navigation");

    // Logo Image on the right
    let $logoImage = $("<figure>")
        .append($("<img>", { src: "img/logo/logo.png", alt: "Echo: Cloning Industries logo" }));

    // Append navigation button and logo image to the top bar
    $topBar.append($navigationButton, $logoImage);

    return $topBar;
}

function getLeftBar() {
    // Create the left bar container
    let $leftBar = $("<div>", { id: "leftBar" });

    // Create the navigation structure
    let $nav = $("<nav>");
    let $ul = $("<ul>");
    let $navItems = [
        $("<li>").append($("<figure>")
            .append($("<img>", { src: "img/logo/logo.png", alt: "Echo: Cloning Industries logo" }))),
        $("<li>").append($("<a>", { href: "index.html" }).text("Home")),
        $("<li>").append($("<a>", { href: "appointment.html" }).text("Appointment")),
        $("<li>").append($("<a>", { href: "about.html" }).text("About")),
        $("<li>").append($("<a>", { href: "tribute.html" }).text("Tribute")),
        $("<li>").append($("<a>", { href: "reviews.html" }).text("Reviews")),
        $("<li>").append($("<a>", { href: "research.html" }).text("Research")),
        $("<li>").append($("<a>", { href: "donations.html" }).text("Donations"))
    ];

    // Append navigation items to the list
    $ul.append($navItems);

    // Append list to navigation
    $nav.append($ul);

    // Append navigation to the left bar
    $leftBar.append($nav);

    return $leftBar;
}

// Document loaded
$(document).ready(function() 
{
    // Append the top bar and left bar to the body
    $("body").append(getTopBar(), getLeftBar());
    
    // Initial check when the script runs
    handleLaptopScreenChange();
    
    // Set footer with current year
    $("#footer").html(getFooterHtml());

    // On navigationButton clicked
    $("#navigationButton").click(() => $("#leftBar").slideToggle());
});