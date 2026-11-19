import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedChar({ char, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '' }) {
  const paragraphRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const { words, totalChars } = useMemo(() => {
    const rawWords = text.split(' ');
    let charCounter = 0;
    const mapped = rawWords.map((word) => {
      const chars = Array.from(word).map((char) => {
        const index = charCounter;
        charCounter += 1;
        return { char, index };
      });
      return { word, chars };
    });
    return { words: mapped, totalChars: Math.max(charCounter, 1) };
  }, [text]);

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {words.map((wordObj, wordIndex) => (
        <span
          key={`${wordObj.word}-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {wordObj.chars.map(({ char, index }) => {
            const start = index / totalChars;
            const end = Math.min(1, (index + 1) / totalChars);
            return (
              <AnimatedChar
                key={`${index}-${char}`}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
          {wordIndex < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </p>
  );
}
