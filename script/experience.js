/*====================================
        EXPERIENCE SECTION
====================================*/

const timelineItems = document.querySelectorAll(".timeline-item");
const timelineCards = document.querySelectorAll(".timeline-card");
const timeline = document.querySelector(".timeline");

/*====================================
        SCROLL REVEAL
====================================*/

const experienceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach((item)=>{
    experienceObserver.observe(item);
});


/*====================================
        ACTIVE CARD
====================================*/

timelineCards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        timelineCards.forEach((c)=>{
            c.classList.remove("active");
        });

        card.classList.add("active");

    });

});


/*====================================
        3D CARD EFFECT
====================================*/

timelineCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height/2) / 18);
        const rotateY = ((rect.width/2 - x) / 18);

        card.style.transform =
        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "";

    });

});


/*====================================
        TIMELINE LINE FILL
====================================*/

window.addEventListener("scroll",()=>{

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const progress =
    ((windowHeight - rect.top) / (rect.height + windowHeight));

    const percentage = Math.min(Math.max(progress,0),1);

    timeline.style.setProperty("--line-height",
    `${percentage*100}%`);

});