function Omdb(movie){
    var axios = require("axios");
    if (movie === undefined) {
        movie = "Mr Nobody";
      }

      axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=trilogy")
  .then(function (response) {
    // handle success
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.

    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rated: " + response.data.Rated);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
 
}

module.exports={Omdb};