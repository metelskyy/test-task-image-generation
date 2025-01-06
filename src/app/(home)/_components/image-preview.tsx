/* eslint-disable @next/next/no-img-element */
import { cn } from '@/shared/utils/cn';
import { Spinner, Typography } from '@/components/ui';

type ImagePreviewVariant = 'mobile' | 'desktop';

type ImagePreviewProps = {
  className?: string;
  variant: ImagePreviewVariant;
  show?: boolean;
  src: string | undefined;
  loading?: boolean;
};

type ImagePreviewVariantProps = React.HTMLAttributes<HTMLDivElement> & {
  show?: boolean;
  src: string | undefined;
  loading?: boolean;
};

export const ImagePreview = ({
  className,
  variant,
  show,
  src,
  loading,
}: ImagePreviewProps) => {
  return {
    mobile: <ImagePreviewMobile className={className} src={src} />,
    desktop: (
      <ImagePreviewDesktop
        className={className}
        show={show}
        src={src}
        loading={loading}
      />
    ),
  }[variant];
};

export const ImagePreviewMobile = ({
  className,
  src,
  ...props
}: ImagePreviewVariantProps) => {
  return (
    <div
      className={cn('w-full my-7 z-10 flex-1 md:hidden ', className)}
      {...props}
    >
      <img src={src} alt="" className=" rounded-xl w-full" />
    </div>
  );
};

export const ImagePreviewDesktop = ({
  className,
  show,
  src,
  loading,
  ...props
}: ImagePreviewVariantProps) => {
  return (
    <div
      className={cn(
        'flex w-full rounded-[20px] bg-ui-gray-800 flex-1 items-center justify-center overflow-hidden relative',
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute w-full h-full z-10 bg-ui-gray-800 flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {show ? (
        <img src={src} alt="" className="block max-h-full max-w-full" />
      ) : (
        <Typography
          variant="xl-normal"
          className="text-ui-gray-500 whitespace-pre-line text-center"
        >
          {`Apply settings on the left and generate an \n image to see the result`}
        </Typography>
      )}
    </div>
  );
};
