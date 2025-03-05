import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className='text-center text-red-500 text-bold text-2xl'>
            Hola mundo desde React + Vite + Tailwind CSS
          </h1>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App
