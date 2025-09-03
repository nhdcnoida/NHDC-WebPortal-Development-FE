"use client";

import { useEffect, useState } from "react";

const sizes = ["text-xs","text-sm", "text-base", "text-lg", "text-xl"];
const defaultIndex = 1; // text-base

export default function TextSizeControls() {
  const [sizeIndex, setSizeIndex] = useState(defaultIndex);

  useEffect(() => {
    const stored = localStorage.getItem("font-size-index");
    if (stored) {
      const index = parseInt(stored, 10);
      if (sizes[index]) {
        setSizeIndex(index);
        updateHtmlClass(index);
      }
    } else {
      updateHtmlClass(defaultIndex); // ensure default applied
    }
  }, []);

  const updateHtmlClass = (index) => {
    const html = document.documentElement;
    sizes.forEach((cls) => html.classList.remove(cls));
    html.classList.add(sizes[index]);
  };

  const increase = () => {
    const newIndex = Math.min(sizeIndex + 1, sizes.length - 1);
    setSizeIndex(newIndex);
    updateHtmlClass(newIndex);
    localStorage.setItem("font-size-index", newIndex);
  };

  const decrease = () => {
    const newIndex = Math.max(sizeIndex - 1, 0);
    setSizeIndex(newIndex);
    updateHtmlClass(newIndex);
    localStorage.setItem("font-size-index", newIndex);
  };

  const reset = () => {
    setSizeIndex(defaultIndex);
    updateHtmlClass(defaultIndex);
    localStorage.setItem("font-size-index", defaultIndex);
  };

  return (
    <div className="flex gap-2 items-center text-sm p-2">
      <button onClick={decrease} className="border px-2 py-1 rounded">
        {'A−'}
      </button>
      <button onClick={reset} className="border px-2 py-1 rounded font-semibold">
        A
      </button>
      <button onClick={increase} className="border px-2 py-1 rounded">
       {'A+'}
      </button>
    </div>
  );
}
