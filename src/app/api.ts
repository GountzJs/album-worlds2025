import userStickers from "@/assets/data/user-stickers.json";

const cache: string[] = [];

export const getStickers = async (
  username: string
): Promise<{ data: string[] }> => {
  console.log(username);
  const cacheData = cache;

  if (cacheData.length > 0) return { data: cacheData };

  const data = userStickers["data"];

  cache.push(...data);

  return { data };
};
