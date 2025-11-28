const loginUserEmail = document.getElementById("user-login-email");
const loginUserPassword = document.getElementById("user-login-password");
const loginPageForm = document.getElementById("login-page-form");
const loginErrorElement = document.getElementById("login-error");


const getLoginUserEmail = ()=> loginUserEmail.value;
const getLoginUserPassword = ()=> loginUserPassword.value;



loginPageForm.addEventListener("submit", (e) => {
    e.preventDefault()
   try {
        clearLoginError()
        loginUser(getLoginUserEmail(), getLoginUserPassword())
        location.assign("/dashboard.html")
    } catch (error) {
        showLoginError(error.message)
    }

   
})


function loginUser(email, password) {
    //get the users from database
    const database = getDatabase(USERS_DB_NAME, []);
    //check the matching user 
    const matchedUser = database.find(user => user.email === email);

  //check the matching user if the password is correct
    if (matchedUser) {
        if (matchedUser.password === password) {
            //store the logged in user in our session
            updateDatabase(LOGIN_DB_NAME, matchedUser);
            //return the logged in user
            return matchedUser
        } else {
            throw Error("Incorrect password");
        }
    } else {
        throw Error("Could not find account for the email");
    }
}

function showLoginError(message) {
    loginErrorElement.innerText = message;
}


function clearLoginError() {
    loginErrorElement.innerText = "";
}

