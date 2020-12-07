let user_Name = ["zu"]
let user_Email = []
let user_Password = []



function signUpInformation() {

    let userName = document.getElementById("userName").value
    user_Name.push(userName)

    let userEmail = document.getElementById("userEmail").value
    user_Email.push(userEmail)

    let userPassword = document.getElementById("userPassword").value
    user_Password.push(userPassword)

    if (userPassword.length < 5) {
        alert("your password must be greter than 5 charecter")
    }
    if (userPassword.length > 15) {
        alert("Your password must be under 15 character")
    }

    console.log(user_Name)

    console.log(user_Email)

    console.log(user_Password)


}




