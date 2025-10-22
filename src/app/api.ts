import { apiUrl } from "./core/settings";

const cache: Map<string, string[]> = new Map([]);

export const getStickers = async (id?: string): Promise<{ data: string[] }> => {
  if (!id) return { data: [] };

  const cacheData = cache.get(id);

  if (cacheData) return { data: cacheData };

  const res = await fetch(`${apiUrl}/worlds2025/users/${id}/stickers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json();

  if (!res.ok) throw data;

  cache.set(id, data);

  return { data };
};
