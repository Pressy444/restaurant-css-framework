

document.addEventListener("click", function(e) {
    var dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display = "none";
    }
});








