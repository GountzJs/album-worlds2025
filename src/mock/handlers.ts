import { apiUrl } from "@/app/core/settings";
import json from "@/assets/data/user-stickers.json";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${apiUrl}/worlds2025/users/:username/stickers`, () => {
    return HttpResponse.json({ data: json["data"] });
  }),
];
