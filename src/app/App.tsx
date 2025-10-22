// src/App.tsx
import { useState } from "react";
import { Book } from "./components/Book";
import { PageBack, PageFront } from "./components/Pages";
import { Paper } from "./components/Paper";
import { StickersProvider } from "./contexts/stickers.provider";
import { Portada } from "./pages/Portada";
import { PageT1, PageT1Back } from "./pages/T1";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-950 flex items-center justify-center select-none h-full w-full">
      <StickersProvider>
        <Book>
          <Paper currentPage={currentPage} page={0}>
            <PageFront nextPage={nextPage}>
              <Portada />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <div className="flex items-center justify-center w-full h-full p-8">
                Portada - Atrás
              </div>
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={1}>
            <PageFront nextPage={nextPage}>PÁGINA 1</PageFront>
            <PageBack prevPage={prevPage}>
              <PageT1 />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={2}>
            <PageFront nextPage={nextPage}>
              <PageT1Back />
            </PageFront>
            <PageBack prevPage={prevPage}>Página 2 - Atrás</PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={3}>
            <PageFront nextPage={nextPage}>PÁGINA 3</PageFront>
            <PageBack prevPage={prevPage}>Página 3 - Atrás</PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={4}>
            <PageFront nextPage={nextPage}>PÁGINA 4</PageFront>
            <PageBack prevPage={prevPage}>Página 4 - Atrás</PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={5}>
            <PageFront nextPage={nextPage}>
              <h1 className="text-5xl font-bold">FIN DEL ÁLBUM</h1>
            </PageFront>
            <PageBack prevPage={prevPage}>
              <div
                className="absolute inset-0 bg-[url('/contraportada.png')] bg-no-repeat bg-contain bg-center w-full h-full"
                style={{
                  transform: "rotateY(180deg)",
                }}
              ></div>
            </PageBack>
          </Paper>
        </Book>
      </StickersProvider>
    </div>
  );
}

export default App;
