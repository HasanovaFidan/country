let params = new URLSearchParams(document.location.search);
let Name = params.get("countryCode"); // is the string "Jonathan"
let content=document.querySelector("#content")
console.log(Name)
let baseURL = "https://restcountries.com/v3.1/all"

fetch(`https://restcountries.com/v3.1/name/${Name}?fullText=true`).then(rep => rep.json()).then(data => {
    console.log(data[0])
    content.innerHTML = `
    <div class="imagedetail">
    <img src="${data[0].flags.png}" class="card-img-top" alt=""></img>
    </div>
     <div class="word">
      <h5><a href="detail.html?countryCode=${data[0].countryCode}">${data[0].name.common}</a></h5>
     <p class="card-text"><b>Population:</b>${data[0].population}</p>
              <p class="card-text"><b>Region:</b>${data[0].region}</p>
              <p class="card-text"><b>Capital:</b>${data[0].capital}</p>
     </div>
    `
    content.innerHTML +=innerHTML


})
