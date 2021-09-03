
// 
const getText = (id, text) => {
    document.getElementById(id).innerHTML = text;
}

const apiKey = `1609e246f76ebed1d87401f26819e867`;
const searchButton = document.getElementById('city-search-button');
const inputField = document.getElementById('input-field');

const getData = () => {
    const inputValue = inputField.value;


    inputField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
};

const displayData = (data) => {
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
    getText('city', data.name) // city name
    getText('country', data.sys.country) // country name
    const image = document.getElementById('condition-image');
    image.setAttribute('src', iconUrl);
    getText('temperature', data.main.temp);
    getText('condition', data.weather[0].main);

};

// first time show for details
const url = `https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&appid=${apiKey}&units=metric`;
fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
