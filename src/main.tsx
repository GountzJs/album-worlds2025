import App from "@/app/App.tsx";
import { nodeEnv } from "@/app/core/settings.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

async function enableMocking() {
  if (nodeEnv !== "development") return;

  const { worker } = await import("@/mock/browser");
  return worker.start();
}

enableMocking()
  .then(() =>
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  )
  .catch((error) => {
    throw new Error(error);
  });
