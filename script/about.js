/*==========================================
        ABOUT SECTION
==========================================*/

const aboutSection = document.querySelector(".about");
const qualityCards = document.querySelectorAll(".qualities div");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.25
});

aboutObserver.observe(aboutSection);


const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            qualityCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("card-show");

                },index*120);

            });

        }

    });

},{
    threshold:.3
});

cardObserver.observe(document.querySelector(".qualities"));


qualityCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateX=((y-rect.height/2)/12);
        const rotateY=((rect.width/2-x)/12);

        card.style.transform=
        `perspective(700px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


function openResume(){
    document.getElementById("resumePopup").style.display="flex";
}


function closeResume(){
    document.getElementById("resumePopup").style.display="none";
}