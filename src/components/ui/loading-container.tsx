import { Spinner } from '.';
import { cn } from '@/shared/utils/cn';

type LoadingContainerProps = {
  loading: boolean;
  slot?: React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
};

export const LoadingContainer = ({
  loading,
  children,
  slot,
  containerClassName,
}: LoadingContainerProps) => {
  return loading
    ? slot || (
        <div
          className={cn(
            'w-full h-full bg-ui-gray-800 flex items-center justify-center',
            containerClassName
          )}
        >
          <Spinner />
        </div>
      )
    : children;
};
