const menuToggle = document.querySelector(".menu-toggle"); //assigns html menu-toggle
const navLinks = document.querySelector(".nav-links"); //assigns html nav-links

//When the menu is clicked
menuToggle.addEventListener("click", () => {
    //aria-expanded checks if menu is open or closed
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    //if not expanded open, if expanded close
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    //

    //inform state of hamburger menu
    if (isExpanded) {
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    } else {
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    }

    //connects to css formatting and toggles. If a class exists remove, if a class doesn't exist add it
    navLinks.classList.toggle("is-open");
});

// Close the menu when a navigation link is selected.
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open"); //Closes the menu
        menuToggle.setAttribute("aria-expanded", "false"); //sets to false
        menuToggle.setAttribute("aria-label", "Open navigation menu"); 
    });
});

// Close the menu with a key
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.focus(); //focus is on hamburger menu
    }
});