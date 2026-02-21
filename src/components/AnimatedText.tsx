import { useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  shimmer?: boolean;
}

const AnimatedText = ({
  text,
  className = "",
  as: Tag = "span",
  shimmer = false,
}: AnimatedTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const words = text.split(" ");

  return (
    <Tag className={`${className} ${shimmer ? "text-shimmer" : ""}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((letter, letterIdx) => {
            const globalIdx = words
              .slice(0, wordIdx)
              .reduce((acc, w) => acc + w.length, 0) + letterIdx;

            const isNear =
              hoveredIndex !== null &&
              Math.abs(globalIdx - hoveredIndex) <= 2;

            const distance =
              hoveredIndex !== null
                ? Math.abs(globalIdx - hoveredIndex)
                : 3;

            return (
              <span
                key={letterIdx}
                className="inline-block transition-all duration-300 cursor-default"
                style={{
                  transform:
                    hoveredIndex === globalIdx
                      ? "translateY(-6px) scale(1.15)"
                      : isNear
                      ? `translateY(-${Math.max(0, 3 - distance) * 2}px)`
                      : "translateY(0)",
                  color:
                    hoveredIndex === globalIdx
                      ? "hsl(var(--primary))"
                      : isNear
                      ? "hsl(var(--primary) / 0.6)"
                      : undefined,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={() => setHoveredIndex(globalIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {letter}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
