function Spotify(song){
    var keys = require("../key.js");
    var Spotify = require("node-spotify-api");
    var spotify = new Spotify(keys.spotify);

    if (song === undefined) {
        song = "The Sign";
      }

   spotify.search({ type: 'track', query:song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
//   * Artist(s)
     
//   * The song's name
  
//   * A preview link of the song from Spotify
  
//   * The album that the song is from
  var songs = data.tracks.items;


  for (var i = 0; i < songs.length; i++) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Artist(s): ");
    for(var k=0;k<songs[i].artists.length;k++){
        console.log(songs[i].artists[k].name);
    }
    console.log("The song's name: " + songs[i].name);
    console.log("A preview link: " + songs[i].preview_url);
    console.log("The album: " + songs[i].album.name);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(" ");
  }
});
}

module.exports={Spotify};