import { getForcast, getIconSrc } from "./functions.js"; // Importing functions from an external file

const contentHolder = document.getElementById("content");
const addContent = (holder, content) => holder.append(content);
const cities = ["New York", "London", "Alaska", "Eilat"];

// Function to create a card element based on weather data
const createColCard = (data) => {
  // Creating elements for the card
  const colEL = document.createElement("div");
  colEL.className = " col-md-6 ";
  const cardEl = document.createElement("div");
  cardEl.className = "card   mb-4  ";

  // Adding HTML content to the card element
  cardEl.innerHTML = `
    <header class="d-flex justify-content-between flex-row p-5 bg-light  "> 
      <div> 
        <h1>${data.name}</h1>
        <h6>${data.weather[0].description}</h6>
      </div> 
      <img class="w-25 h-25" src="${getIconSrc(data)}" />
    </header>
    <div class="d-flex justify-content-between flex-row p-5 bg-light  "> 
      <div class="d-flex flex-column col-4 p-1 bg-light "> 
        <p> טמפ'  נמדדת </p>
        <b>${data.main.temp}C°</b>
      </div>
      <div class="d-flex flex-column col-4 p-1 bg-light "> 
        <p> טמפ' מורגשת </p>
        <b>${data.main.feels_like}C°</b>
      </div>
      <div class="d-flex flex-column col-4 p-1 bg-light "> 
        <p> לחות </p>
        <b>${data.main.humidity}%</b> 
      </div>
    </div>
  `;

  colEL.append(cardEl);
  return colEL;
};

// Function to render weather information for each city
const render = async (city = 'jerusalem') => {
  const data = await getForcast(city); // Fetching weather data for a city
  addContent(contentHolder, createColCard(data)); // Creating a card and adding it to the content holder
};

// Rendering weather information for each city in the 'cities' array
cities.forEach(function(city) {
  render(city);
});
 