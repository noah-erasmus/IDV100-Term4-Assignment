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

    // //Store the values using key-pair.
    // localStorage.setItem("user", "mike");
    // localStorage.setItem("pass", "dev11");

    //Trying to set an array of multiple users

    var users = [
        {
            'id': 1,
            'user': 'mike',
            'pass': 'dev11'
        },
        {
            'id': 2,
            'user': 'bob',
            'pass': 'dev22'
        },
        {
            'id': 3,
            'user': 'sam',
            'pass': 'dev33'
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));
    console.log(localStorage);

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






// var users = [
//     { username: 'user1', password: 'pass1' },
//     { username: 'user2', password: 'pass2' },
//     { username: 'user3', password: 'pass3' }
// ];

// var button = document.getElementById('login');

// button.onclick = function () {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     for (var i = 0; i < users.length; i++) {
//         if (username == users[i].username && password == users[i].password) {
//             window.location.href = 'http://where/you/want/to/redirect/';
//             break;
//         } else {
//             alert('You are trying to break in!');
//         }
//     }
// }

{/* <form>
    <legend>Log In</legend>

    <fieldset>
        <label for="username">Username: </label>
        <input id="username" type="text">

            <label for="password">Password: </label>
            <input id="password" type="password">

                <button id="login" type="button">Log In!</button>
   </fieldset>
</form> */}