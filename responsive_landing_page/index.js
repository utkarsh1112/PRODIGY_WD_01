document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const navbarToggle = document.getElementById("navbar-toggle");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

    let isScrolling;

    window.addEventListener("scroll", function() {
        // Clear timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set the background color when scrolling
        navbar.style.backgroundColor = "#555";
        body.style.backgroundColor = "#3c92b4";  

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            // Revert the background color after scrolling stops
            navbar.style.backgroundColor = "#333";
            body.style.backgroundColor = "	#407094";  
        }, 300); // Adjust this value to how quickly the color should revert back
    });

    navbarToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});
