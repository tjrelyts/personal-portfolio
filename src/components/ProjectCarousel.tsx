import { useState, TouchEvent } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  children: React.ReactNode[];
}

const ProjectCarousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div className="overflow-hidden">
        {/* Current slide with touch events */}
        <div 
          className="relative transition-all duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex">
            {children.map((child, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#B5FED9] text-black p-2 rounded-full hover:bg-[#90CAB1] transition-colors duration-300 z-10"
        aria-label="Previous project"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#B5FED9] text-black p-2 rounded-full hover:bg-[#90CAB1] transition-colors duration-300 z-10"
        aria-label="Next project"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[#B5FED9]' : 'bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
