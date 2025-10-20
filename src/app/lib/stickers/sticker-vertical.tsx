import { cdnUrl } from "@/app/core/settings";
import { capitalizeFirst } from "@/app/utils/functions";

interface Props {
  team: string;
  name: string;
  role: string;
  date: string;
  cover: string;
  country: string;
  quantity: number;
}
export function StickerVertical({
  team,
  name,
  role,
  date,
  cover,
  country,
  quantity,
}: Props) {
  return (
    <div className="grid [grid-template-areas:'stack'] w-[200px] h-[280px] font-haettenschweiler text-white">
      <Background team={team} />
      <Proplayer url={cover} />
      <InfoSticker
        team={team}
        name={name}
        role={role}
        date={date}
        country={country}
      />
      <Decoration team={team} />
      <Frame />
      <Badge quantity={quantity} />
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
        src={`${cdnUrl}/albums/worlds2025/figuritas/backgrounds/${team.toLowerCase()}.${
          team.toUpperCase() === "T1" ? "svg" : "png"
        }`}
        className="object-contain"
        loading="lazy"
        decoding="async"
        width={250}
        height={300}
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
      className="[grid-area:stack] pt-6 pb-4 px-4 w-[200px] h-[280px]"
      style={{
        transform: "translateZ(1px)",
      }}
    >
      <img
        src={`${cdnUrl}${url}`}
        className="object-contain object-bottom"
        loading="lazy"
        decoding="async"
        alt="Figurita"
      />
    </div>
  );
}

interface InfoStickerProps {
  team: string;
  name: string;
  role: string;
  date: string;
  country: string;
}

function InfoSticker({ team, name, role, date, country }: InfoStickerProps) {
  const getFontSize = () => {
    if (name.length > 9) return "text-[40px] leading-1";
    if (name.length > 5) return "text-[44px] leading-1";
    return "text-6xl";
  };

  return (
    <div
      className="[grid-area:stack] flex items-end justify-between p-6 w-full h-full"
      style={{
        transform: "translateZ(2px)",
      }}
    >
      <div className="flex flex-col h-fit w-full">
        <div className="flex flex-col gap-3 w-full">
          <span className="ml-1">
            <img
              src={`${cdnUrl}/countries/flags/${country.toLowerCase()}.png`}
              className="object-contain max-w-[30px] max-h-[30px]"
              loading="lazy"
              decoding="async"
              alt={`Cover ${country}`}
            />
          </span>
          <img
            src={`${cdnUrl}/albums/worlds2025/figuritas/logos/teams/${team.toLowerCase()}.svg`}
            className="object-contain max-w-[36px] max-h-[36px]"
            loading="lazy"
            decoding="async"
            alt={`Cover ${team}`}
          />
        </div>
        <div className="flex items-center justify-between h-fit w-full">
          <p
            className={`font-regular ${getFontSize()} text-white text-shadow-blue-500`}
          >
            {capitalizeFirst(name)}
          </p>
          <div className="flex flex-col items-center h-fit gap-0.5">
            <img
              src={`${cdnUrl}/albums/worlds2025/figuritas/logos/roles/${role.toLowerCase()}.svg`}
              className="object-contain max-w-[34px] max-h-[34px]"
              loading="lazy"
              decoding="async"
              alt="Support Role"
            />
            <p className="font-regular text-md text-white tracking-wider uppercase">
              {role}
            </p>
          </div>
        </div>
        <p className="font-regular text-lg text-white">{date}</p>
      </div>
    </div>
  );
}

interface DecorationProps {
  team: string;
}

function Decoration({ team }: DecorationProps) {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(3px)",
      }}
    >
      <img
        src={`${cdnUrl}/albums/worlds2025/figuritas/decorations/${team.toLowerCase()}.svg`}
        className="object-contain"
        loading="lazy"
        decoding="async"
        alt="Marco Figurita"
      />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(4px)",
      }}
    >
      <img
        src={`${cdnUrl}/albums/worlds2025/figuritas/frames/vertical.svg`}
        className="object-contain"
        loading="lazy"
        decoding="async"
        width={250}
        height={300}
        alt="Figurita"
      />
    </div>
  );
}

interface BadgeProps {
  quantity: number;
}

function Badge({ quantity }: BadgeProps) {
  return (
    <div
      className="[grid-area:stack] w-full h-full"
      style={{
        transform: "translateZ(5px)",
      }}
    >
      <p className="relative translate-x-[-10px] translate-y-[-10px] rounded-full flex items-center justify-center w-12 h-12 font-poppins text-2xl font-bold bg-red-500">
        {quantity}
      </p>
    </div>
  );
}
