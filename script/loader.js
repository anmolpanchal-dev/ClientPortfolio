const loader = document.getElementById("loader");

const progressFill = document.querySelector(".progress-fill");

const progressText = document.querySelector(".progress-text");

const particlesContainer = document.querySelector(".particles");

const loaderTitle = document.querySelector(".loader-title");
for(let i=0;i<120;i++){

    const p = document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"%";

    p.style.top=Math.random()*100+"%";

    p.style.animationDelay=Math.random()*5+"s";

    p.style.animationDuration=4+Math.random()*6+"s";

    p.style.opacity=Math.random();

    p.style.transform=
    `scale(${Math.random()*1.6})`;

    particlesContainer.appendChild(p);

}
const texts=[

"Initializing Portfolio",

"Loading Experience",

"Preparing Interface",

"Almost Ready"

];

let txt=0;

setInterval(()=>{

    loaderTitle.style.opacity=0;

    setTimeout(()=>{

        txt++;

        if(txt>=texts.length){

            txt=0;

        }

        loaderTitle.innerHTML=texts[txt];

        loaderTitle.style.opacity=1;

    },300);

},1200);
let progress=0;

const interval=setInterval(()=>{

    progress+=Math.random()*4;

    if(progress>100){

        progress=100;

    }

    progressFill.style.width=progress+"%";

    progressText.innerHTML=
    Math.floor(progress)+"%";

    if(progress>=100){

        clearInterval(interval);

        finishLoader();

    }

},90);
function finishLoader(){

    loader.style.transition=
    "opacity .8s ease,transform 1s ease";

    loader.style.opacity=0;

    loader.style.transform="scale(1.08)";

    document.body.style.overflow="auto";

    setTimeout(()=>{

        loader.remove();

    },900);

}

document.body.style.overflow="hidden";