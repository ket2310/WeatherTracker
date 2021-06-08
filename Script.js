var dateEl = document.querySelector('#cityAndDate');
var currTempEl = document.querySelector('#temp');
var windEl = document.querySelector('#wind');
var humidEl = document.querySelector('#humid');
var uvindxEl = document.querySelector('#uvindx');
var day1 = document.querySelector('#d1');
var day2 = document.querySelector('#d2');
var day3 = document.querySelector('#d3');
var day4 = document.querySelector('#d4');
var day5 = document.querySelector('#d5');

var today = moment();

var submitSearch = document.querySelector('#searchCity');
var srchText = document.querySelector('#search-input');
var asideHist = document.querySelector('#srchHistory');

var objList = new Array();

submitSearch.addEventListener("click", getWeather)

function getWeather(event) {
    event.preventDefault();
console.log(event.target);

    fetch("https://api.openweathermap.org/data/2.5/weather?" + new URLSearchParams({
        //q: 'Dallas',
        q: srchText.value,
        appid: '07a5a4f905f92a5c0c176f95be296357',
        units: 'imperial'
    }), {

        "method": "GET"
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            dateEl.textContent = response.name + ' (' + today.format("MMM D, YYYY") + ')';
            currTempEl.textContent = 'Temp: ' + response.main.temp;
            windEl.textContent = 'Wind: ' + response.wind.speed + ' MPH';
            humidEl.textContent = 'Humidity: ' + response.main.humidity + '%';
            ;
        })
        .catch(err => {
            console.error(err);
        });


    fetch("https://api.openweathermap.org/data/2.5/forecast?" + new URLSearchParams({
        q: 'Dallas',
        appid: '07a5a4f905f92a5c0c176f95be296357',
        units: 'imperial'
    }), {

        "method": "GET"
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            console.log(moment.unix(response.list[7].dt).format("MM/DD/YYYY"));
            /////////////////////////////////

            var dt1 = document.createElement('h1');
            dt1.textContent = moment.unix(response.list[7].dt).format("MM/DD/YYYY");
            day1.append(dt1);

            var temp1 = document.createElement('h3');
            temp1.textContent = 'Temp: ' + response.list[7].main.temp + ' F';
            day1.append(temp1);

            var wind1 = document.createElement('h3');
            wind1.textContent = 'Wind: ' + response.list[7].wind.speed + ' MPH';
            day1.append(wind1);

            var hum1 = document.createElement('h3');
            hum1.textContent = 'Humidity: ' + response.list[7].main.humidity + ' %';
            day1.append(hum1);

            // JavaScript source code
            var dt2 = document.createElement('h1');
            dt2.textContent = moment.unix(response.list[15].dt).format("MM/DD/YYYY");
            day2.append(dt2);

            var temp2 = document.createElement('h3');
            temp2.textContent = 'Temp: ' + response.list[15].main.temp + ' F';
            day2.append(temp2);

            var wind2 = document.createElement('h3');
            wind2.textContent = 'Wind: ' + response.list[15].wind.speed + ' MPH';
            day2.append(wind2);

            var hum2 = document.createElement('h3');
            hum2.textContent = 'Humidity: ' + response.list[15].main.humidity + ' %';
            day2.append(hum2);



            var dt3 = document.createElement('h1');
            dt3.textContent = moment.unix(response.list[23].dt).format("MM/DD/YYYY");
            day3.append(dt3);

            var temp3 = document.createElement('h3');
            temp3.textContent = 'Temp: ' + response.list[23].main.temp + ' F';
            day3.append(temp3);

            var wind3 = document.createElement('h3');
            wind3.textContent = 'Wind: ' + response.list[23].wind.speed + ' MPH';
            day3.append(wind3);

            var hum3 = document.createElement('h3');
            hum3.textContent = 'Humidity: ' + response.list[23].main.humidity + ' %';
            day3.append(hum3);


            var dt4 = document.createElement('h1');
            dt4.textContent = moment.unix(response.list[31].dt).format("MM/DD/YYYY");
            day4.append(dt4);

            var temp4 = document.createElement('h3');
            temp4.textContent = 'Temp: ' + response.list[31].main.temp + ' F';
            day4.append(temp4);

            var wind4 = document.createElement('h3');
            wind4.textContent = 'Wind: ' + response.list[31].wind.speed + ' MPH';
            day4.append(wind4);

            var hum4 = document.createElement('h3');
            hum4.textContent = 'Humidity: ' + response.list[31].main.humidity + ' %';
            day4.append(hum4);



            var dt5 = document.createElement('h1');
            dt5.textContent = moment.unix(response.list[39].dt).format("MM/DD/YYYY");
            day5.append(dt5);

            var temp5 = document.createElement('h3');
            temp5.textContent = 'Temp: ' + response.list[39].main.temp + ' F';
            day5.append(temp5);

            var wind5 = document.createElement('h3');
            wind5.textContent = 'Wind: ' + response.list[39].wind.speed + ' MPH';
            day5.append(wind5);

            var hum5 = document.createElement('h3');
            hum5.textContent = 'Humidity: ' + response.list[39].main.humidity + ' %';
            day5.append(hum5);


        })
        .catch(err => {
            console.error(err);
        });

    objList.push(srchText.value);
    console.log(objList)
    // Put the object into storage
    
    localStorage.setItem('searches', JSON.stringify(objList));

    var btn = document.createElement('button');    
    var x = 1;
    btn.setAttribute('id', 'btn' + x++);
    btn.setAttribute('width', '250px');
    btn.setAttribute('margin', '10px');
    btn.textContent = srchText.value;
    btn.setAttribute('class', 'btn btn-secondary');
    btn.addEventListener('click', getWeather);
    srchText.value = ''
    asideHist.append(btn);
    localStorage.getItem('objList');
}
