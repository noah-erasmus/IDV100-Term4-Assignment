$(function(){
    var indiTitle = localStorage.getItem("individual_title");
    var indiRating = localStorage.getItem("individual_rating");
    var indiGenre = localStorage.getItem("individual_genre");
    var indiRelease = localStorage.getItem("individual_release");
    var indiImage = localStorage.getItem("individual_path");
    
    console.log(indiTitle)
    
    $(".movie-title").text(indiTitle);
    $(".vote-average").text(indiRating);
    $(".movie-poster").attr("src", indiImage);
    $(".the-date").text(indiRelease);
    $(".the-genre").text(indiGenre);
})
    