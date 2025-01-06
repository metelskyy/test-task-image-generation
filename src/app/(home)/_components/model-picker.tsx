'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  RadioGroup,
  Typography,
  type RadioGroupOption,
} from '@/components/ui';
import { useGenerateImageStore } from '@/shared/store/generate-image';

const MODELS = [
  { label: '2.5 D', value: '2.5D' },
  { label: '3D', value: '3D' },
  { label: 'Photo', value: 'photo' },
  { label: 'Cinematic', value: 'cinematic' },
  { label: 'Anime', value: 'anime' },
];

export const ModelPicker = () => {
  const setModel = useGenerateImageStore(({ setModel }) => setModel);

  const onModelChange = (option: RadioGroupOption) => {
    setModel(option.value);
  };

  return (
    <Collapsible defaultOpened>
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <Typography variant="xl-bold">Model</Typography>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <RadioGroup
          defaultValue={MODELS[1]}
          options={MODELS}
          onChange={onModelChange}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
