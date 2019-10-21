//Javascript for the login and signup page/s goes here.
//DO NOT TOUCH :)



//Document Ready!
// $(function(){
// // Toggle Display Sing-In / Registration Divs





// });

// var array = [1, 2, 3];

// localStorage.setItem("array", JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));


// console.log(typeof array); //object
// console.log(array); //[1, 2, 3]



// On button click toggle between login and registration screens
$(function(){
    $('#toggler-button').on('click', function(e){
        $('.login-content').css('display', 'none');
        $('.register-content').css('display', 'inline');
        e.preventDefault();
    });
});
$(function () {
    $('#toggler-button2').on('click', function (e) {
    $('.register-content').css('display', 'none');
    $('.login-content').css('display', 'inline');
    e.preventDefault();
});
});