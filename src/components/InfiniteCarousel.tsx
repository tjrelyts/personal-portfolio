import { useEffect, useState, useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

const InfiniteCarousel = ({ 
  children, 
  speed = 30, 
  direction = 'left',
  pauseOnHover = true 
}: CarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slider = container.querySelector('.slider') as HTMLElement;
    if (!slider) return;

    // Clone the slider content
    const clone = slider.cloneNode(true) as HTMLElement;
    container.appendChild(clone);

    let position = 0;
    const moveSpeed = direction === 'left' ? -1 : 1;

    const step = () => {
      if (!isPaused) {
        position += moveSpeed;
        const sliderWidth = slider.offsetWidth;
        
        if (Math.abs(position) >= sliderWidth) {
          position = 0;
        }
        
        slider.style.transform = `translateX(${position}px)`;
        clone.style.transform = `translateX(${position}px)`;
      }
      requestAnimationFrame(step);
    };

    const animation = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [direction, speed, isPaused]);

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden relative w-full"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{ minHeight: '400px' }}
    >
      <div className="slider absolute flex gap-8">
        {children.map((child, index) => (
          <div 
            key={index}
            className="flex-shrink-0"
            style={{ 
              transition: `transform ${speed}ms linear`,
              minWidth: '300px'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
