console.log("Welcome");
const API_KEY= "api_key=ccb1221ca78bf9e8a9b25e38f3a0d00f";
const Base_URL= "https://api.themoviedb.org/3";
const API_URL= Base_URL+ "/discover/movie?sort_by=popularity.desc&"+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500';
const searcURL =Base_URL + '/search/movie?'+API_KEY;

const search=document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let movies= document.getElementsByClassName('movie');
    Array.from(movies).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p").title.innerHTML.toLowerCase();
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        
    })
    //console.log(movies);

});

function display (data) {
    let grid=document.getElementById('grid');
    grid.innerHTML="";
    data.forEach(element => {
        const string = `
        <div class=" movie card flex flex-col items-center  shadow-md  rounded-lg " style="height: 25rem; width: 30rem; margin-bottom: 4rem;">
            <img class="" id="logo" src="${IMG_URL+ element.poster_path}" alt="" srcset="" style="height: 20rem; width: 30rem">
            <div style="display: flex;
            justify-content: center; text-align: center; height: 5rem;"><p id="title" class="text-3xl text-black">${element.original_title}</p></div>
            
        </div>
        `;
        grid.innerHTML+=string;
    }); 
}



async function getData(api){
    const resp = await fetch(api).then(response => response.json());
    const data=resp.results;
    display(data);
}

getData(API_URL);

