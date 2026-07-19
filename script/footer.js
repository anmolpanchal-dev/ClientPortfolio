const scrollBtn = document.querySelector(".scroll-top");

// Scroll to Top
scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Show / Hide Button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";
        scrollBtn.style.pointerEvents = "auto";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
        scrollBtn.style.pointerEvents = "none";

    }

});


const year = new Date().getFullYear();

document.querySelector(".footer-bottom p").innerHTML =
`© ${year} Abhishek Panchal. All Rights Reserved.`;