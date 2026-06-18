"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BinaryBackground() {
  const [stream, setStream] = useState<string[]>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 40 }, () =>
      Math.random() > 0.5 ? "1" : "0"
    );
    setStream(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.03] select-none z-0 overflow-hidden font-mono text-xs tracking-widest leading-none">
      <div className="grid grid-cols-8 gap-4 p-4 w-full h-full">
        {stream.map((char, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 20 }, () => char).join(" ")}
          </motion.div>
        ))}
      </div>
    </div>
  );
}