let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"
let baseURL = "https://restcountries.com/v3.1/all"
let cards = document.getElementById("kart")
fetch(`${baseURL}/${id}`).then(rep => rep.json()).then(data => {
    console.log(data)
    cards.innerHTML = `
    <div id="carting" class="card col-md-3" style="width: 24%;">
    <img src="${data[i].flags.png}" class="card-img-top" alt="">
            <div class="card-body">
            <h5><a href="detail.html?countryCode=${data[i].countryCode}">${data[i].name.common}</a></h5>
              <p class="card-text"><b>Population:</b>${data[i].population}</p>
              <p class="card-text"><b>Region:</b>${data[i].region}</p>
              <p class="card-text"><b>Capital:</b>${data[i].capital}</p>
    </div>
    `


})