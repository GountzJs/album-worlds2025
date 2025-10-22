import { useEffect, useState } from "react";
import { getStickers } from "../api";
import { useSearchParams } from "../hooks/search-params.hook";
import { StickersContext } from "./stickers.context";

interface Props {
  children: React.ReactNode;
}

export const StickersProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stickers, setStickers] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getStickers(searchParams.username || "");
        setStickers(data);
      } catch {
        setStickers([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams.username]);

  return (
    <StickersContext.Provider value={{ stickers, isLoading }}>
      {children}
    </StickersContext.Provider>
  );
};
