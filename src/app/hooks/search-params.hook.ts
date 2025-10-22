import { useEffect, useState } from "react";

export function useSearchParams() {
  const [params, setParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateParams = () => {
      const sp = new URLSearchParams(window.location.search);
      const entries: { [key: string]: string } = {};
      sp.forEach((value, key) => {
        entries[key] = value;
      });
      setParams(entries);
    };

    updateParams();

    window.addEventListener("popstate", updateParams);
    return () => {
      window.removeEventListener("popstate", updateParams);
    };
  }, []);

  return params;
}
