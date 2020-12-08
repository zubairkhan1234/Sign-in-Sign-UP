var user_Names = [];
var user_Emails = [];
var user_Passwords = [];

function signUpInformation() {


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

console.log(user_Email2, user_Password2 )

    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
     isFound = false;



    for (let i = 0; i < user_Email2.length; i++) {
        if (user_Email2[i] === userEmail ) {
            isFound = i;
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

