/**
 * Created by Shweta on 2/18/2016.
 */

//function to store user data
function store () {
    var inputFname= document.getElementById("fname");
    var inputLname= document.getElementById("lname");
    var inputEmail= document.getElementById("email");
    var inputPassword= document.getElementById("password");
    localStorage.setItem("fname", inputFname.value);
    localStorage.setItem("lname", inputLname.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("password", inputPassword.value);
}

//function to sign in
function login() {
    var localEmail = localStorage.getItem("email");
    var localPassword = localStorage.getItem("password");
    var localFname = localStorage.getItem("fname");
    var localLname = localStorage.getItem("lname");

    var inputEmail = document.getElementById("email");
    var inputPassword = document.getElementById("password");
    //window.alert('localEmail:'+localEmail+' localPassword:'+localPassword+' localFname:'+localFname+' localLname:'+localLname+' inputEmail:'+inputEmail+' inputPassword:'+inputPassword);


    if((localEmail == inputEmail.value)&&(localPassword==inputPassword.value))
    {
        window.alert('Welcome '+localFname+' '+localLname+'!!! Coming next is your google page! Click ok to continue!');
        window.location.replace("GoogleServices.html");
    }

    else
    {
        window.alert('You are not welcome here! Please Register and Try Again!');

    }
    return false;
}

