import frontend from "./frontend/frontend";
import backend from "./backend/backend";
import devops from "./devops/devops";
import tools from "./tools/tools";

export const commands_frontend = [
    ...frontend,
];

export const commands_backend = [
    ...backend,
];

export const commands_devops = [
    ...devops,
];

export const commands_tools = [
    ...tools,
];

export const commands = [
    ...frontend,
    ...backend,
    ...devops,
    ...tools,
];
