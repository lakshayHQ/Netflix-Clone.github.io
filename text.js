// #1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
// #2 ID 👉 'trending' = Div that holds trending Movies
// #3 ID 👉 'top_rated' = Div that holds top rated Movies
// */

// Main Function 
// is  
// fetchMovies()

// these are three functions we are going to create 
//   getOriginals()
//   getTrendingNow()
//   getTopRated()
// }

/////----- ShowFunction () for display on DOM


// function fetchMovies  (url,dom_element,path){

// fetch( url)
// .then(value => value.json())
// .then(response => response )
 
// return showMovies(response.result)
// }



//     function getOriginals() {
//         url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213' 

//        const original = document.getElementsByClassName('original__movies')
       
//       return fetchMovies(url,original)
//     }
    // function   getTrendingNow() {
    //     url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    //   const trending = document.getElementById('trending')
    
    // }
//     function getTopRated() {
//         url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

//         const topRated = document.getElementById('top_rated')
//         fetchMovies(url,topRated)
//     }
//    console.log(getOriginals())