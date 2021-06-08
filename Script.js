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


var ul1 = document.createElement('ul');

var dt1 = document.createElement('li');

var temp1 = document.createElement('li');

var wind1 = document.createElement('li');

var hum1= document.createElement('li');


var ul2 = document.createElement('ul');

var dt2 = document.createElement('li');

var temp2 = document.createElement('li');

var wind2 = document.createElement('li');

var hum2 = document.createElement('li');


var ul3 = document.createElement('ul');

var dt3 = document.createElement('li');

var temp3 = document.createElement('li');

var wind3 = document.createElement('li');

var hum3 = document.createElement('li');


var ul4 = document.createElement('ul');

var dt4 = document.createElement('li');

var temp4 = document.createElement('li');

var wind4= document.createElement('li');

var hum4 = document.createElement('li');


var ul5 = document.createElement('ul');

var dt5 = document.createElement('li');

var temp5 = document.createElement('li');

var wind5 = document.createElement('li');

var hum5 = document.createElement('li');

var today = moment();

var submitSearch = document.querySelector('#searchCity');
var srchText = document.querySelector('#search-input');
var asideHist = document.querySelector('#srchHistory');

var x = 1;

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
            console.log(moment.unix(response.list[7].dt).format("MM/DD/YYYY"));
            /////////////////////////////////

            ul1.setAttribute('style', 'display: inline-flex;');
            ul1.setAttribute('style', 'flex-wrap: wrap');
            ul1.setAttribute('style', 'text-decoration: none;')
            day1.append(ul1);
           
            dt1.textContent = moment.unix(response.list[7].dt).format("MM/DD/YYYY");
            ul1.append(dt1);

            temp1.textContent = 'Temp: ' + response.list[7].main.temp + ' F';
            ul1.append(temp1);

            wind1.textContent = 'Wind: ' + response.list[7].wind.speed + ' MPH';
            ul1.append(wind1);

            hum1.textContent = 'Humidity: ' + response.list[7].main.humidity + ' %';
            ul1.append(hum1);

            ul2.setAttribute('style', 'display: inline-flex;');
            ul2.setAttribute('style', 'flex-wrap: wrap');
            ul2.setAttribute('style', 'text-decoration: none;')
            day2.append(ul2);

            dt2.textContent = moment.unix(response.list[15].dt).format("MM/DD/YYYY");
            ul2.append(dt2);

            temp2.textContent = 'Temp: ' + response.list[15].main.temp + ' F';
            ul2.append(temp2);

            wind2.textContent = 'Wind: ' + response.list[15].wind.speed + ' MPH';
            ul2.append(wind2);

            hum2.textContent = 'Humidity: ' + response.list[15].main.humidity + ' %';
            ul2.append(hum2);

            ul3.setAttribute('style', 'display: inline-flex;');
            ul3.setAttribute('style', 'flex-wrap: wrap');
            ul3.setAttribute('style', 'text-decoration: none;')
            day3.append(ul3);

            dt3.textContent = moment.unix(response.list[23].dt).format("MM/DD/YYYY");
            ul3.append(dt3);

            temp3.textContent = 'Temp: ' + response.list[23].main.temp + ' F';
            ul3.append(temp3);

            wind3.textContent = 'Wind: ' + response.list[23].wind.speed + ' MPH';
            ul3.append(wind3);

            hum3.textContent = 'Humidity: ' + response.list[23].main.humidity + ' %';
            ul3.append(hum3);

            ul4.setAttribute('style', 'display: inline-flex;');
            ul4.setAttribute('style', 'flex-wrap: wrap');
            ul4.setAttribute('style', 'text-decoration: none;')
            day4.append(ul4);

            dt4.textContent = moment.unix(response.list[31].dt).format("MM/DD/YYYY");
            ul4.append(dt4);

            temp4.textContent = 'Temp: ' + response.list[31].main.temp + ' F';
            ul4.append(temp4);

            wind4.textContent = 'Wind: ' + response.list[31].wind.speed + ' MPH';
            ul4.append(wind4);

            hum4.textContent = 'Humidity: ' + response.list[31].main.humidity + ' %';
            ul4.append(hum4);

            ul5.setAttribute('style', 'display: inline-flex;');
            ul5.setAttribute('style', 'flex-wrap: wrap');
            ul5.setAttribute('style', 'text-decoration: none;')
            day5.append(ul5);
            
            dt5.textContent = moment.unix(response.list[39].dt).format("MM/DD/YYYY");
            ul5.append(dt5);

            temp5.textContent = 'Temp: ' + response.list[39].main.temp + ' F';
            ul5.append(temp5);

            wind5.textContent = 'Wind: ' + response.list[39].wind.speed + ' MPH';
            ul5.append(wind5);

            hum5.textContent = 'Humidity: ' + response.list[39].main.humidity + ' %';
            ul5.append(hum5);


        })
        .catch(err => {
            console.error(err);
        });

    objList.push(srchText.value);
    console.log(objList)
    // Put the object into storage
        
    localStorage.setItem('searches', JSON.stringify(objList));

    var divEl = document.createElement('div');
    asideHist.append(divEl);
    
    var btn = document.createElement('button');
    btn.setAttribute('id', 'btn' + x++);
    btn.setAttribute('width', '250px');
    btn.setAttribute('margin', '10px');
    btn.textContent = srchText.value;
    btn.setAttribute('class', 'btn btn-secondary');
    btn.addEventListener('click', getWeather);
    
    srchText.value = ''
    divEl.append(btn);
    localStorage.getItem('objList');
}
