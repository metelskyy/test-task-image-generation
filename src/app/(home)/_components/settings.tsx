'use client';

import { TodaySpecial } from '@/components/common';
import { generateImage } from '@/shared/api/generate-image';
import { useGenerateImageStore } from '@/shared/store/generate-image';
import { cn } from '@/shared/utils/cn';
import { PresetTagsPicker } from './preset-tags-picker';
import { GenerateButton } from './generate-button';
import { ModelPicker } from './model-picker';
import { PromptTextarea } from './prompt-textarea';

export const Settings = () => {
  const loading = useGenerateImageStore(({ loading }) => loading);
  const showPreview = useGenerateImageStore(({ showPreview }) => showPreview);
  const setLoading = useGenerateImageStore(({ setLoading }) => setLoading);
  const setImageUrl = useGenerateImageStore(({ setImageUrl }) => setImageUrl);
  const setShowPreview = useGenerateImageStore(
    ({ setShowPreview }) => setShowPreview
  );

  const onGenerate = async () => {
    try {
      setLoading(true);
      const { model, prompt, tags } = useGenerateImageStore.getState();

      const res = await generateImage({ model, prompt, tags });
      setImageUrl(res);
      setShowPreview(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (showPreview) {
    return null;
  }

  return (
    <div className={cn('w-full flex flex-col justify-between p-4 h-full pb-5')}>
      {loading && (
        <div className="fixed z-20 w-full h-screen top-0 bottom-0 left-0" />
      )}
      <div className={cn('mb-7 flex flex-col gap-5')}>
        <ModelPicker />
        <TodaySpecial />
        <PromptTextarea />
        <PresetTagsPicker />
      </div>

      <GenerateButton loading={loading} onClick={onGenerate}>
        Generate
      </GenerateButton>
    </div>
  );
};
