const baseUrl = import.meta.env.BASE_URL || '/';

const routes = {
    BaseName: `${baseUrl}`,
    Root: '/',
    All: '/all',
    BackEnd: '/backend',
    FrontEnd: '/frontend',
    DevOps: '/devops',
    Tools: '/tools',
    CommandsByAlias: '/commands/:alias',
    NotFound: 'page/not-found',
};

export default routes;