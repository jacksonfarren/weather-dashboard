const API_KEY = '384a9d3c87bbb0c61ab2eb7ce6e80c75'

const searchButton = document.getElementById('search-button');
const history = [];

function currentCondition(city) {

    const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        const iconCode = response.weather[0].icon;
        const iconImage = `https://openweathermap.org/img/w/${iconCode}.png`

        const lat = response.coord.lat;
        const lon = response.coord.lon;
        
        const uviQuery = 
    })
}

searchButton.addEventListener('click', function(e) {
    e.preventDefault();

    const city = document.getElementById('enter-city').value
    currentCondition(city);

    if (!city) {
        console.error('Need an input value');
        return;
    }

    if (!history.includes(city)) {
        history.push(city);

        const cityHistory = $(`
            <li class="list-group-item">${city}</li>
        `);

        document.querySelector('#cityHistory').appendChild(cityHistory);
    };

    localStorage.setItem("city", JSON.stringify(history));
});