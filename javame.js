const searchInput = document
 .getElementById("searchInput")

searchInput.addEventListener("input",
 function() {

  const search =
   searchInput.value.toLowerCase();
  const movies = document
   .querySelectorAll(".main")

  movies.forEach(function(movie) {
   const movieTitle = movie
    .querySelector("p strong")
    .textContent.toLowerCase();
   movie.style.display = movieTitle
    .includes(search) ?
    "inline-block" : "none";
  });
 });
  
  
  
  
 
