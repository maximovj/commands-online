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
            {
                command: "npm install dotenv",
                description: "Instala dotenv para manejar variables de entorno",
            },
            {
                command: "npm install mongoose",
                description: "Instala Mongoose para trabajar con MongoDB",
            },
            {
                command: "npx eslint --init",
                description: "Inicializa ESLint para verificar el código",
            },
            {
                command: "node server.js",
                description: "Ejecuta el servidor Node.js",
            },
        ],
        tags: ['javascript', 'demo'],
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
            {
                command: "php artisan make:model Post -m",
                description: "Crea un modelo con su migración",
            },
            {
                command: "php artisan route:list",
                description: "Muestra todas las rutas definidas",
            },
            {
                command: "php artisan cache:clear",
                description: "Limpia la caché de Laravel",
            },
            {
                command: "php artisan db:seed",
                description: "Ejecuta los seeders de la base de datos",
            },
        ],
        tags: ['php', 'demo'],
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
            {
                command: "python manage.py runserver",
                description: "Inicia el servidor de desarrollo de Django",
            },
            {
                command: "pip install requests",
                description: "Instala la librería requests para hacer peticiones HTTP",
            },
            {
                command: "pip install numpy",
                description: "Instala la librería numpy para cálculos matemáticos",
            },
            {
                command: "python -m venv myenv",
                description: "Crea un entorno virtual en Python",
            },
            {
                command: "source myenv/bin/activate",
                description: "Activa el entorno virtual en macOS/Linux",
            },
            {
                command: "myenv\\Scripts\\activate",
                description: "Activa el entorno virtual en Windows",
            },
        ],
        tags: ['python', 'demo'],
    },
];
