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
            {
                command: "npm install axios",
                description: "Instala Axios para hacer peticiones HTTP",
            },
            {
                command: "npm install @vueuse/core",
                description: "Instala VueUse, una colección de composables útiles",
            },
            {
                command: "npm install -D tailwindcss postcss autoprefixer",
                description: "Instala Tailwind CSS en Vue",
            },
            {
                command: "npm run dev",
                description: "Inicia el servidor de desarrollo",
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
            {
                command: "npm install axios",
                description: "Instala Axios para hacer peticiones HTTP",
            },
            {
                command: "npm install tailwindcss postcss autoprefixer",
                description: "Instala Tailwind CSS en React",
            },
            {
                command: "npm install @mui/material @emotion/react @emotion/styled",
                description: "Instala Material UI en React",
            },
            {
                command: "npm start",
                description: "Inicia el servidor de desarrollo de React",
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
            {
                command: "ng generate service my-service",
                description: "Genera un nuevo servicio en Angular",
            },
            {
                command: "ng generate module my-module",
                description: "Genera un nuevo módulo en Angular",
            },
            {
                command: "ng serve",
                description: "Inicia el servidor de desarrollo de Angular",
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
            {
                command: "npm install axios",
                description: "Instala Axios para hacer peticiones HTTP",
            },
            {
                command: "npm install tailwindcss postcss autoprefixer",
                description: "Instala Tailwind CSS en Svelte",
            },
            {
                command: "npm run dev",
                description: "Inicia el servidor de desarrollo de Svelte",
            },
        ],
    },
];
