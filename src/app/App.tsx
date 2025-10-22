import { useState } from "react";
import { Book } from "./components/Book";
import { PageBack, PageFront } from "./components/Pages";
import { Paper } from "./components/Paper";
import { StickersProvider } from "./contexts/stickers.provider";
import { Page100T, Page100TBack } from "./pages/100T";
import { PageAL, PageALBack } from "./pages/AL";
import { PageBLG, PageBLGBack } from "./pages/BLG";
import { PageCFO, PageCFOBack } from "./pages/CFO";
import { PageFLY, PageFLYBack } from "./pages/FLY";
import { PageFNC, PageFNCBack } from "./pages/FNC";
import { PageG2, PageG2Back } from "./pages/G2";
import { PageGEN, PageGENBack } from "./pages/GEN";
import { PageHLE, PageHLEBack } from "./pages/HLE";
import { PageIG, PageIGBack } from "./pages/IG";
import { PageKOI, PageKOIBack } from "./pages/KOI";
import { PageKT, PageKTBack } from "./pages/KT";
import { Portada } from "./pages/Portada";
import { PagePSG, PagePSGBack } from "./pages/PSG";
import { PageT1, PageT1Back } from "./pages/T1";
import { PageTES, PageTESBack } from "./pages/TES";
import { PageTSW, PageTSWBack } from "./pages/TSW";
import { PageVKS, PageVKSBack } from "./pages/VKS";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 20;

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
              <PageVKS />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={11}>
            <PageFront nextPage={nextPage}>
              <PageVKSBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <Page100T />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={12}>
            <PageFront nextPage={nextPage}>
              <Page100TBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageG2 />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={13}>
            <PageFront nextPage={nextPage}>
              <PageG2Back />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageKOI />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={14}>
            <PageFront nextPage={nextPage}>
              <PageKOIBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageFNC />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={15}>
            <PageFront nextPage={nextPage}>
              <PageFNCBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageCFO />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={16}>
            <PageFront nextPage={nextPage}>
              <PageCFOBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PageTSW />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={17}>
            <PageFront nextPage={nextPage}>
              <PageTSWBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <PagePSG />
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={18}>
            <PageFront nextPage={nextPage}>
              <PagePSGBack />
            </PageFront>
            <PageBack prevPage={prevPage}>
              <></>
            </PageBack>
          </Paper>

          <Paper currentPage={currentPage} page={19}>
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
