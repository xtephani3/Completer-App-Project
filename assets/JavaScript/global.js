function renderComponents(elements) {
    for (let element of elements) {
        const dataImport = element.getAttribute("data-src");

        fetch(dataImport)
            .then((response) => {
                if (!response.ok) {
                    throw "Not found"
                }
                return response.text();
            })
            .then((component) => {
                element.innerHTML = component;
                loadComponentScripts(element)
                const subComponents = element.querySelectorAll("[data-src]");
                renderComponents(subComponents)
            })
            .catch(() => {
                element.innerHTML = `<h4>Component not found</h4>`;
            });
    }
}
const componentElements = document.querySelectorAll("[data-src]");
renderComponents(componentElements)

function loadComponentScripts(element) {
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if (script.src) {
            newScript.src = script.src;
        }
        if (script.textContent) {
            newScript.textContent = script.textContent;
        }
        script.remove()

        element.appendChild(newScript)
    }
}


const USERS_DB_NAME = "completer-app-dbrr";
const LOGIN_DB_NAME = "auth-app-dbrr";


function getDatabase(databaseName, defaultValue) {
    //get the database value 
    const storage = localStorage.getItem(databaseName);

    //check if the database value is existent we return the value
    if (storage !== null) {
        return JSON.parse(storage)
    } else {
        //if the database value is non existent we set a default value and recall the function to recheck
        localStorage.setItem(databaseName, JSON.stringify(defaultValue));
        getDatabase(databaseName, defaultValue);
    }

    //return  the default value by default
    return defaultValue
}

function updateDatabase(databaseName, newData) {
    //update the database value in object
    localStorage.setItem(databaseName, JSON.stringify(newData));
}


function getLoggedInUser() {
    //get the current logged in user session
    const database = getDatabase(LOGIN_DB_NAME);

    return database;
}
