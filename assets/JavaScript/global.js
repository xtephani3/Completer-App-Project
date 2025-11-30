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


const USERS_DB_NAME = "completer-app-db";
const LOGIN_DB_NAME = "auth-app-db";


function getDatabase(databaseName, defaultValue) {
    const storage = localStorage.getItem(databaseName);
    if (storage !== null) {
        return JSON.parse(storage)
    } else {
        localStorage.setItem(databaseName, JSON.stringify(defaultValue));
        getDatabase(databaseName, defaultValue);
    }
    return defaultValue
}

function updateDatabase(databaseName, newData) {
    localStorage.setItem(databaseName, JSON.stringify(newData));
}


function getLoggedInUser() {
    const database = getDatabase(LOGIN_DB_NAME);

    return database;
}
