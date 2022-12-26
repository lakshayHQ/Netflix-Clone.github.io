
  getOriginals()
  getTrendingNow()
  getTopRated()




function fetchMovies (url,dom_element,path_type){
    fetch(url)
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }  } )
    .then(data => showMovies(data,dom_element,path_type))
    .catch(error => console.error(error))
}

function showMovies(movies,dom_element,path_type){
   console.log(movies)
 var element = document.querySelector(dom_element)
    for (let movie of movies.results) {
       let imageElement = document.createElement('img')
       imageElement.setAttribute('data-id',movie.id)
       imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
       element.appendChild(imageElement)
    }
}




 
  function  getOriginals()
{
    url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    fetchMovies(url,'.original__movies','poster_path')
}


 
  function  getTrendingNow() {
    url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    fetchMovies(url,'#trending','backdrop_path')
  }

  function  getTopRated(){ 
    url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
    fetchMovies(url,'#top_rated','backdrop_path')
  }


