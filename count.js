let baseURL = "https://restcountries.com/v3.1/all"
let cards = document.getElementById("kart")
let input=document.getElementById("inputsearch")
let option = document.getElementById("option");
let darkModeToggle = document.getElementById("darkmode");
let body = document.body;
let container = document.querySelector(".container");



function seeAllCountries() {
    fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((data) => {
            allCountries = data;
            renderUI(allCountries);
        })
        .catch((err) => console.log(err));
}
seeAllCountries(); 

function renderUI(data) {
    cards.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const innerHTML = `
        <div id="carting" class="card col-md-3" style="width: 24%;">
        <img src="${data[i].flags.png}" class="card-img-top" alt="">
                <div class="card-body">
                <h5><a href="detail.html?countryCode=${data[i].countryCode}">${data[i].name.common}</a></h5>
                  <p class="card-text"><b>Population:</b>${data[i].population}</p>
                  <p class="card-text"><b>Region:</b>${data[i].region}</p>
                  <p class="card-text"><b>Capital:</b>${data[i].capital}</p>
        </div>
        `
        cards.innerHTML += innerHTML
    }
}


input.addEventListener("keyup", (e) => {
    let searchValue = e.target.value;
    let searchResults = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    renderUI(searchResults);
});
function seeCountriesByRegion(region) {
    const filteredCountries = allCountries.filter((country) => country.region === region);
    renderUI(filteredCountries);
}

// --------------------------------------------------------------------------------------------------

option.addEventListener("change", () => {
    const selectedContinent = option.value;
    if (selectedContinent === "value1") {
        const europeCountries = allCountries.filter((country) =>
            country.region === "Europe"
        );
        renderUI(europeCountries);
    } else if (selectedContinent === "value2") {
    
        const asiaCountries = allCountries.filter((country) =>
            country.region === "Asia"
        );
        renderUI(asiaCountries);
    } else if (selectedContinent === "value3") {

        const africaCountries = allCountries.filter((country) =>
            country.region === "Africa"
        );
        renderUI(africaCountries);
        
    }else if (selectedContinent === "value4") {

        const americiasCountries = allCountries.filter((country) =>
            country.region === "Americas"
        );
        renderUI(americiasCountries);}else if (selectedContinent === "value5") {

            const oceaniaCountries = allCountries.filter((country) =>
                country.region === "Oceaina"
            );
            renderUI(oceainaCountries);}
});

// _______________________________________________________________________________________________



let isDarkMode = true;

darkModeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.toggle("dark__mode");
    } 
}); 



