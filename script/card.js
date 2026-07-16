const modal = document.getElementById("contactModal");

const contactBtn = document.querySelector(".primary-btn");
const contactBtn2 = document.querySelector(".contact-btn2");

const closeBtn = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

});
contactBtn2.addEventListener("click", () => {

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

});

closeBtn.addEventListener("click", () => {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});