export default [
    // 🟠 Maven
    {
        alias: "Maven",
        category: "DevOps",
        command:
            "mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false",
        description: "Crea un nuevo proyecto en Maven",
        commands: [
            {
                command: "mvn clean",
                description: "Limpia los archivos compilados del proyecto",
            },
            {
                command: "mvn compile",
                description: "Compila el código fuente del proyecto",
            },
            {
                command: "mvn test",
                description: "Ejecuta las pruebas del proyecto",
            },
            {
                command: "mvn package",
                description: "Compila y empaqueta el proyecto",
            },
            {
                command: "mvn install",
                description: "Compila, prueba y guarda el paquete en el repositorio local",
            },
            {
                command: "mvn deploy",
                description: "Despliega el paquete en un repositorio remoto",
            },
            {
                command: "mvn dependency:tree",
                description: "Muestra el árbol de dependencias del proyecto",
            },
            {
                command: "mvn exec:java -Dexec.mainClass=com.example.App",
                description: "Ejecuta la aplicación especificando la clase principal",
            },
        ],
    },
];
