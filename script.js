const API_KEY="26b9ad21";

const searchBtn=document.getElementById("searchBtn");
const searchInput=document.getElementById("searchInput");
const moviesContainer=document.getElementById("moviesContainer");

async function searchMovies(movieName){
    const response=await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
    console.log(response);
    const data=await response.json();
    console.log(data);
}

searchMovies("Pushpa");