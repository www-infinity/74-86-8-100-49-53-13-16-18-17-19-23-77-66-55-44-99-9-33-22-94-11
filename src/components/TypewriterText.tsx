'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

export default function TypewriterText({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseMs = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentTarget = texts[textIndex];

    const tick = () => {
      if (isPausing) {
        timeoutRef.current = setTimeout(() => {
          setIsPausing(false);
          setIsDeleting(true);
        }, pauseMs);
        return;
      }

      if (!isDeleting) {
        if (displayText.length < currentTarget.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentTarget.slice(0, displayText.length + 1));
          }, speed);
        } else {
          setIsPausing(true);
        }
      } else {
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, deleteSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    tick();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, isPausing, textIndex, texts, speed, deleteSpeed, pauseMs]);

  return (
    <span aria-live="polite" aria-label={`Currently typing: ${texts[textIndex]}`}>
      {displayText}
      <span
        className="inline-block w-0.5 h-[1em] bg-[#00d4ff] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]"
        aria-hidden="true"
      />
    </span>
  );
}
