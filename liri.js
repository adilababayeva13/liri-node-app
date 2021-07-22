require("dotenv").config();
var fs = require("fs");

var command=process.argv[2];
var what=process.argv[3];

//api
const spotifyAPI=require("./api/spotify");
const twitterAPI=require("./api/twitter");
const omdbAPI=require("./api/omdb");

function Random(){

        fs.readFile("random.txt", "utf8", function(error, data) {
               var command= data.split(",");
         Terminal(command[0], command[1]);
        });
     
}

function Terminal(command,what){
    switch (command) {
        case "my-tweets":
          twitterAPI.Twitter();
          break;
        case "spotify-this-song":
            spotifyAPI.Spotify(what);
          break;
        case "movie-this":
            omdbAPI.Omdb(what);
          break;
        case "do-what-it-says":
          Random();
          break;
        default:
          console.log("LIRI doesn't know that");
        }
}
Terminal(command,what);