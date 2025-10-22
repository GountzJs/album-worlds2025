import { useState } from "react";
import { Book } from "./components/Book";
import { PageBack, PageFront } from "./components/Pages";
import { Paper } from "./components/Paper";
import { StickersProvider } from "./contexts/stickers.provider";
import { PageAL, PageALBack } from "./pages/AL";
import { PageBLG, PageBLGBack } from "./pages/BLG";
import { PageFLY, PageFLYBack } from "./pages/FLY";
import { PageGEN, PageGENBack } from "./pages/GEN";
import { PageHLE, PageHLEBack } from "./pages/HLE";
import { PageIG, PageIGBack } from "./pages/IG";
import { PageKT, PageKTBack } from "./pages/KT";
import { Portada } from "./pages/Portada";
import { PageT1, PageT1Back } from "./pages/T1";
import { PageTES, PageTESBack } from "./pages/TES";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 14;

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
              <PageGEN />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={2}>
            <PageFront nextPage={nextPage}>
              <PageGENBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageHLE />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={3}>
            <PageFront nextPage={nextPage}>
              <PageHLEBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageKT />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={4}>
            <PageFront nextPage={nextPage}>
              <PageKTBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageT1 />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={5}>
            <PageFront nextPage={nextPage}>
              <PageT1Back />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageBLG />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={6}>
            <PageFront nextPage={nextPage}>
              <PageBLGBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageAL />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={7}>
            <PageFront nextPage={nextPage}>
              <PageALBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageTES />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={8}>
            <PageFront nextPage={nextPage}>
              <PageTESBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageIG />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={9}>
            <PageFront nextPage={nextPage}>
              <PageIGBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageFLY />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={10}>
            <PageFront nextPage={nextPage}>
              <PageFLYBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <></>
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={11}>
            <PageFront nextPage={nextPage}>
              <></>
            </PageFront>
            <PageBack prevPage={prevPage}>
              <></>
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={12}>
            <PageFront nextPage={nextPage}>
              <></>
            </PageFront>
            <PageBack prevPage={prevPage}>
              <></>
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={13}>
            <PageFront nextPage={nextPage}>
              <></>
            </PageFront>
            <PageBack prevPage={prevPage}>
              <div
                className="absolute inset-0 bg-[url('/contraportada.png')] bg-no-repeat bg-contain bg-center w-full h-full"
                style={{
                  transform: "rotateY(180deg) scaleX(-1)",
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
