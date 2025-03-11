export default [
    // 🟣 Node.js
    {
        alias: "Node.js",
        category: "Backend",
        command: "npm init -y",
        description: "Inicializa un nuevo proyecto Node.js",
        commands: [
            {
                command: "npm install express",
                description: "Instala Express.js en el proyecto",
            },
            {
                command: "npm install nodemon --save-dev",
                description: "Instala Nodemon para reinicio automático del servidor",
            },
        ],
        tags: ['javascript'],
    },

    // 🟤 Laravel
    {
        alias: "Laravel",
        category: "Backend",
        command:
            "composer create-project --prefer-dist laravel/laravel my-laravel-app",
        description: "Crea un nuevo proyecto de Laravel",
        commands: [
            {
                command: "php artisan serve",
                description: "Inicia el servidor de desarrollo en Laravel",
            },
            {
                command: "php artisan migrate",
                description: "Ejecuta las migraciones de base de datos",
            },
        ],
        tags: ['php'],
    },

    // 🔵 Python
    {
        alias: "Python",
        category: "Backend",
        command: "pip install django",
        description: "Instala Django con pip",
        commands: [
            {
                command: "pip install flask",
                description: "Instala Flask con pip",
            },
            {
                command: "django-admin startproject my_project",
                description: "Crea un nuevo proyecto en Django",
            },
        ],
        tags: ['python'],
    },
];
