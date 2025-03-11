export default [
    // 🔵 VSCode
    {
        alias: "VSCode",
        category: "Herramientas",
        command: "code .",
        description: "Abre la carpeta actual en Visual Studio Code",
        commands: [
            {
                command: "code --install-extension esbenp.prettier-vscode",
                description: "Instala la extensión de Prettier en VSCode",
            },
        ],
    },
];
