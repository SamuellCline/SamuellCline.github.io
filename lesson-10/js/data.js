//function addData()


    var i;
//    function comp()

        var urlString = document.location.href;
        var urlArray = urlString.split('/');
        var pageHREF=urlArray[urlArray.length-1];
        switch (pageHREF)
        {
            case 'franklin.html':
                i = 0;
                break;
            case 'greenville.html':
                i = 1;
                break;
            case 'placerton.html':
                i = 2;
                break;
            case 'springfield.html' :
                i = 3;
                break;
            default:
                i = null;
                break;
        }




    var requestURL = 'https://byui-cit230.github.io/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function() {
        var weather = request.response;

        tData(weather);
    }
    function tData(json) {


        var name = document.getElementById("name");
        var motto = document.getElementById("motto");
        var yearFounded = document.getElementById("yearFounded");
        var currentPopulation = document.getElementById("currentPopulation");
        var averageRainfall = document.getElementById("averageRainfall");
        var events = document.getElementById("events");
        name.textContent = "Name: " + json.towns[i].name;
        motto.textContent = "Motto: " + json.towns[i].motto;
        yearFounded.textContent = "Year Founded: " + json.towns[i].yearFounded;
        currentPopulation.textContent = "Current Population: " + json.towns[i].currentPopulation;
        averageRainfall.textContent = "Average Rainfall: " + json.towns[i].averageRainfall;
//        events.textContent = json.towns[0].events[0] + "    " + json.towns[0].events[1] + "     " +json.towns[0].events[2];


    }

