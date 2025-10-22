import { StickerCover } from "../lib/stickers/sticker-cover";
import { StickerHorizontal } from "../lib/stickers/sticker-horizontal";
import { StickerLogo } from "../lib/stickers/sticker-logo";
import { StickerVertical } from "../lib/stickers/sticker-vertical";

export function PageT1() {
  return (
    <div
      className="flex flex-col items-center justify-center py-2 px-4 gap-8 w-full h-full"
      style={{
        backgroundImage: "url('/pages/t1/front.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center flex-wrap gap-4 h-fit w-full">
        <StickerCover width="40%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerLogo team="T1" />
        </StickerCover>
        <StickerCover width="40%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Kkoma"
            role="COACH"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/kkoma.png"
            country="southkorea"
          />
        </StickerCover>
      </div>
      <div className="flex items-center justify-center gap-4 h-fit w-full">
        <StickerCover width="55%" variant="HORIZONTAL" aspectRatio="350 / 250">
          <StickerHorizontal
            team="T1"
            cover="/albums/worlds2025/teams/t1.png"
            name="Korea Seed #4"
          />
        </StickerCover>
      </div>
    </div>
  );
}

export function PageT1Back() {
  return (
    <div
      className="flex flex-col items-center justify-center py-2 px-4 gap-8 w-full h-full"
      style={{
        backgroundImage: "url('/pages/t1/back.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center flex-wrap gap-4 h-fit w-full">
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
      </div>
      <div className="flex items-center flex-wrap gap-4 h-fit w-full">
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
        <StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
          <StickerVertical
            team="T1"
            name="Faker"
            role="MID"
            date="2025-10-20"
            cover="/albums/worlds2025/proplayers/t1/faker.png"
            country="southkorea"
          />
        </StickerCover>
      </div>
    </div>
  );
}
