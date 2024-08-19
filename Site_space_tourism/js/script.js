function aparecerMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    let mobileImg= document.getElementById("mobile-img");
   
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        mobileImg.src = './assets/shared/icon-hamburger.svg';
    }else{
        menuMobile.classList.add('open');
        mobileImg.src = "./assets/shared/icon-close.svg"
        
        

    }
}



let imgDestination = document.getElementById('img-destination');
let titleDestination = document.getElementById('title-destination');
let textDestination = document.getElementById('text-destination');
let infoDistDestination = document.getElementById('info-dist-destination');
let infoDayDestination = document.getElementById('info-days-destination');

function moon(){
    imgDestination.src = "./assets/destination/image-moon.png";
    titleDestination.innerHTML = "Moon"
    textDestination.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
    infoDistDestination.innerHTML = "384,400 km";
    infoDayDestination.innerHTML = "3 days"
}
function mars(){
    imgDestination.src = "./assets/destination/image-mars.png";
    titleDestination.innerHTML = "Mars";
    textDestination.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ";
    infoDistDestination.innerHTML = "225 mil. km";
    infoDayDestination.innerHTML = "9 months";
}
function europa(){
    imgDestination.src = "./assets/destination/image-europa.png";
    titleDestination.innerHTML = "Europa"
    textDestination.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    infoDistDestination.innerHTML = "628 mil. km";
    infoDayDestination.innerHTML = "3 years";
}
function titan(){
    
    imgDestination.src = "./assets/destination/image-titan.png";
    titleDestination.innerHTML = "Titan";
    textDestination.innerHTML = " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn";
    infoDistDestination.innerHTML = "1.6 bil. km"
    infoDayDestination.innerHTML = "7 years";
}



//pag technology

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let titleTech = document.getElementById('title-tech');
let textTech = document.getElementById('text-tech');
let imgTech = document.getElementById('img-tech');



function launchVehicle(){
    btn1.classList.add('ativo');
    btn3.classList.remove('ativo');
    btn2.classList.remove('ativo');
    
    titleTech.innerHTML = "Launch vehicle";
    textTech.innerHTML = " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    imgTech.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
}
function spaceport(){
    btn1.classList.remove('ativo');
    btn3.classList.remove('ativo');
    btn2.classList.add('ativo');

    titleTech.innerHTML = 'Spaceport';
    textTech.innerHTML = " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    imgTech.src = "./assets/technology/image-spaceport-portrait.jpg";
}


function spaceCapsule(){
    btn1.classList.remove('ativo');
    btn2.classList.remove('ativo');
    btn3.classList.add('ativo');
    titleTech.innerHTML = "Space Capsule";
    textTech.innerHTML = " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    imgTech.src = "./assets/technology/image-space-capsule-portrait.jpg";

}





//area crew
let cont = 0;
let imgCrew = document.getElementById('img-crew');
let jobCrew = document.getElementById('job-crew');
let nameCrew = document.getElementById('name-crew');
let infoCrew = document.getElementById('info-crew');



let btn1Crew = document.getElementById('btn1');
let btn2Crew = document.getElementById('btn2');
let btn3Crew = document.getElementById('btn3');
let btn4Crew = document.getElementById('btn4');

// ../assets/crew/image-douglas-hurley.webp
// ../assets/crew/image-anousheh-ansari.webp
// ../assets/crew/image-mark-shuttleworth.webp
// ../assets/crew/image-victor-glower.webp
function mudarSozinho(){
    
    tempo = setInterval(mudar =>{
    cont++;
    if(cont==1){
         //Mission Specialist -> Mark Shuttleworth
         jobCrew.innerHTML ="Mission Specialist"
         nameCrew.innerHTML = "Mark Shuttleworth"
         infoCrew.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist."
         imgCrew.src ="./assets/crew/image-mark-shuttleworth.webp";
         imgCrew.classList.add('visible')
         btn1Crew.classList.toggle('ativo');
         btn2Crew.classList.toggle('ativo');
        
    }else if (cont==2){
        // Pilot->Victor Glover
        jobCrew.innerHTML = "Pilot"
        nameCrew.innerHTML = "Victor Glover"
        infoCrew.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        imgCrew.src ="./assets/crew/image-victor-glover.webp";

        btn2Crew.classList.toggle('ativo');
        btn3Crew.classList.toggle('ativo');


    }else if(cont==3){
         // Flight Engineer->Anousheh Ansari
         jobCrew.innerHTML = "Flight Engineer"
         nameCrew.innerHTML="Anousheh Ansari"
         infoCrew.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
         imgCrew.src ="./assets/crew/image-anousheh-ansari.webp";
         btn3Crew.classList.toggle('ativo');
         btn4Crew.classList.toggle('ativo');


    }else if(cont==4){
        //commander -> douglas hurley
        jobCrew.innerHTML ="Commander"
        nameCrew.innerHTML = "Douglas Hurley"
        infoCrew.innerHTML = " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot  and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        imgCrew.src ="./assets/crew/image-douglas-hurley.webp";
        btn4Crew.classList.toggle('ativo');
        btn1Crew.classList.toggle('ativo');
        cont=0;
        }
    },5000)
}
