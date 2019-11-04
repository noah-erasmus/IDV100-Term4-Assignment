$(function(){
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest.send();
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        var base_url =  "https://image.tmdb.org/t/p/original";
        function createEntries(rounded_rating, release_year, title_letter, poster_path, original_title, vote_average, genre_ids, release_date){
            $(".entry-line").append("<div class='entry col-6 col-md-2 col-lg-2' genre='" + genre_ids + "' release='" + release_year + "' rating='" + rounded_rating + "' title='" + title_letter + "'><div class='overlay'><h3 class='entry-rating'>" + vote_average + "</h3><h3 class='entry-genre'>" + genre_ids + "</h3><div class='overlay-btns'><a class='#MOVIE' href='the_individualpage.html'><div class='read-more-btn'><img src='../img/read_more_icon.png'><p>Read <br>More</p></div></a><a href='#WATCHLIST'><div class='add-watchlist-btn'><img src='../img/add-watchlist-btn.png'><p>Add to <br>Watchlist</p></div></a></div></div><div class='entry-poster'><img src='" + poster_path + "'></div><div class='entry-details'><p class='entry-title'>" + original_title + "</p><p class='entry-release'>" + release_date + "</p></p></div></div>");
        }
        
        for(i = 0; i < data.results.length; i++){
            poster_path = base_url + data.results[i].poster_path;
            original_title = data.results[i].original_title;
            vote_average = data.results[i].vote_average;
            genre_ids = window.genre_obj[data.results[i].genre_ids[0]];
            release_date = data.results[i].release_date;
            title_letter = data.results[i].original_title.charAt(0);
            release_year = data.results[i].release_date.charAt(3);
            rounded_rating = data.results[i].vote_average;
            rounded_rating = Math.floor(rounded_rating);
            
            createEntries(rounded_rating, release_year, title_letter, poster_path, original_title, vote_average, genre_ids, release_date);
        }
        
        $(".read-more-btn").on("click", function(){
            var storageReference = $(this).parent().parent().parent().siblings(".entry-details").find(".entry-title").text();
            for(i = 0; i < data.results.length; i++){
                if(data.results[i].original_title === storageReference){
                    var indi_title = data.results[i].original_title;
                    var indi_imagePath = base_url + data.results[i].poster_path;
                    var indi_rating = data.results[i].vote_average;
                    var indi_genre = window.genre_obj[data.results[i].genre_ids[0]];
                    var indi_releaseDate = data.results[i].release_date;
                    var indi_overview = data.results[i].overview;
                    
                    localStorage.setItem("individual_title", indi_title);
                    localStorage.setItem("individual_path", indi_imagePath);
                    localStorage.setItem("individual_rating", indi_rating);
                    localStorage.setItem("individual_genre", indi_genre);
                    localStorage.setItem("individual_release", indi_releaseDate);
                    localStorage.setItem("individual_overview", indi_overview);
                    
                    location.href = "the_individualpage.html";
                    
                }
            }
        })
        
//        $(".read-more-btn").on("click", function(){
//            var storageReference = $(this).parent().parent().parent().siblings(".entry-details").find(".entry-title").text();
//            for(i = 0; i < data.results.length; i++){
//                if(data.results[i].original_title === storageReference)
//                
//            }
//        })
        
        $(".add-watchlist-btn").on("click", function(){
            var storageReference = $(this).parent().parent().parent().siblings(".entry-details").find(".entry-title").text();
            for(i = 0; i < data.results.length; i++){
                if(data.results[i].original_title === storageReference){
                    var title = data.results[i].original_title;
                    var imagePath = base_url + data.results[i].poster_path;
                    var rating = data.results[i].vote_average;
                    var genre = window.genre_obj[data.results[i].genre_ids[0]];
                    var releaseDate = data.results[i].release_date;
                    
                    var addedMovie = {movie_title: title, movie_poster: imagePath, movie_rating: rating, movie_genre: genre, movie_release: releaseDate};
                    
                    var current_watch_list = JSON.parse(localStorage.getItem("watch_list"))
                    
                    console.log(current_watch_list);
                    
                    function addToWatchlist(addedMovie){
                        if(current_watch_list){
                            current_watch_list.push(addedMovie)
                        }else{
                            current_watch_list = [addedMovie]
                        }
                        localStorage.setItem("watch_list", JSON.stringify(current_watch_list))
                    }
                     addToWatchlist(addedMovie);
                    
                    
                    
                    
                }
            }
        })
    }
    
    $(".entry").mouseenter(function(){
        $(this).find(".overlay").show();
    })
    
    $(".entry").mouseleave(function(){
        $(this).find(".overlay").hide();
    })
    
    $("#genre").on("change", function(){
        if($(this).val() === "Crime"){
            $(".entry").hide();
            $("div[genre=Crime]").show();
        }
        if($(this).val() === "Adventure"){
            $(".entry").hide();
            $("div[genre=Adventure]").show();
        }
        if($(this).val() === "Action"){
            $(".entry").hide();
            $("div[genre=Action]").show();
        }
        if($(this).val() === "Horror"){
            $(".entry").hide();
            $("div[genre=Horror]").show();
        }
        if($(this).val() === "All"){
            $(".entry").show();
        }
    })
    
    $("#title").on("change", function(){
        if($(this).val() === "All"){
            $(".entry").show();
        }
        if($(this).val() === "a"){
            $(".entry").hide();
            $("div[title=A]").show();
        }
        if($(this).val() === "b"){
            $(".entry").hide();
            $("div[title=B]").show();
        }
        if($(this).val() === "c"){
            $(".entry").hide();
            $("div[title=C]").show();
        }
        if($(this).val() === "d"){
            $(".entry").hide();
            $("div[title=D]").show();
        }
        if($(this).val() === "e"){
            $(".entry").hide();
            $("div[title=E]").show();
        }
        if($(this).val() === "f"){
            $(".entry").hide();
            $("div[title=F]").show();
        }
        if($(this).val() === "g"){
            $(".entry").hide();
            $("div[title=G]").show();
        }
        if($(this).val() === "h"){
            $(".entry").hide();
            $("div[title=H]").show();
        }
        if($(this).val() === "i"){
            $(".entry").hide();
            $("div[title=I").show();
        }
        if($(this).val() === "j"){
            $(".entry").hide();
            $("div[title=J]").show();
        }
        if($(this).val() === "k"){
            $(".entry").hide();
            $("div[title=K]").show();
        }
        if($(this).val() === "l"){
            $(".entry").hide();
            $("div[title=L]").show();
        }
        if($(this).val() === "m"){
            $(".entry").hide();
            $("div[title=M]").show();
        }
        if($(this).val() === "n"){
            $(".entry").hide();
            $("div[title=N]").show();
        }
        if($(this).val() === "o"){
            $(".entry").hide();
            $("div[title=O]").show();
        }
        if($(this).val() === "p"){
            $(".entry").hide();
            $("div[title=P]").show();
        }
        if($(this).val() === "q"){
            $(".entry").hide();
            $("div[title=Q]").show();
        }
        if($(this).val() === "r"){
            $(".entry").hide();
            $("div[title=R]").show();
        }
        if($(this).val() === "s"){
            $(".entry").hide();
            $("div[title=S]").show();
        }
        if($(this).val() === "t"){
            $(".entry").hide();
            $("div[title=T]").show();
        }
        if($(this).val() === "u"){
            $(".entry").hide();
            $("div[title=U]").show();
        }
        if($(this).val() === "v"){
            $(".entry").hide();
            $("div[title=V]").show();
        }
        if($(this).val() === "w"){
            $(".entry").hide();
            $("div[title=W]").show();
        }
        if($(this).val() === "x"){
            $(".entry").hide();
            $("div[title=X]").show();
        }
        if($(this).val() === "y"){
            $(".entry").hide();
            $("div[title=Y]").show();
        }
        if($(this).val() === "z"){
            $(".entry").hide();
            $("div[title=Z]").show();
        }
    })
    
    $("#date-of-release").on("change", function(){
        if($(this).val() === "All"){
            $(".entry").show();
        }
        if($(this).val() === "9"){
            $(".entry").hide();
            $("div[release=9]").show();
        }
        if($(this).val() === "8"){
            $(".entry").hide();
            $("div[release=8]").show();
        }
        if($(this).val() === "7"){
            $(".entry").hide();
            $("div[release=7]").show();
        }
        if($(this).val() === "6"){
            $(".entry").hide();
            $("div[release=6]").show();
        }
        if($(this).val() === "5"){
            $(".entry").hide();
            $("div[release=5]").show();
        }
        if($(this).val() === "4"){
            $(".entry").hide();
            $("div[release=4]").show();
        }
        if($(this).val() === "3"){
            $(".entry").hide();
            $("div[release=3]").show();
        }
        if($(this).val() === "2"){
            $(".entry").hide();
            $("div[release=2]").show();
        }
        if($(this).val() === "1"){
            $(".entry").hide();
            $("div[release=1]").show();
        }
        if($(this).val() === "0"){
            $(".entry").hide();
            $("div[release=0]").show();
        }
    })
    
    $("#imdbRating").on("change", function(){
        var roundedRating = 0;
        if($(this).val() === "All"){
            $(".entry").show();
        }
        if($(this).val() === "9"){
            $(".entry").hide();
            $("div[rating=9]").show();
        }
        if($(this).val() === "8"){
            $(".entry").hide();
            $("div[rating=8]").show();
        }
        if($(this).val() === "7"){
            $(".entry").hide();
            $("div[rating=7]").show();
        }
        if($(this).val() === "6"){
            $(".entry").hide();
            $("div[rating=6]").show();
        }
        if($(this).val() === "5"){
            $(".entry").hide();
            $("div[rating=5]").show();
        }
        if($(this).val() === "4"){
            $(".entry").hide();
            $("div[rating=4]").show();
        }
        if($(this).val() === "3"){
            $(".entry").hide();
            $("div[rating=3]").show();
        }
        if($(this).val() === "2"){
            $(".entry").hide();
            $("div[rating=2]").show();
        }
        if($(this).val() === "1"){
            $(".entry").hide();
            $("div[rating=1]").show();
        }
    })
})