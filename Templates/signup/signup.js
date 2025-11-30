const signupPageForm = document.getElementById("signup-page-form");
const userFullName = document.getElementById("user-full-name");
const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
const signupErrorElement = document.getElementById("signup-error");

const getUserFullname = ()=> userFullName.value;
const getUserEmail = () => userEmail.value;
const getUserPassword = ()=> userPassword.value;



signupPageForm.addEventListener("submit", (e) => {
    e.preventDefault();
   try {
        clearSignupError();
        signupUser(getUserFullname(), getUserEmail(), getUserPassword());
        toggleForm('login-form')
    } catch (error) {
        showSignupError(error.message)
    }
})






function signupUser(fullname, email, password) {
    const database = getDatabase(USERS_DB_NAME, []);
     if (fullname.length < 3) {
        throw Error("Full name must be at least 3 characters long")
    }

    database.push({
        fullname,
        email,
        password
    });

    updateDatabase(USERS_DB_NAME, database);

    return true;
}



function showSignupError(message) {
    signupErrorElement.style.display = "block";
    signupErrorElement.innerText = message;
}


function clearSignupError() {
     signupErrorElement.style.display = "none";
    signupErrorElement.innerText = "";

}

