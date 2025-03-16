import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import All from './pages/All';
import BackEnd from './pages/BackEnd';
import DevOps from './pages/DevOps';
import FrontEnd from './pages/FrontEnd';
import Tools from './pages/Tools';
import Commands from './pages/Commands';
import routes from './routes.js';

const App = () => {
    return (
        <BrowserRouter basename={routes.BaseName}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={routes.All} element={<All />}></Route>
                    <Route path={routes.BackEnd} element={<BackEnd />}></Route>
                    <Route path={routes.FrontEnd} element={<FrontEnd />}></Route>
                    <Route path={routes.DevOps} element={<DevOps />}></Route>
                    <Route path={routes.Tools} element={<Tools />}></Route>
                    <Route path={routes.CommandsByAlias} element={<Commands />}></Route>
                    <Route path={routes.NotFound} element={<NotFound title={'OOPS'} text={'Página no encontrada'} />}></Route>
                    <Route path="*" element={<NotFound title={'OOPS'} text={'Página no encontrada'} />} /> {/* Ruta para manejo de 404 */}
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;