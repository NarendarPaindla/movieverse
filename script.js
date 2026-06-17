const API_KEY="26b9ad21";

const searchBtn=document.getElementById("searchBtn");
const searchInput=document.getElementById("searchInput");
const moviesContainer=document.getElementById("moviesContainer");
const loader=document.getElementById("loader");


async function searchMovies(movieName){
    // loader.style.display = "flex";
    loader.style.display = "block";
    const response=await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
    console.log(response);
    const data=await response.json();
    loader.style.display="none";
   if (data.Response === "False"){
    moviesContainer.innerHTML="<h2>No Movies Found</h2>";
    return;
   }

    displayMovies(data.Search);
}

searchBtn.addEventListener("click",()=>{
     const movie=searchInput.value;
     searchMovies(movie);
})

function displayMovies(movies){
    moviesContainer.innerHTML="";
    movies.forEach(movie=>{
      moviesContainer.innerHTML+=
      `
      <div class="movie-card" onclick="openMovie('${movie.imdbID}')">
      <img src="${movie.Poster}"/>
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>

      `
    })
}

searchInput.addEventListener("keypress",(event)=>{

if(event.key==="Enter"){
    searchMovies(searchInput.value);
}
})


function openMovie(id){
    window.location.href=`pages/movie.html?id=${id}`;
}
