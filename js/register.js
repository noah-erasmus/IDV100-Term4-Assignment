$(function (){
    // On button click toggle between login and registration screens
    //Toggle between Login and Register Divs
    $('#toggler-button').on('click', function (e) {
        $('.login-content').css('display', 'none');
        $('.register-content').css('display', 'inline');
        e.preventDefault();
    });

    $('#toggler-button2').on('click', function (e) {
        $('.register-content').css('display', 'none');
        $('.login-content').css('display', 'inline');
        e.preventDefault();
    });

// Create an Object Array for registered users and thier passwords 
    var registeredUsers = [
    {
        username: 'user1', 
        password: 'pass1'
    },
    {
        username: 'user2',
        password: 'pass2'
    },
    {
        username: 'user3',
        password: 'pass3'
    }]
// Write a function that gets the values of the username and password inputs. Log both to the console...
    $(".loginButton").on("click", function () {

        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();


        console.log(username);
        console.log(password);


    for (i = 0; i < registeredUsers.length; i++) {
        if (username === registeredUsers[i].username && password === registeredUsers[i].password) {

localStorage.setItem("activeUser", username);

            location.href = '../index.html';
        }else{
            alert('Username or Password invalid!');
        }
    }
// if a user match occurs the set the localstroage "user-active" to the username that has been stored
// Get the local storage name and store in navbar
document.getElementById("user-active").innerHTML = localStorage.getItem("activeUser");

});
});

