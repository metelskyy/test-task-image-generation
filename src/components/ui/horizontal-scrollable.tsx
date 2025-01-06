'use client';

import { cn } from '@/shared/utils/cn';
import { useRef, useState } from 'react';
import IconArrowTriangle from '@/shared/assets/icons/arrow-triangle.svg';

const SCROLL_LEFT_DELTA = 70;

type HorizontalScrollableProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
  isScrollEnd?: (scrollEnd: boolean) => void;
  wrapperClassName?: string;
  withButtons?: boolean;
};

export const HorizontalScrollable = ({
  className,
  children,
  ref,
  wrapperClassName,
  isScrollEnd,
  withButtons = true,
  ...props
}: HorizontalScrollableProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isLeftDisabled, setisLeftDisabled] = useState(true);
  const [isRightDisabled, setisRightDisabled] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref?.current) return;
    const slider = ref.current.children[0] as HTMLDivElement;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !ref?.current) return;
    e.preventDefault();
    const slider = ref.current.children[0] as HTMLDivElement;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;

    if (
      Math.floor(slider.scrollWidth - slider.scrollLeft) <= slider.offsetWidth
    ) {
      isScrollEnd?.(true);
    } else {
      isScrollEnd?.(false);
    }
  };

  const scrollLeft = () => {
    if (!ref?.current) return;
    const slider = ref.current.children[0] as HTMLDivElement;

    if (slider.scrollLeft <= SCROLL_LEFT_DELTA) {
      slider.scrollLeft = 0;
      setisLeftDisabled(true);
      return;
    }

    setisRightDisabled(false);
    const newScrollLeft = slider.scrollLeft - SCROLL_LEFT_DELTA;
    slider.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!ref?.current) return;
    const slider = ref.current.children[0] as HTMLDivElement;

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      slider.scrollLeft = slider.scrollWidth - slider.offsetWidth;
      setisRightDisabled(true);
      return;
    }

    setisLeftDisabled(false);
    const newScrollLeft = slider.scrollLeft + SCROLL_LEFT_DELTA;
    slider.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'relative flex w-full h-10 rounded-lg border border-ui-violet-20 overflow-hidden',
        wrapperClassName
      )}
    >
      {withButtons && (
        <button
          onMouseDown={scrollLeft}
          className="w-10 flex items-center justify-center border-r border-r-ui-violet-20 shrink-0 text-white/50 hover:text-white hover:bg-ui-gray-700 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          disabled={isLeftDisabled}
        >
          <IconArrowTriangle className="rotate-180" />
        </button>
      )}

      <div
        ref={ref}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        className={cn(
          'w-full h-full overflow-x-scroll flex no-scrollbar',
          className
        )}
        {...props}
      >
        {children}
      </div>

      {withButtons && (
        <button
          onMouseDown={scrollRight}
          className="w-10 flex items-center justify-center border-l border-l-ui-violet-20 shrink-0 text-white/50 hover:text-white hover:bg-ui-gray-700 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          disabled={isRightDisabled}
        >
          <IconArrowTriangle />
        </button>
      )}
    </div>
  );
};
