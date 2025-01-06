'use client';

import { Header, TodaySpecial } from '@/components/common';
import { Button } from '@/components/ui';

import { cn } from '@/shared/utils/cn';
import IconArrowTriangle from '@/shared/assets/icons/arrow-triangle.svg';
import IconDownload from '@/shared/assets/icons/download.svg';
import { useState } from 'react';
import { useGenerateImageStore } from '@/shared/store/generate-image';
import {
  ModelPicker,
  PromptTextarea,
  CategoryPicker,
  ImagePreview,
  GenerateButton,
} from './_components';
import { generateImage } from '@/shared/api/generate-image';

export default function Home() {
  const loading = useGenerateImageStore(({ loading }) => loading);
  const imageUrl = useGenerateImageStore(({ imageUrl }) => imageUrl);
  const setLoading = useGenerateImageStore(({ setLoading }) => setLoading);
  const setImageUrl = useGenerateImageStore(({ setImageUrl }) => setImageUrl);
  const resetState = useGenerateImageStore(({ reset }) => reset);

  const [showPreview, setShowPreview] = useState(false);

  const onStartAgain = () => {
    resetState();
    setShowPreview(false);
  };

  const onGenerate = async () => {
    try {
      setLoading(true);
      const { category, model, prompt, tags } =
        useGenerateImageStore.getState();

      console.log({ category, model, prompt, tags });

      const res = await generateImage({ category, model, prompt, tags });
      setImageUrl(res);
      setShowPreview(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onDownloadImg = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated_img';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={cn('w-full flex min-h-screen overflow-hidden')}>
      {loading && <div className="fixed z-20 w-full h-screen" />}
      <div
        className={cn(
          'w-full md:max-w-[393px] flex flex-col relative z-[2] bg-transparent',
          `after:content-["*"] after:bg-ui-violet-300 after:blur-[80px] after:rounded-[50%] after:h-[106px]
         after:absolute after:z-0 after:-top-10 after:w-full md:after:w-[330px]
        `,
          `before:content-["*"] before:bg-ui-violet-300 before:blur-[80px] before:rounded-[50%] before:h-[106px]
         before:absolute before:z-0 before:-bottom-28 before:w-full md:before:w-[330px]
        `
        )}
      >
        <Header />

        {!showPreview ? (
          <div
            className={cn(
              'w-full flex flex-col justify-between p-4 h-full pb-5'
            )}
          >
            <div className={cn('mb-7 flex flex-col gap-5')}>
              <ModelPicker />
              <TodaySpecial />
              <PromptTextarea />
              <CategoryPicker />
            </div>

            <GenerateButton loading={loading} onClick={onGenerate}>
              Generate
            </GenerateButton>
          </div>
        ) : (
          <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
            <TodaySpecial
              className={cn(showPreview && 'hidden md:flex md:mt-4 ')}
            />
            <ImagePreview variant="mobile" src={imageUrl} />
            <div>
              <Button
                fullWidth
                className="mb-5"
                variant="secondary"
                icon={<IconDownload className="text-white" />}
                onClick={onDownloadImg}
              >
                Download
              </Button>
              <Button
                fullWidth
                icon={
                  <IconArrowTriangle className="text-ui-gray-700 rotate-180" />
                }
                onClick={onStartAgain}
              >
                Start again
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex p-5 w-full flex-1 max-h-screen">
        <ImagePreview
          src={imageUrl}
          variant="desktop"
          show={showPreview}
          loading={loading}
        />
      </div>
    </div>
  );
}
