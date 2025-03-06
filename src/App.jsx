import Header from "./components/Header";
import Footer from "./components/Footer";
import ToolBar from "./components/ToolBar";
import Container from "./components/Container";
import GitHubCorner from "./components/GitHubCorner";
import NotFound from "./components/NotFound";
import ButtonUp from "./components/ButtonUp";
import CommandList from "./components/CommandList";
import { useState } from "react";

function App() {

  const [success, setSuccess] = useState(true);

  const showCards = () => {
    setSuccess(!success);
  }

  return (
    <>
      <GitHubCorner />
      <ButtonUp />
      <Header />
      <Container>
        <div className='min-h-screen flex flex-col items-center justify-center'>
          <ToolBar showCards={showCards} success={success} />
          {
            success ? (
              <div className="flex-grow w-full h-full m-4">
                {/* bg-red-400 */}
                <CommandList title="OOPS" text="Lo siento, elementos no encontrados..." />
              </div>
            ) : null
          }
        </div>
      </Container>
      <Footer />

    </>
  )
}

export default App
