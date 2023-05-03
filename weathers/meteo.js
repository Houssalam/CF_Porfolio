// Remplacez {city name} et {API key} par les valeurs appropriées
const APIKEY = "7413366e8a81308f33d2a30656c8723f";

// Appel a l'API openWeather avec ville en parametre de fonction
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML =
          '<i class="fa-solid fa-temperature-empty fa-beat"></i>' +
          data.main.temp +
          "°";
        document.querySelector("#humidity").innerHTML =
          '<i class="fa-sharp fa-solid fa-droplet fa-beat"></i>' +
          data.main.humidity +
          "%";
        document.querySelector("#wind").innerHTML =
          "<i class='bx bx-wind'></i>" + data.wind.speed + "km/h";
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};
// Ecouteur d'evenement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;

  apiCall(ville);
});
// Appel par defaut au chargement de la page

apiCall("Marseille")
