var user_Names = [];
var user_Emails = [];
var user_Passwords = [];

function signUpInformation() {


    user_Names.push(document.getElementById("userName").value);
    user_Emails.push(document.getElementById("userEmail").value);
    user_Passwords.push(document.getElementById("userPassword").value);

    localStorage.setItem("name", JSON.stringify(user_Names))
    localStorage.setItem("email", user_Emails)
    localStorage.setItem("password", user_Passwords)

    window.location.href = "./js/login.html"
    alert("login success")


    return false;


}

function loginform() {

    var user_Emails = JSON.parse(localStorage.getItem("user_Emails"))
    var user_Passwords = JSON.parse(localStorage.getItem("user_Passwords"))


    const userEmail = document.getElementById("user-email").value;
    const userEmail = document.getElementById("user-password").value;
    let isFound = false;



    for (let i = 0; i < user_Emails.length; i++) {
        if (userEmail === user_Emails[i]) {
            isFound = i;
            break;
        }
    }

    if (isFound === false) {
        alert("user not found")
    } else if (user_Passwords[isFound] === userEmail) {

        alert("login success");
        window.location.href = "./home.html"

    } else {
        alert("Error Password or Username")
    }


    return false;
}

