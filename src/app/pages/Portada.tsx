export function Portada() {
  return (
    <div
      className="absolute inset-0 bg-[url('/portada.png')] border-2 border-gray-300 bg-no-repeat bg-contain bg-center flex items-center justify-center"
      style={{ backfaceVisibility: "hidden" }}
    ></div>
  );
}
