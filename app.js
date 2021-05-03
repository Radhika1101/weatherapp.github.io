//q={city name}&appid={API key}


const weatherApi = {
    key:"c4b96045482892eb1cb29475c2217d20",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

//Event listener function on key press
const searchInputBox =document.getElementById("input-box");
searchInputBox.addEventListener("keypress",(event)=>{
    if(event.keyCode==13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
    
});


//Get Weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//Show weather report
function showWeatherReport(weather){
    //console.log(weather);

    let city = document.getElementById("city");
    city.innerHTML=`${weather.name}, ${weather.sys.country}`;
    console.log(weather.name);
    console.log(weather.sys.country );


    let temp = document.getElementById("temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMax = document.getElementById("min-max");
    minMax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML=`${weather.weather[0].main}`;

    let date=document.getElementById("date");
    let todatDate = new Date();
    date.innerText= dateManage(todatDate);

    /*if(weatherType.textContent == 'Haze'){
        document.getElementsByClassName("img")
    }*/
}

//Show current date
function dateManage(dateArg){

    let days=["Sunday", "Monday","tuesday","Wednesday","thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August",
                "September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date= dateArg.getDate();
    let day= days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year }`

}
