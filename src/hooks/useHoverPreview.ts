import { useRef, useState } from "react";

type Position = { x: number; y: number };

export const useHoverPreview = (cardDimensions) => {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });

  const hoverTimeoutRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const hoverTargetRef = useRef<HTMLElement | null>(null);

  const HOVER_DELAY = hovered ? 300 : 500;

  const handleEnter = (e: React.MouseEvent, src) => {
    isHoveringRef.current = true;
    hoverTargetRef.current = e.currentTarget as HTMLElement;

    hoverTimeoutRef.current = window.setTimeout(() => {
      if (!isHoveringRef.current || !hoverTargetRef.current) return;

      const rect = hoverTargetRef.current.getBoundingClientRect();

      let x = rect.left - rect.width / 2;

      const y =
        rect.top +
        window.scrollY +
        rect.height / 2 -
        cardDimensions.height / 1.8;

      const screenWidth = window.innerWidth;

      // left clamp
      if (rect.left < 0) x = 8;

      // right clamp
      const overflow = rect.left + cardDimensions.width - screenWidth;
      if (overflow > 0) x = rect.left - overflow - 20;

      // final safety clamp
      x = Math.max(8, x);

      setPos({ x, y });
      setHovered(src);
    }, HOVER_DELAY);
  };

  const handleLeave = () => {
    isHoveringRef.current = false;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    setTimeout(() => {
      if (!isHoveringRef.current) {
        setHovered(null);
      }
    }, 100);
  };

  return {
    hovered,
    pos,
    isHoveringRef,
    handleEnter,
    handleLeave,
    setHovered,
    cardDimensions,
  };
};
