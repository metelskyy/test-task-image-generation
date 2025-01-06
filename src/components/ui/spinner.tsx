import { cn } from '@/shared/utils/cn';

type SpinnerProps = {
  size?: number;
  className?: string;
};

export const Spinner = ({ size, className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-white border-r-transparent',
        size && `w-[${size}px] h-[${size}px]`,
        className
      )}
    />
  );
};
