const components = [
    {
        name: "preview-card",
        path: "/components/dashboard/cards/card.html"
    },

     {
        name: "dashboard-actions",
        path: "/components/dashboard/cards/card.html"
    },

     {
        name: "quick-action-button",
        path: "/components/dashboard/cards/card.html"
    },


];

const loadComponent = async (name, path) => {
    return fetch(path).then(response => {
         if (!response.ok) {
                    throw "Not found"
                }
        return response.text()
    }).then(components => {
        const container = document.createElement('div');
        container.innerHTML = components;
        document.body.appendChild(container);

        customElements.define(name, class extends HTMLElement {
            constructor() {
                super();
                const template = document.getElementById(name);
                const templateContent = template.content;
                const shadowRoot = this.attachShadow({ mode: 'open' })
                this.shadowRoot.appendChild(templateContent.cloneNode(true));
            }
        });
    });
}

const loadAllComponents = async () => {

    return Promise.all(components.map(async (component) => {
        const loadedComponent = await loadComponent(component.name, component.path);
        
        return loadedComponent
    }))
}


loadAllComponents()
    
