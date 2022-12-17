function getweatherdata(){
  navigator.geolocation.getCurrentPosition((success)=>{
    let {latitude,longitude} =success.coords;
    // console.log(latitude)
    // console.log(longitude)
    document.getElementById("lat").innerHTML= latitude
    document.getElementById("long").innerHTML= longitude
    latitude.innerHTML = latitude;
    longitude.innerHTML = longitude;
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=&${longitude}&exclude=hourly,minutely&units=metric&appid=472926744a3c31568ee0ad6f9534db71`
    fetch(url).then(res=> res.json()).then(data=>{
      console.log(data);
      showWethereData(data)
    })
  })
}

function showWethereData(data) {

      document.getElementById("latti").innerHTML = `${data.coord.lon}`
      document.getElementById("logit").innerHTML = `${data.coord.lat}`
      document.getElementById("Time_Zone").innerHTML = `${data.timezone}`
      document.getElementById("Wind_speed").innerHTML =`${data.wind.speed}`
      document.getElementById("pressure").innerHTML = `${data.main.pressure}`
      document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
      document.getElementById("Wind_Direction").innerHTML =`${data.wind.direction.name}`;
      document.getElementById("Temp").innerHTML = `${data.main.temp}`
      document.getElementById("Feels_like").innerHTML = `${data.main.feels_like}`
}

 

//  to display map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 18.5344, lng: 73.883 },
    zoom: 8,
  });
}
window.initMap = initMap;

let button = document.getElementById("btn");
button.onclick = getweatherdata()