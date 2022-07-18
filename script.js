console.log("Welcome");
const API_KEY = "api_key=ccb1221ca78bf9e8a9b25e38f3a0d00f";
const Base_URL = "https://api.themoviedb.org/3";
const API_URL = Base_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = Base_URL + '/search/movie?' + API_KEY;

const search = document.getElementById('searchTxt');
search.addEventListener("input", async function () {
    let inputVal = search.value.toLowerCase();
    let m = await fetch(searchURL + '&query=' + inputVal).then(res => res.json());
    let results = m.results;
    
    if (inputVal === "") {
        getData(API_URL);
    }
    else{
        display(results);
    }

});

function display(data) {
    let grid = document.getElementById('grid');
    grid.innerHTML = "";
    data.forEach(element => {
        const string = `
        <div class=" movie card flex flex-col items-center  rounded-lg " style="height: 25rem; width: 30rem; margin-bottom: 4rem;">
            <img class="" id="logo" src="${IMG_URL + element.poster_path}" alt="" srcset="" style="height: 20rem; width: 30rem">
            <div style="display: flex;
            justify-content: center; text-align: center; height: 5rem;"><p id="title" class="text-3xl mt-4 text-black">${element.title}</p></div>
            
        </div>
        `;
        grid.innerHTML += string;
    });
}



async function getData(api) {
    const resp = await fetch(api).then(response => response.json());
    const data = resp.results;
    display(data);
}

getData(API_URL);

