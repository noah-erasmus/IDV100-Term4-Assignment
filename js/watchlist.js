$(function() {
    
    var movieArray = JSON.parse(localStorage.getItem("watch_list"))
    console.log(movieArray);
    
    var duplicateCheck = ""
    
    for(i = 0; i < movieArray.length; i++){
        var title = movieArray[i].movie_title;
        var imagePath = movieArray[i].movie_poster;
        var rating = movieArray[i].movie_rating;
        var genre = movieArray[i].movie_genre;
        var releaseDate = movieArray[i].movie_release;
        
        createEntries(imagePath, title, releaseDate, rating, genre);
    }
    
    function createEntries(imagePath, title, rating, genre, releaseDate){
        $(".watchlist-area").append("<div class='watchlist-entry row'><div class='watchlist-poster col-sm-2'><img src='" + imagePath + "'></div><div class='watchlist-title col-sm-4'><h4 class='title-check'>" + title + "</h4><h5>" + releaseDate + "</h4></div><div class='watchlist-rating col-sm-2'><h5>" + rating + "</h5></div><div class='watchlist-genre col-sm-2'><h4>" + genre + "</h4></div><div class='remove-btn col-sm-1'><img src='../img/remove-btn.png'><p>Remove</p></div></div>");
    }
    
    $(".remove-btn").on("click", function(){
        $(this).parent(".watchlist-entry").hide();
        var title_check = $(this).parent().find(".title-check").text();
        console.log(title_check);
        for(i = 0; i < movieArray.length; i++){
            var index_title = movieArray[i].movie_title;
            if(title_check === index_title){
                movieArray.splice(i, 1);
                localStorage.setItem("watch_list", JSON.stringify(movieArray));
            }
        }
    })
  
    
    
});
