//API KEY https://api.themoviedb.org/3/movie/550?api_key=3b877e38df9daff06def35c184995a4e

//Use the the following key to for The Open Movie Database



//Code example from the tutorial in class.
$(function(){

    var apiRequest = new XMLHttpRequest();

    apiRequest.open('GET', "https://api.themoviedb.org/3/movie/550?api_key=3b877e38df9daff06def35c184995a4e", true);

    apiRequest.send();

    console.log(apiRequest);


})

//Code example from the developers guide on the website....
var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=3b877e38df9daff06def35c184995a4e");

xhr.send(data);



