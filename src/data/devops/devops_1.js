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
                command: "mvn package",
                description: "Compila y empaqueta el proyecto",
            },
        ],
    },
];
