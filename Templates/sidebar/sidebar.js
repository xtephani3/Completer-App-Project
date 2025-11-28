function toggleDashboardSidebar() {
    document.querySelector(".completer-app-wrap").classList.toggle("toggle-container--sidebar-closed");
}

const userSidebarName = document.getElementById("sidebar-user-name");
const userSidebarEmail = document.getElementById("sidebar-user-email");
const userIcon = document.getElementById("user-name-icon");



const loggedInUser = getLoggedInUser()

function insertUserDetails() {
    const fullname = loggedInUser.fullname;
    const email = loggedInUser.email;
    const fullnameArray = fullname.split("");
    const userinitial = fullnameArray[0];
    
    userSidebarName.innerText = fullname;
    userSidebarEmail.innerText = email;
    userIcon.innerText = userinitial;
}

 insertUserDetails() 
