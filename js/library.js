$(function(){
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest.send();
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        function createEntries(original_title, vote_average, genre_ids, release_date){
            $(".entry-line").append("<div class='entry col-xs-2 col-sm-2 col-md-2 col-lg-2'><div class='entry-poster'></div><div class='entry-details'><p class='entry-title'>" + original_title + "</p><p class='entry-rating'>" + vote_average + "</p><p class='entry-genre'>" + genre_ids + "</p><p class='entry-release'>" + release_date + "</p></div></div>>");
        }
        for(i = 0; i < data.results.length; i++){
            original_title = data.results[i].original_title;
            vote_average = data.results[i].vote_average;
            genre_ids = data.results[i].genre_ids[0];
            release_date = data.results[i].release_date;
            
            createEntries(original_title, vote_average, genre_ids, release_date);
            
            console.log(original_title);
        }
    }
})