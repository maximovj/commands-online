export default [
    // 🟢 Vue.js
    {
        alias: "Vue",
        category: "Frontend",
        command: "npm create vite@latest my-vue-app --template vue",
        description: "Crea un nuevo proyecto de Vue con Vite",
        commands: [
            {
                command: "vue add router",
                description: "Añade Vue Router al proyecto",
            },
            {
                command: "vue add vuex",
                description: "Añade Vuex al proyecto",
            },
        ],
    },

    // 🔵 React
    {
        alias: "React",
        category: "Frontend",
        command: "npx create-react-app my-app",
        description: "Crea un nuevo proyecto de React con CRA",
        commands: [
            {
                command: "npm install react-router-dom",
                description: "Instala React Router para navegación",
            },
            {
                command: "npm install redux react-redux",
                description: "Instala Redux para gestión de estado",
            },
        ],
    },

    // 🔴 Angular
    {
        alias: "Angular",
        category: "Frontend",
        command: "ng new my-angular-app",
        description: "Crea un nuevo proyecto en Angular",
        commands: [
            {
                command: "ng add @angular/material",
                description: "Añade Angular Material al proyecto",
            },
            {
                command: "ng generate component my-component",
                description: "Genera un nuevo componente en Angular",
            },
        ],
    },

    // 🟠 Svelte
    {
        alias: "Svelte",
        category: "Frontend",
        command: "npx degit sveltejs/template my-svelte-app",
        description: "Crea un nuevo proyecto de Svelte",
        commands: [
            {
                command: "npm install -D svelte-preprocess",
                description: "Instala el preprocesador de Svelte",
            },
        ],
    },
];
