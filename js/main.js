$(function(){
    var activeUsername = localStorage.getItem("active-user");
    console.log(activeUsername);
    $(".user-dropdown").text(activeUsername);
    
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        var base_url =  "https://image.tmdb.org/t/p/original";
        function createPortfolioMovie(poster_path, original_title){
            $(".trending-movies").append("<div class='portfolio col-sm-12 col-md-4 col-lg-2'><a href='#' target='_blank'><img src='" + poster_path + "'></a><h2>" + original_title + "</h2></div>");
        }
        for(i = 0; i < 6; i++){
            poster_path = base_url + data.results[i].poster_path;
            original_title = data.results[i].original_title;
            
            createPortfolioMovie(poster_path, original_title);
        }
        
        
    }
    
    var apiRequest2 = new XMLHttpRequest();
    apiRequest2.open('GET', 'https://api.themoviedb.org/3/tv/popular?api_key=3b877e38df9daff06def35c184995a4e&language=en-US&page=1', true);
    apiRequest2.send();
    
    apiRequest2.onload = function(){
        var data = JSON.parse(this.response);
        var base_url =  "https://image.tmdb.org/t/p/original";
        function createPortfolioTV(poster_path, original_name){
            $(".trending-series").append("<div class='portfolio col-sm-12 col-md-4 col-lg-2'><a href='#' target='_blank'><img src='" + poster_path + "'></a><h2>" + original_name + "</h2></div>");
        }
        for(i = 0; i < 6; i++){
            poster_path = base_url + data.results[i].poster_path;
            original_name = data.results[i].original_name;
            
            createPortfolioTV(poster_path, original_name);
        }
        
        
    }
})