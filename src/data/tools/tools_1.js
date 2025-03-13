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

    // 🟢 Vim
    {
        alias: "Vim",
        category: "Herramientas",
        command: "vim",
        description: "Abre el editor de texto Vim en la terminal",
        commands: [
            {
                command: ":w",
                description: "Guarda el archivo actual",
            },
            {
                command: ":q",
                description: "Cierra Vim",
            },
            {
                command: ":wq",
                description: "Guarda y cierra Vim",
            },
            {
                command: ":q!",
                description: "Cierra Vim sin guardar cambios",
            },
            {
                command: ":set number",
                description: "Muestra los números de línea",
            },
            {
                command: "dd",
                description: "Elimina la línea actual",
            },
            {
                command: "yy",
                description: "Copia la línea actual",
            },
            {
                command: "p",
                description: "Pega el contenido copiado",
            },
            {
                command: "/texto",
                description: "Busca 'texto' en el archivo",
            },
            {
                command: "u",
                description: "Deshace el último cambio",
            },
            {
                command: "Ctrl + r",
                description: "Rehace el último cambio",
            },
            {
                command: ":syntax on",
                description: "Activa la resaltación de sintaxis",
            },
        ],
    },
];
