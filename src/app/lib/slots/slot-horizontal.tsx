export function SlotHorizontal() {
  return (
    <div
      className="bg-gray-600 inline-block w-[300px] h-[215px]"
      style={{
        clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);",
      }}
    ></div>
  );
}
