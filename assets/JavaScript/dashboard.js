const userWelcomeName = document.getElementById("user-greetings");
const dashboardTaskCounter = document.getElementById("dashboard-task-counter");
const dashboardRecentTasksDisplayContainer = document.getElementById("dashboard-recent-tasks-display-container")

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

let tasks =  getTasks();
dashboardTaskCounter.innerHTML = tasks.length;

function getTasks() {
    return getDatabase(TASKS_DB_NAME, []);
}

const DashboardTaskListItem = ({title, priority, date }) => {
    return `
     <div class="dashboard-tasks-display-active">
        <input class="dashboard-tasks-display-radio" type="radio"/>
        <div class="dashboard-tasks-display-active_description-wrap">
            <b class="dashboard-tasks-display-active_title"> ${title}</b>
            <small class="dashboard-tasks-display-active_date">${date}</small>
        </div>
        <div class="dashboard-tasks-display-active_priority-wrap">
            <span class="dashboard-tasks-display-active_priority-stats">${priority}</span>
        </div>
    </div>
    `
}

const DashboardTaskListEmptyItem = () => {
    return `
     <div class="recent-tasks-checkmark-wrap">
              <img src="/assets/images/svg/checkmarkFive.svg" />
              <span slot="dashboard-action-text">
            <p>No tasks yet</p>
          </span>
        
    `
}

let tasksList = getTasks();


const printDashboardTasks = () => {
    if (tasksList.length > 0) {
        let dashboardTaskListItems = "";

        
        tasksList.forEach((item) => {
            dashboardTaskListItems += DashboardTaskListItem(item);
        });

        dashboardRecentTasksDisplayContainer.innerHTML =dashboardTaskListItems;
    } else {
        dashboardRecentTasksDisplayContainer.innerHTML = DashboardTaskListEmptyItem();
    }

}

printDashboardTasks()