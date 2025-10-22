import { apiUrl } from "./core/settings";

const cache: string[] = [];

export const getStickers = async (
  username: string
): Promise<{ data: string[] }> => {
  const cacheData = cache;

  if (cacheData.length > 0) return { data: cacheData };

  const res = await fetch(`${apiUrl}/worlds2025/users/${username}/stickers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json();

  if (!res.ok) throw data;

  cache.push(...data);

  return { data };
};
