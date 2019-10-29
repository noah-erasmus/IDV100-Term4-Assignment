//Javascript for the login and signup page/s goes here.
//Document Ready!

// // Toggle Display Sing-In / Registration Divs
// On button click toggle between login and registration screens
$(function(){
    $('#toggler-button').on('click', function(e){
        $('.login-content').css('display', 'none');
        $('.register-content').css('display', 'inline');
        e.preventDefault();
    });
});
$(function () {
    $('#toggler-button2').on('click', function(e){
        $('.register-content').css('display', 'none');
        $('.login-content').css('display', 'inline');
        e.preventDefault();
    });
});


//LOCAL STORAGE LOGIN - USERNAME AND PASSWORD //
//Statement to select element by class
    let txtuser = document.querySelector(".txtuser");
    let txtpass = document.querySelector(".txtpass");
    let submit = document.querySelector(".submit");

//Check if localstorage is supported by browser
if(window.localStorage){
    // console.log("Local Storage Supported"); //Yes

    //Store the values using key-pair.
    localStorage.setItem("user", "dylan");
    localStorage.setItem("pass", "$777");

    //GET ITEM METHOD - Get data of local storage
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");

    let message = document.querySelector(".message");

    submit.addEventListener("click",()=>{
        if(user == txtuser.value && pass == txtpass.value){
            message.innerHTML = "Login Successful!";
            setTimeout(function () {window.location.href = "../index.html";}, 1000);// Redirect to index page after successful login
        }else{
            message.innerHTML = "Username or Password is Invalid!";//Warning Message

        }
    });

// }else{
//     console.log("Local Storage Not Supported!"); //No
};

// ################TO DO LIST ######################
// 1. on login change the user name to show on top right corner depending on which user is logged in. - localstorage user name.
// 2. on login the user name must change and the profile picture accordingly.

