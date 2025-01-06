'use client';

/* eslint-disable @next/next/no-img-element */

import { TodaySpecial } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/shared/utils/cn';
import IconArrowTriangle from '@/shared/assets/icons/arrow-triangle.svg';
import IconDownload from '@/shared/assets/icons/download.svg';
import { useGenerateImageStore } from '@/shared/store/generate-image';

export const MobilePreview = () => {
  const showPreview = useGenerateImageStore(({ showPreview }) => showPreview);
  const imageUrl = useGenerateImageStore(({ imageUrl }) => imageUrl);
  const setShowPreview = useGenerateImageStore(
    ({ setShowPreview }) => setShowPreview
  );
  const resetState = useGenerateImageStore(({ reset }) => reset);

  const onStartAgain = () => {
    resetState();
    setShowPreview(false);
  };

  const onDownloadImg = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated_img';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!showPreview) {
    return null;
  }

  return (
    <div className="px-4 pb-4 flex-1 flex flex-col justify-between md:pt-4">
      <TodaySpecial className={cn(showPreview && 'hidden md:flex')} />
      <div className={'w-full my-7 z-10 flex-1 md:hidden '}>
        <img src={imageUrl} alt="" className=" rounded-xl w-full" />
      </div>
      <div className="h-full flex flex-col justify-end">
        <Button
          fullWidth
          className="mb-5"
          variant="secondary"
          icon={<IconDownload className="text-white" />}
          onClick={onDownloadImg}
          disabled={!imageUrl}
        >
          Download
        </Button>
        <Button
          fullWidth
          icon={<IconArrowTriangle className="text-ui-gray-700 rotate-180" />}
          onClick={onStartAgain}
        >
          Start again
        </Button>
      </div>
    </div>
  );
};
