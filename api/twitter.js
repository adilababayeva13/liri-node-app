function Twitter(){
    var keys = require("../key.js");
    var Twitter = require("twitter");
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i <tweets.length; i++) {
            if(i==21){
                return;
            }
            console.log("`````````````````````");
            console.log("Created at:",tweets[i].created_at);
            console.log("~~~~~~~~~~~~~~~~~~~~~");
            console.log("Tweet:",tweets[i].text);
            console.log("`````````````````````");
            console.log(" ")
          }
      }
    });

}

module.exports={Twitter};