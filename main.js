const planetLinks = document.querySelectorAll('.planet');
const planetTitle = document.querySelector('#title');
const  planetImg = document.querySelector('#planet-img');
const planetImgAdd = document.querySelector('#planet-imgadd');
const overviewFirst = document.querySelector('#overview');
const internalSec = document.querySelector('#internal');
const geologyThird = document.querySelector('#geology');
const infoP = document.querySelector('#info-p');
const rotationN = document.querySelector('#rotation');
const revolutionN = document.querySelector('#revolution');
const radiusN = document.querySelector('#radius');
const temperatureN = document.querySelector('#temperature');
const burgerBtn = document.querySelector('#burger-btn');
const planetBtn = document.querySelector('#planet-btn');
// const circleColor = document.querySelector('.circle');
const planetLine = document.querySelectorAll('.upline');
const underLines = document.querySelectorAll('.underline');



const PLANET_API = 'https://planets-api.vercel.app/api/v1/planets';
   
for (let i = 0; i <  planetLinks.length; i++) {
    planetLinks[i].addEventListener('click', () => {
        selectPlanet(planetLinks[i].textContent);

        for (let j = 0; j < planetLinks.length; j++) {
            planetLinks[j].classList.add('planetLine');
        }
        planetLinks[i].classList.remove('planetLine');


    });
}







const selectPlanet = async (planet = 'Mercury') => {
    const response = await fetch(`${PLANET_API}/${planet}`);
    const data = await response.json();
    planetTitle.textContent = data.name;
    planetImg.src = data.images.planet;
    infoP.textContent = data.overview.content;
    planetImgAdd.style.display = 'none';
    rotationN.textContent = data.rotation;
    revolutionN.textContent = data.revolution;
    radiusN.textContent = data.radius;
   

 




    overviewFirst.addEventListener('click', () => {
        infoP.textContent = data.overview.content;
        planetImg.src = data.images.planet;
        planetImgAdd.style.display = 'none';
    });

    internalSec.addEventListener('click', () => {
        infoP.textContent = data.structure.content;
        planetImg.src = data.images.internal;
        planetImgAdd.style.display = 'none';
    });

    geologyThird.addEventListener('click', () => {
        infoP.textContent = data.geology.content;
        planetImg.src = data.images.planet;
        planetImgAdd.src = data.images.geology;
        planetImgAdd.style.display = 'block';
       
    });

};

selectPlanet();


burgerBtn.addEventListener('click', () => {
    planetBtn.classList.toggle('active');
    // burgerBtn.classList.toggle('active');


});



















// // const burgerBtn = document.querySelector('.burger-menu');
// // const navMain = document.querySelector('#planet-menu');

// // burgerBtn.addEventListener('click', () => { 
// //     navMain.classList.toggle('active');  
// //      if(navMain.classList.contains('active')) {
// //         burgerBtn.innerStyle = 'open';
// //     } else {
// //         burgerBtn.innerText = 'close';
// //     }  


// // });



// const choosePln = documnet.querySelector('#planet');
// const imgContainer = document.querySelector('#planet-img');
// const planetTitle = document.querySelector('#title');
// const titleP = document.querySelector('info-p')

// const PLANETS_API = 'https://planets-api.vercel.app/V enus'


// choosePlnaddEventListener('click', () => { 
//     fetchInfoPlanets(choosePln.value)
// });

// const fetchInfoPlanets = async (name='Mercury') => {				
//     const response = await fetch('${PLANETS_API}/${name}');
//     const data = await response.json()


//     imgContainer.innerHTML = `
//     <img src="${data.images}" alt="${data.name}" />
//     <h2>${data.name}</h2>`;
//     console.log(data);
   
//    };


//    fetchInfoPlanets();