interface PageFrontProps {
  nextPage: () => void;
  children: React.ReactNode;
}

export function PageFront({ nextPage, children }: PageFrontProps) {
  return (
    <div
      className="bg-white absolute inset-0 flex items-center justify-center border-2 border-gray-200 "
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
      className="bg-white absolute inset-0 flex items-center justify-center border-2 border-gray-200 "
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
