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





burgerBtn.addEventListener('click', () => {
    planetBtn.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});


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
    temperatureN .textContent = data.temperature;
   

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