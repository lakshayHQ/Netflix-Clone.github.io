// * 
// 🌟 APP: Make Netflix

// Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

// Create a fetchMovies() function that will make a dynamic API call to what you need 👇
// ========================================

// - fetchMovies()

// ** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



// These are the 3 main functions and their URL'S you must create  👇
// ========================================

// - getOriginals()
//   * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

// - getTrendingNow()
//   * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

// - getTopRated()
//   * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


// ** These functions will provide the URL you need to fetch() movies of that genere **

// These are all the DIV ID's you're gonna need access to 👇
// ========================================================
// #1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
// #2 ID 👉 'trending' = Div that holds trending Movies
// #3 ID 👉 'top_rated' = Div that holds top rated Movies
// */

// // Call the main functions the page is loaded
// window.onload = () => {
//   getOriginals()
//   getTrendingNow()
//   getTopRated()
// }

// // ** Helper function that makes dynamic API calls **
// function fetchMovies(url, dom_element, path_type) {
//   // Use Fetch with the url passed down 

//   // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
// }

// //  ** Function that displays the movies to the DOM **
// showMovies = (movies, dom_element, path_type) => {
  
//   // Create a variable that grabs id or class


//   // Loop through object
//    // Within loop create an img element


//     // Set attribute


//     // Set source


//     // Add event listener to handleMovieSelection() onClick

  
//     // Append the imageElement to the dom_element selected

// }
// }

// // ** Function that fetches Netflix Originals **
// function getOriginals() {

// }
// // ** Function that fetches Trending Movies **
// function getTrendingNow() {

// }
// // ** Function that fetches Top Rated Movies **
// function getTopRated() {

// }

// // ** BONUS **

// // ** Fetches URL provided and returns response.json()
// async function getMovieTrailer(id) {
//   //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`

// }

// // ** Function that adds movie data to the DOM
// const setTrailer = trailers => {
//   // Set up iframe variable to hold id of the movieTrailer Element
//   const iframe
//   // Set up variable to select .movieNotFound element
//   const movieNotFound

//   // If there is a trailer add the src for it
//   if (trailers.length > 0) {
//     // add d-none class to movieNotFound and remove it from iframe

//     // add youtube link with trailers key to iframe.src
//   } else {
//     // Else remove d-none class to movieNotfound and ADD it to iframe

//   }
// }

/*/0: {backdrop_path: '/eqhKMZTLcieAvoH6CBqknTTfNby.jpg', first_air_date: '2022-08-05', genre_ids: Array(2), id: 90802, name: 'The Sandman', …}
1: {backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', first_air_date: '2016-07-15', genre_ids: Array(3), id: 66732, name: 'Stranger Things', …}
2: {backdrop_path: '/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg', first_air_date: '2016-01-25', genre_ids: Array(2), id: 63174, name: 'Lucifer', …}
3: {backdrop_path: '/7kVXz0nVMuDJHMo7UemfZOA6mWF.jpg', first_air_date: '2022-08-17', genre_ids: Array(2), id: 206087, name: 'High Heat', …}
4: {backdrop_path: '/35SS0nlBhu28cSe7TiO3ZiywZhl.jpg', first_air_date: '2018-05-02', genre_ids: Array(3), id: 77169, name: 'Cobra Kai', …}
5: {backdrop_path: '/p68WrxXPgmhjuaYetTiVKLUb65s.jpg', first_air_date: '2018-09-24', genre_ids: Array(3), id: 79696, name: 'Manifest', …}
6: {backdrop_path: '/zIRssaKBGBitHXo4h680IGCJFIg.jpg', first_air_date: '2022-07-14', genre_ids: Array(2), id: 108296, name: 'Resident Evil', …}
7: {backdrop_path: '/8Xs20y8gFR0W9u8Yy9NKdpZtSu7.jpg', first_air_date: '2022-01-28', genre_ids: Array(3), id: 99966, name: 'All of Us Are Dead', …}
8: {backdrop_path: '/gk1enrMtCVABqJd4ujVwIIeswTT.jpg', first_air_date: '2021-09-03', genre_ids: Array(1), id: 132719, name: 'Money Heist: From Tokyo to Berlin', …}
9: {backdrop_path: '/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg', first_air_date: '2022-06-24', genre_ids: Array(4), id: 112836, name: 'Money Heist: Korea - Joint Economic Area', …}
10: {backdrop_path: '/a51slt8xs4smZJNys29AfHDCy2R.jpg', first_air_date: '2020-04-27', genre_ids: Array(1), id: 100883, name: 'Never Have I Ever', …}
11: {backdrop_path: '/cSqUkhWH5seTIwtqUUAEBFjiLyh.jpg', first_air_date: '2021-09-17', genre_ids: Array(3), id: 93405, name: 'Squid Game', …}
12: {backdrop_path: '/gcoKL5TC1MMDVvMS7mGGeym3mpd.jpg', first_air_date: '2022-02-18', genre_ids: Array(3), id: 103786, name: 'The Cuphead Show!', …}
13: {backdrop_path: '/5XApZkzLHCwrZ8c6l0AJHaeD1of.jpg', first_air_date: '2019-01-11', genre_ids: Array(2), id: 81356, name: 'Sex Education', …}
14: {backdrop_path: '/k47JEUTQsSMN532HRg6RCzZKBdB.jpg', first_air_date: '2022-02-25', genre_ids: Array(3), id: 116135, name: 'Vikings: Valhalla', …}
15: {backdrop_path: '/uU6YW3N11qECNfz18LNGAGg3Uir.jpg', first_air_date: '2018-10-05', genre_ids: Array(3), id: 76669, name: 'Elite', …}
16: {backdrop_path: '/ggkYRGptz8eKTYnDefEjsX7fazd.jpg', first_air_date: '2022-05-26', genre_ids: Array(2), id: 158691, name: 'My Little Pony: Make Your Mark', …}
17: {backdrop_path: '/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg', first_air_date: '2017-05-02', genre_ids: Array(2), id: 71446, name: 'Money Heist', …}
18: {backdrop_path: '/7sqFEDDmK1hG5m92upolcfQxy7R.jpg', first_air_date: '2019-02-15', genre_ids: Array(3), id: 75006, name: 'The Umbrella Academy', …}
19: {backdrop_path: '/qbxoEhlxNcyr7GjG2SXTShWn32m.jpg', first_air_date: '2018-06-26', genre_ids: Array(4), id: 80623, name: 'BAKI', …} //*/