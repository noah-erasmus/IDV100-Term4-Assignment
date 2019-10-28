$(function () {

    var title = localStorage.getItem("title");
    var imagePath = localStorage.getItem("imagepath");
    var rating = localStorage.getItem("rating");
    var genre = localStorage.getItem("genre");
    var releaseDate = localStorage.getItem("releaseDate");
    
    var duplicateCheck = ""
    
    function createEntries(imagePath, title, rating, genre, releaseDate){
        $(".watchlist-area").append("<div class='watchlist-entry row'><div class='watchlist-poster col-sm-2'><img src='" + imagePath + "'></div><div class='watchlist-title col-sm-4'><h3>" + title + "</h3><h4>" + releaseDate + "</h4></div><div class='watchlist-rating col-sm-2'><h3>" + rating + "</h3></div><div class='watchlist-genre col-sm-2'><h3>" + genre + "</h3></div><div class='remove-btn col-sm-1'><p>Remove</p></div></div>");
    }
    
    $(document).on("ready", function(){
        if(title !== duplicateCheck){
            createEntries(imagePath, title, rating, genre, releaseDate);
            duplicateCheck = title;
        }
    })
    
    $(".refresh-btn").on("click", function(){
        if(title !== duplicateCheck){
            createEntries(imagePath, title, rating, genre, releaseDate);
            duplicateCheck = title;
        }
        
    })
});
