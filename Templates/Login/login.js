const loginUserEmail = document.getElementById("user-login-email");
const loginUserPassword = document.getElementById("user-login-password");
const loginPageForm = document.getElementById("login-page-form");

const getLoginUserEmail = ()=> loginUserEmail.value;
const getLoginUserPassword = ()=> loginUserPassword.value;



loginPageForm.addEventListener("submit", (e) => {
    e.preventDefault()
   loginUser(getLoginUserEmail(),getLoginUserPassword());
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
            updateDatabase(LOGIN_DB_NAME, matchedUser)
            //return the logged in user
            return matchedUser
        }
    }
}

