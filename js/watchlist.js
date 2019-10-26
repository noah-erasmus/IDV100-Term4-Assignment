$(function () {

    var movieName = localStorage.getItem("movieName");
    var imageID = localStorage.getItem("imageID1");
    var imageSource = localStorage.getItem("imageSource1");
    var releaseDate = localStorage.getItem("releaseDate");
    var imdbRating = localStorage.getItem("imdbRating");
    var movieGenre = localStorage.getItem("movieGenre");


    $("#movieName").text(movieName);
    $("#imageID1").text(imageID);
    $("#imageSource1").attr('src', imageSource);
    $("#releaseDate").text(releaseDate);
    $("#imdbRating").text(imdbRating);
    $("#movieGenre").text(movieGenre);
});
