import { useState, useEffect, useRef, ReactNode } from "react";

interface DragCarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  className?: string;
  itemsPerView?: number;
}

const DragCarousel = ({ 
  children, 
  autoPlay = false, 
  autoPlayInterval = 5000, 
  showDots = true,
  className = "",
  itemsPerView = 1
}: DragCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const totalItems = children.length;
  const totalPages = itemsPerView > 0 ? Math.max(1, Math.ceil(totalItems / itemsPerView)) : 1;
  const maxPageIndex = totalPages - 1;

  useEffect(() => {
    if (!autoPlay || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxPageIndex + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isDragging, maxPageIndex]);

  useEffect(() => {
    // Base translate is computed from the first item of the current page.
    // Snap the last page to the end so we don't show empty space.
    const lastStartItemIndex = Math.max(0, totalItems - itemsPerView);
    const firstItemOfPage = Math.min(currentIndex * itemsPerView, lastStartItemIndex);
    const stepPercentPerItem = totalItems > 0 ? (100 / totalItems) : 0;
    const newTranslateX = -firstItemOfPage * stepPercentPerItem;
    setTranslateX(newTranslateX);
  }, [currentIndex, totalItems, itemsPerView]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    e.preventDefault();
    containerRef.current.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setStartX(e.clientX);
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;

    const now = performance.now();
    const diff = e.clientX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = containerWidth * (totalItems / itemsPerView);
    let dragPercentOfTrack = trackWidth > 0 ? (diff / trackWidth) * 100 : 0;

    // Edge resistance at bounds
    const atStart = currentIndex === 0;
    const atEnd = currentIndex === maxPageIndex;
    if ((atStart && dragPercentOfTrack > 0) || (atEnd && dragPercentOfTrack < 0)) {
      dragPercentOfTrack *= 0.35;
    }

    setDragOffset(dragPercentOfTrack);
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    if (containerRef.current) {
      try { containerRef.current.releasePointerCapture(e.pointerId); } catch {}
    }

    // Velocity-based flick
    const now = performance.now();
    const deltaX = e.clientX - lastXRef.current;
    const deltaT = Math.max(1, now - lastTimeRef.current);
    const velocity = deltaX / deltaT; // px/ms

    const stepPercentPerItem = totalItems > 0 ? (100 / totalItems) : 0;
    const stepPercentPerPage = stepPercentPerItem * itemsPerView;
    const threshold = stepPercentPerPage * 0.35;
    const flickVelocity = 0.5; // px/ms

    let nextIndex = currentIndex;
    if (Math.abs(velocity) > flickVelocity) {
      nextIndex = velocity > 0 ? Math.max(0, currentIndex - 1) : Math.min(maxPageIndex, currentIndex + 1);
    } else if (Math.abs(dragOffset) > threshold) {
      nextIndex = dragOffset > 0 ? Math.max(0, currentIndex - 1) : Math.min(maxPageIndex, currentIndex + 1);
    }

    setCurrentIndex(nextIndex);
    setIsDragging(false);
    setDragOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxPageIndex));
  };

  const currentTranslateX = translateX + dragOffset;

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef}
        className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        <div 
          className={`flex transition-transform duration-500 ease-in-out ${isDragging ? 'transition-none' : ''}`}
          style={{ 
            transform: `translateX(${currentTranslateX}%)`,
            width: `${(totalItems / itemsPerView) * 100}%`
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${100 / totalItems}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && totalItems > itemsPerView && (
        <div className="flex items-center justify-center space-x-2 mt-6">
          {Array.from({ length: maxPageIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DragCarousel;