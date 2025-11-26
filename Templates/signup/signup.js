const signupPageForm = document.getElementById("signup-page-form");
const userFullName = document.getElementById("user-full-name");
const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");

const getUserFullname = ()=> userFullName.value;
const getUserEmail = () => userEmail.value;
const getUserPassword = ()=> userPassword.value;



signupPageForm.addEventListener("submit", (e) => {
    e.preventDefault();
   signupUser( getUserFullname(), getUserEmail(),getUserPassword());
})



function signupUser(fullname, email, password) {
    //get the database value
    const database = getDatabase(USERS_DB_NAME, []);

    //update with the new user info
    database.push({
        fullname,
        email,
        password
    });

    //update the database
    updateDatabase(USERS_DB_NAME, database);
}


