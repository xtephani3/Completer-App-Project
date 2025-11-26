
function toggleForm(formName) {
    document.body.className = formName
}


// const USERS_DB_NAME = "completer-app-dbrr";
// const LOGIN_DB_NAME = "auth-app-dbrr";
// 
// 
// function getDatabase(databaseName, defaultValue) {
//     //get the database value 
//     const storage = localStorage.getItem(databaseName);
// 
//     //check if the database value is existent we return the value
//     if (storage !== null) {
//         return JSON.parse(storage)
//     } else {
//         //if the database value is non existent we set a default value and recall the function to recheck
//         localStorage.setItem(databaseName, JSON.stringify(defaultValue));
//         getDatabase(databaseName, defaultValue);
//     }
// 
//     //return  the default value by default
//     return defaultValue
// }
// 
// function updateDatabase(databaseName, newData) {
//     //update the database value in object
//     localStorage.setItem(databaseName, JSON.stringify(newData));
// }
// 
// 
// function signupUser(fullname, email, password) {
//     //get the database value
//     const database = getDatabase(USERS_DB_NAME, []);
// 
//     //update with the new user info
//     database.push({
//         fullname,
//         email,
//         password
//     });
// 
//     //update the database
//     updateDatabase(USERS_DB_NAME, database);
// }
// 
// 
// function loginUser(email, password) {
//     //get the users from database
//     const database = getDatabase(USERS_DB_NAME, []);
//     //check the matching user 
//     const matchedUser = database.find(user => user.email === email);
// 
//     //check the matching user if the password is correct
//     if (matchedUser) {
//         if (matchedUser.password === password) {
//             //store the logged in user in our session
//             updateDatabase(LOGIN_DB_NAME, matchedUser)
//             //return the logged in user
//             return matchedUser
//         }
//     }
// }
// 
// function getLoggedInUser() {
//     //get the current logged in user session
//     const database = getDatabase(LOGIN_DB_NAME);
// 
//     return database;
// }
// 
// 
// 
// //testing
// signupUser("Ese Curtis", "curtisese52@gmail.com", "MyStephMySteph")
// 
// const login1 = loginUser("steph@mail.com", "MyStephMySteph")
// const login2 = loginUser("curtisese52@gmail.com", "MyStephMySteph")
// const login3 = loginUser("curtisese52@gmail.com", "MyStephMyStephx")
// 
// 
// console.log("NAWA OH=>>", { login1, login2, login3, loggedIn: getLoggedInUser() })
// 
// 
// 
