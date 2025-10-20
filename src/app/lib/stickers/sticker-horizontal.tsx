import { cdnUrl } from "@/app/core/settings";

interface Props {
  team: string;
  cover: string;
  name: string;
}

export function StickerHorizontal({ team, cover, name }: Props) {
  return (
    <div className="grid [grid-template-areas:'stack'] w-[300px] h-[215px] font-haettenschweiler text-white overflow-hidden">
      <Background team={team} />
      <Proplayer url={cover} />
      <Frame />
      <InfoSticker name={name} />
    </div>
  );
}

interface BackgroundProps {
  team: string;
}

function Background({ team }: BackgroundProps) {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <img
        src={`${cdnUrl}/albums/worlds2025/figuritas/backgrounds-horizontal/${team.toLowerCase()}.${
          team.toUpperCase() === "T1" ? "svg" : "png"
        }`}
        className="object-contain"
        loading="lazy"
        decoding="async"
        width={350}
        height={250}
        alt="Fondo Figurita"
      />
    </div>
  );
}

interface ProplayerProps {
  url: string;
}

function Proplayer({ url }: ProplayerProps) {
  return (
    <div
      className="[grid-area:stack] px-4 pb-2 w-full h-[215px]"
      style={{
        transform: "translateZ(1px)",
      }}
    >
      <img
        src={`${cdnUrl}${url}`}
        className="object-contain object-bottom w-full h-full"
        loading="lazy"
        decoding="async"
        width={350}
        height={250}
        alt="Figurita"
      />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(2px)",
      }}
    >
      <img
        src={`${cdnUrl}/albums/worlds2025/figuritas/frames/horizontal.svg`}
        className="object-cover"
        loading="lazy"
        decoding="async"
        width={350}
        height={250}
        alt="Figurita"
      />
    </div>
  );
}

interface InfoStickerProps {
  name: string;
}

function InfoSticker({ name }: InfoStickerProps) {
  return (
    <div
      className="[grid-area:stack] flex items-end justify-between w-[300px] h-[215px]"
      style={{
        transform: "translateZ(3px)",
      }}
    >
      <p
        className="font-bold font-stretch-extra-expanded text-4xl text-white relative left-1/2 bottom-0"
        style={{
          transform: "translate(-50%, -30%)",
        }}
      >
        {name}
      </p>
    </div>
  );
}
