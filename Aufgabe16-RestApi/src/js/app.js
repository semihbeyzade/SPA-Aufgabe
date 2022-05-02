/* const movieBauen = (movie) => {
    return `<div class="movie">
                <span>${movie.Title} (${movie.Year})</span>
            </div>`
  }
  
  
  const fetchMoviesAsync = (title="", year="") => {
    const apiroute ="http://www.omdbapi.com/?i=tt3896198&apikey=7309c0b3&"
    fetch(apiroute+`s=${title}&y=${year}&type=movie`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        json.Search.forEach(movie => {
          document.getElementById("movies")
            .insertAdjacentHTML("beforeend",movieBauen(movie))
        })
      })
  }
  
  document.getElementById("getMovies").onclick = () => {
    document.getElementById("movies").innerHTML=""
    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    fetchMoviesAsync(title, year)
  } */



const showMovies = (s, y) => {
  const apiroute = `http://www.omdbapi.com/?i=tt3896198&apikey=7309c0b3&s=${s}&y=${y}`
  fetch(apiroute)
    .then(response => response.json())
    .then(json => {
      const movies = json.Search;
      movies.forEach((movie, i) => {
        const movieBox = `<div>${i}: ${movie.Title} </div>`
        document.getElementById("movies").insertAdjacentHTML("beforeend", movieBox)
      });

    })
}




document.getElementById("getMovies").onclick = () => {
  document.getElementById("movies").innerHTML = ""
  const title = document.getElementById("title").value
  const year = document.getElementById("year").value
  showMovies(title, year)
}