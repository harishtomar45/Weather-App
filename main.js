let form = document.querySelector('form');
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p = document.querySelector("p");
let card = document.querySelector(".card");


const weatherApi = async (e) => {
    e.preventDefault();
   
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6247a4186e8f4c85a5074603241301&q=${input.value}&aqi=yes`);
        const data = await response.json();
      card.className = "shadow-lg card p-5 ";
      h1.innerText = data.current.temp_c + '°C';
      h2.innerText = data.location.name;
      img.setAttribute("src", data.current.condition.icon);
      p.innerText = data.current.condition.text
    
    
    } catch (error) {
        window.alert('Please enter valide city name')
        card.className = "shadow-lg card p-5 d-none";
    }
    form.reset();
}



form.addEventListener('submit', weatherApi);