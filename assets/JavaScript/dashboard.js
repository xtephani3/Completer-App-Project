const userWelcomeName = document.getElementById("user-greetings");

const loggedInUser_dashboard = getLoggedInUser();


const insertDashboardUserDetails = ()=>{
      const fullname = loggedInUser_dashboard.fullname;
      const greetings = getGreeting();
      userWelcomeName.innerText = `${greetings}, ${fullname}!`

}

function getGreeting(date = new Date()) {
  const hour = date.getHours(); 
  if (hour >= 1 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 15) return 'Good afternoon';
  return 'Good evening';
}


insertDashboardUserDetails();

