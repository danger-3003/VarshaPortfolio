"use client"

import React, { useEffect, useRef, useState } from "react";

/**
 * TextScroller
 * - items: array of strings / React nodes
 * - activeIndex: number
 * - className: optional classes for the outer wrapper
 */
function TextScroller({ items = [], activeIndex = 0, className = "" }) {
  const itemRefs = useRef([]);
  const [heights, setHeights] = useState([]);
  const [offsets, setOffsets] = useState([]);
  const wrapperRef = useRef(null);

  // measure heights + offsets
  const measure = () => {
    const measured = itemRefs.current.map((el) => (el ? el.offsetHeight : 0));
    // fallback: ensure at least one element has a non-zero height
    const safeMeasured = measured.length ? measured : items.map(() => 0);
    const cumOffsets = safeMeasured.map((_, i) =>
      safeMeasured.slice(0, i).reduce((a, b) => a + b, 0)
    );
    setHeights(safeMeasured);
    setOffsets(cumOffsets);
  };

  // measure on mount, when items change, on resize, and on images load
  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // also measure after page load (images, fonts etc.)
    window.addEventListener("load", measure);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", measure);
    };
  }, [items]);

  // re-measure when images inside change size (basic approach: observe size changes)
  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    itemRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [items]);

  // set container height to active item's height to match visible area
  const activeHeight = heights[activeIndex] ?? "auto";
  const translateY = offsets[activeIndex] ? -offsets[activeIndex] : 0;

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${className}`}
      // transition height too so container resizes smoothly
      style={{
        height: typeof activeHeight === "number" ? `${activeHeight}px` : activeHeight,
        transition: "height 1000ms ease",
      }}
    >
      <div
        className="text-center"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: "transform 1000ms cubic-bezier(.22,.9,.36,1)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            // ensure block layout so offsetHeight is accurate
            className="w-full py-3"
            aria-hidden={i !== activeIndex}
          >
            {/* allow strings or nodes */}
            {typeof item === "string" ? <div>{item}</div> : item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextScroller;
