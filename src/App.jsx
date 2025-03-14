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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='all' element={<All />}></Route>
                    <Route path='backend' element={<BackEnd />}></Route>
                    <Route path='frontend' element={<FrontEnd />}></Route>
                    <Route path='devops' element={<DevOps />}></Route>
                    <Route path='tools' element={<Tools />}></Route>
                    <Route path='commands/:alias' element={<Commands />}></Route>
                    <Route path="*" element={<NotFound title={'OOPS'} text={'Página no encontrada'} />} /> {/* Ruta para manejo de 404 */}
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;