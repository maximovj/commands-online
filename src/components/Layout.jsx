import Header from "./Header";
import Footer from "./Footer";
import ToolBar from "./ToolBar";
import Container from "./Container";
import GitHubCorner from "./GitHubCorner";
import ButtonUp from "./ButtonUp";
import { Outlet } from 'react-router-dom';

/*
<div className="flex flex-col align-middle justify-center items-center w-4/4 h-full p-4"></div>
<div className="flex-grow w-full h-full m-4"></div>
*/

function Layout() {
  return (
    <>

      <Header />
      <Container>
        <div className='min-h-screen flex flex-col'>
          <Outlet />  {/* Aquí se renderizan las páginas dinámicas */}
        </div>
      </Container>
      <Footer />
      <ButtonUp />
      <GitHubCorner />
    </>
  )
}

export default Layout
