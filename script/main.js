import "./navbar.js";
import "./hero.js";
import "./card.js";
import "./about.js";
import "./experience.js";
import "./loader.js";
import "./footer.js";

window.openResume = function(){
    document.getElementById("resumePopup").style.display = "flex";
}


window.closeResume = function(){
    document.getElementById("resumePopup").style.display = "none";
}