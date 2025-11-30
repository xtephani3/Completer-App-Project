const loginUserEmail = document.getElementById("user-login-email");
const loginUserPassword = document.getElementById("user-login-password");
const loginPageForm = document.getElementById("login-page-form");
const loginErrorElement = document.getElementById("login-error");


const getLoginUserEmail = () => loginUserEmail.value;
const getLoginUserPassword = () => loginUserPassword.value;



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
    const database = getDatabase(USERS_DB_NAME, []);
    const matchedUser = database.find(user => user.email === email);
    if (matchedUser) {
        if (matchedUser.password === password) {
            updateDatabase(LOGIN_DB_NAME, matchedUser);
            return matchedUser
        } else {
            throw Error("Invalid login credentials");
        }
    } else {
        throw Error("Could not find account for the email");
    }
}

function showLoginError(message) {
    loginErrorElement.style.display = "block";
    loginErrorElement.innerText = message;
}


function clearLoginError() {
    loginErrorElement.innerText = "";
    loginErrorElement.style.display = "none";

}

