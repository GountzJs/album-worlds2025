interface Props {
  children: React.ReactNode;
}

export function Book({ children }: Props) {
  return (
    <div style={{ perspective: "2500px" }}>
      <div
        className="relative h-[90dvh]"
        style={{
          width: "calc(90dvh * 2481 / 3508 * 2)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
