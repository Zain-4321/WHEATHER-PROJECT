
function getweather() {
    var inp = document.querySelector("#inp");
    var city = document.querySelector("#city");
    var temp = document.querySelector("#temp");
    var humidity = document.querySelector("#humidity");
    var feels = document.querySelector("#feels");
    var wind = document.querySelector("#wind");
    var hour = document.querySelector("#time");
    var weathertype = document.querySelector("#weathertype");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
    .then(function ck(data) {
        return data.json();
    })
    .then(function (data2) {
        for(var i=0; i<data2.weather.length; i++)
            {
                console.log(data2.weather[i].main);
                weathertype.innerText  = `${data2.weather[i].main}`;
            }
        city.innerText = `${data2.name}`;
        temp.innerHTML = `${data2.main.temp}<sup>o</sup>C`;
        humidity.innerHTML = `${data2.main.humidity}<span style="font-size: 21px;">%<span>`;
        feels.innerHTML = `${Math.round(data2.main.feels_like)}<sup>o</sup>C`;
        wind.innerHTML = `${Math.round(data2.wind.speed)}<span>Km</span>`;
        var date2 = new Date();
        a = date2.getMinutes()
        if(a < 10)
            {
                a = "0" + date2.getMinutes();
            }
        hour.innerText = date2.getHours()%12+":"+ a;
        inp.value = '';
    })
    }
    