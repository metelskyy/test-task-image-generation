'use client';

/* eslint-disable @next/next/no-img-element */

import { LoadingContainer, Typography } from '@/components/ui';
import { useGenerateImageStore } from '@/shared/store/generate-image';

export const DesktopPreview = () => {
  const imageUrl = useGenerateImageStore(({ imageUrl }) => imageUrl);
  const showPreview = useGenerateImageStore(({ showPreview }) => showPreview);
  const loading = useGenerateImageStore(({ loading }) => loading);

  return (
    <div
      className={
        'flex w-full rounded-[20px] bg-ui-gray-800 flex-1 items-center justify-center overflow-hidden relative'
      }
    >
      {showPreview ? (
        <img src={imageUrl} alt="" className="block max-h-full max-w-full" />
      ) : (
        <LoadingContainer loading={loading}>
          <Typography
            variant="xl-normal"
            className="text-ui-gray-500 whitespace-pre-line text-center"
          >
            {`Apply settings on the left and generate an \n image to see the result`}
          </Typography>
        </LoadingContainer>
      )}
    </div>
  );
};
