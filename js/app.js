var user_Names = [];
var user_Emails = [];
var user_Passwords = [];



function signUpInformation() {
    let localName = localStorage.getItem("name");
    let localEmail = localStorage.getItem("email");
    let localPass = localStorage.getItem("password");

    if (localName == null && localEmail == null && localPass == null) {
        user_Names = [];
        user_Emails = [];
        user_Passwords = [];
    }else{
        user_Names = JSON.parse(localName)
        user_Emails = JSON.parse(localEmail)
        user_Passwords = JSON.parse(localPass)
    }

    user_Names.push(document.getElementById("userName").value);
    user_Emails.push(document.getElementById("userEmail").value);
    user_Passwords.push(document.getElementById("userPassword").value);

    localStorage.setItem("name", JSON.stringify(user_Names));
    localStorage.setItem("email", JSON.stringify(user_Emails));
    localStorage.setItem("password", JSON.stringify(user_Passwords));

    window.location.href = "./js/login.html"
    alert("login success")
    return false;

}

var user_Names2 = JSON.parse(localStorage.getItem("name"))
var user_Email2 = JSON.parse(localStorage.getItem("email"))
var user_Password2 = JSON.parse(localStorage.getItem("password"))

function loginform() {


    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
    isFound = false;



    for (let i = 0; i < user_Email2.length; i++) {
        if (user_Email2[i] === userEmail) {
            isFound = i;
            localStorage.setItem("index", isFound);
            break;
        }
    }

    if (isFound === false) {
        alert("user not found")
    } else if (user_Password2[isFound] === userPassword) {

        // alert("login success");
        // console.log(user_Names2)
        // console.log(user_Email2)
        // console.log(user_Password2)
        window.location.href = "./home.html"

    } else {
        alert("Error Password or Username")
    }


    return false;
}


function userData(){

 let indexData = localStorage.getItem('index');   
    document.getElementById("userN").innerHTML = "Name :" + " " + user_Names2[indexData]
    document.getElementById("userE").innerHTML = "Email :" + " " + user_Email2[indexData]
    document.getElementById("userP").innerHTML = "Password :" + " " + user_Password2[indexData]
}














