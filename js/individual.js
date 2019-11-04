$(function(){
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest.send();
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        var base_url =  "https://image.tmdb.org/t/p/original";
        function createEntries(rounded_rating, release_year, title_letter, poster_path, original_title, vote_average, genre_ids, release_date){
            $(".col-12 col-md-12").append("<div class='col-12 col-md-12' genre='" + genre_ids + "' date='" + release_year + "' average='" + rounded_rating + "' title='" + original_title + "' "''"><div class='row'><p class='vote-average'>" + rounding-rating +"</p></div><div class='col-12 col-md-4'><div class='square'><img src='" + poster_path + "'></div></div><div class='col-12 col-md-8'><div class='rectangle'><div class='date'><p class='the-date'>'" + release_year + "'</div><div class='genre'><p class='the-genre'>'" + genre_ids + "'</div></div></div><div class='row'><div class='col-2'></div><div class='col-8'><p class='over-view'>'" + overview + "'</p></div></div><div class='col-2'></div><div class='row'><div class='col-12 col-md-12'></div><div class='trailer col-12 col-md-6'></div></div><div class='row'><p class='movie-title'>" + origianl_title +"</p></div></div>");

        }
        
        
        for(i = 0; i < data.results.length; i++){
            poster_path = base_url + data.results[i].poster_path;
            original_title = data.results[i].original_title;
            vote_average = data.results[i].vote_average;
            genre_ids = window.genre_obj[data.results[i].genre_ids[0]];
            release_year = data.results[i].release_date.charAt(3);
            rounded_rating = data.results[i].vote_average;
            rounded_rating = Math.floor(rounded_rating);
            
            createEntries(rounded_rating, release_year, poster_path, original_title, vote_average, genre_ids, release_date);
        }
        
    }
    
    });
    