import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import All from './pages/All';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='all' element={<All />}></Route>
                    <Route path="*" element={<NotFound title={'OOPS'} text={'Página no encontrada'} />} /> {/* Ruta para manejo de 404 */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;