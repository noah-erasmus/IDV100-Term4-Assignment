$(function () {
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
    // Write a function that gets the values of the username and password inputs. Log both to the console...
    $(".loginButton").on("click", function () {
        document.getElementById("usernameInput").value;
        document.getElementById("passwordInput").value;
        console.log("usernameInput");
        console.log("passwordInput");
    })
// Create an Object Array for registered users and thier passwords 
    var registeredUsers = [
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'},
        {username: 'user3', password: 'pass3'}
    ];
//Create an if Statement to check that the username value matches the resgitsered users 
    for (var i = 0; i < users.length; i++) {
        if (username == registeredUsers[i].username && password == registeredUsers[i].password) {
            window.location.href = 'http://moovee.co.za/homepage.html/';
            break;
        } else {
            alert('Username or Password invalid!');
        }
    }
// if a user match occurs the set the localstroage "loggedInUser" to the username from the input 
// Get the local storage name and then go to town...
});
