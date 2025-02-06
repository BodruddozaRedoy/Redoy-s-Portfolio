"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: ["Next.js Developer", "MERN Stack Developer", "React Developer", "Full Stack Developer"],
    loop: 0, // Infinite loop
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <p className="" style={{fontSize:"30px"}}>
      {text}
      <Cursor cursorStyle="|" />
    </p>
  );
};

export default TypewriterComponent;
