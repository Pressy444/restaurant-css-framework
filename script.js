document.addEventListener("DOMContentLoaded", function () {
    const cookieAlert = document.getElementById("cookie-alert");
    const acceptCookieButton = document.getElementById("accept-cookie");

   
    if (localStorage.getItem("cookieConsent") === "accepted") {
        cookieAlert.style.display = "block";
    }

    
    function acceptCookies() {
        localStorage.setItem("cookieConsent", "accepted");
        cookieAlert.style.display = "none";
    }

    
    acceptCookieButton.addEventListener("click", acceptCookies);
});




