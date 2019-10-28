$(function(){
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest.send();
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        var base_url =  "https://image.tmdb.org/t/p/original";
        function createEntries(poster_path, original_title, vote_average, genre_ids, release_date){
            $(".entry-line").append("<div class='entry col-xs-2 col-sm-2 col-md-2 col-lg-2'><div class='entry-poster'><img src='" + poster_path + "'></div><div class='entry-details'><div class='details-left'><p class='entry-title'>" + original_title + "</p><p class='entry-rating'>" + vote_average + "</p></div><div class='details-right'><p class='entry-genre'>" + genre_ids + "</p><p class='entry-release'>" + release_date + "</p></div></div><div class='entry-btns'><a href='#'><div class='read-more-btn'><p>Read <br>more</p></div></a><div class='add-watchlist-btn'><p>Add to <br>watchlist</p></div></div></div");
        }
        for(i = 0; i < data.results.length; i++){
            poster_path = base_url + data.results[i].poster_path;
            original_title = data.results[i].original_title;
            vote_average = data.results[i].vote_average;
            genre_ids = window.genre_obj[data.results[i].genre_ids[0]];
            release_date = data.results[i].release_date;
            
            createEntries(poster_path, original_title, vote_average, genre_ids, release_date);
        }
        $(".add-watchlist-btn").on("click",function(){
            var storageReference = $(this).closest().find(".entry-title").text();
            console.log(storageReference);
            debugger;
        })
    }
})