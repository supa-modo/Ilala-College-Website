// src/components/ui/Carousel.jsx
import React, { useState } from "react";

export const Carousel = ({ children, className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return <div className={`relative ${className}`}>{children}</div>;
};

export const CarouselContent = ({ children, className = "" }) => (
  <div className={`flex overflow-hidden ${className}`}>{children}</div>
);

export const CarouselItem = ({ children, className = "" }) => (
  <div className={`flex-shrink-0 w-full ${className}`}>{children}</div>
);

export const CarouselNext = ({ onClick, className = "" }) => (
  <button
    className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${className}`}
    onClick={onClick}
  >
    Next
  </button>
);

export const CarouselPrevious = ({ onClick, className = "" }) => (
  <button
    className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${className}`}
    onClick={onClick}
  >
    Previous
  </button>
);
