interface PageFrontProps {
  nextPage: () => void;
  children: React.ReactNode;
}

export function PageFront({ nextPage, children }: PageFrontProps) {
  return (
    <div
      className="absolute inset-0 bg-white flex items-center justify-center text-4xl font-bold text-gray-700"
      style={{ backfaceVisibility: "hidden" }}
      onClick={nextPage}
    >
      {children}
    </div>
  );
}

interface PageBackProps {
  prevPage: () => void;
  children: React.ReactNode;
}

export function PageBack({ prevPage, children }: PageBackProps) {
  return (
    <div
      className="absolute inset-0 bg-white border-2 border-gray-300 flex items-center justify-center text-2xl text-gray-400"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
      onClick={prevPage}
    >
      {children}
    </div>
  );
}
