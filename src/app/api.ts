import { apiUrl } from "./core/settings";

const cache: Map<string, string[]> = new Map([]);

export const getStickers = async (
  username?: string
): Promise<{ data: string[] }> => {
  if (!username) return { data: [] };

  const cacheData = cache.get(username);

  if (cacheData) return { data: cacheData };

  const res = await fetch(`${apiUrl}/worlds2025/users/${username}/stickers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json();

  if (!res.ok) throw data;

  cache.set(username, data);

  return { data };
};
