import { cdnUrl } from "@/app/core/settings";
import { BgBrillo } from "@/app/lib/background-brillo/bg-brillo";

interface Props {
  team: string;
}

export function StickerLogo({ team }: Props) {
  return (
    <div className="grid [grid-template-areas:'stack'] w-[200px] h-[280px] font-haettenschweiler text-white">
      <Background />
      <Logo team={team} />
      <Decoration />
    </div>
  );
}

function Background() {
  return (
    <div
      className={`[grid-area:stack] relative w-[200px] h-[280px]`}
      style={{
        transform: "translateZ(0)",
      }}
    >
      <BgBrillo
        url={`${cdnUrl}/albums/worlds2025/figuritas/frames/carta-dorada.svg`}
      />
    </div>
  );
}

interface LogoProps {
  team: string;
}

function Logo({ team }: LogoProps) {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(1px)",
      }}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={`${cdnUrl}/albums/worlds2025/teams/logos/${team.toLowerCase()}.png`}
          className="object-contain max-w-[80%] max-h-[80%] m-auto drop-shadow-lg drop-shadow-black"
          loading="lazy"
          decoding="async"
          width={150}
          height={150}
          alt="Logo Figurita"
        />
      </div>
    </div>
  );
}

function Decoration() {
  return (
    <div
      className="[grid-area:stack] w-[200px] h-[280px]"
      style={{
        transform: "translateZ(2px)",
      }}
    >
      <img
        src={`${cdnUrl}/albums/worlds2025/figuritas/decorations/logo.svg`}
        className="object-contain"
        loading="lazy"
        decoding="async"
        alt="Marco Figurita"
      />
    </div>
  );
}
