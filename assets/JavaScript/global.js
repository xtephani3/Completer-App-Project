const templatesElements = document.querySelectorAll("[data-src]");
for (let elements of templatesElements) {
    const dataImport = elements.getAttribute("data-src");
    fetch(dataImport)
        .then((response) => {
            if (!response.ok) {
                throw "response not found"
            }
            return response.text()
        })
        .then(template => {
            elements.innerHTML = template
            loadTemplateScripts(elements)
        })
        .catch(() => {
            elements.innerHTML = `<h4>template not found</h4>`;

        });
};

function loadTemplateScripts(element) {
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

        document.body.appendChild(newScript)
    }
}



