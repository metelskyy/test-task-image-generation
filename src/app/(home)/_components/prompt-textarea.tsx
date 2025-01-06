'use client';

import { useRef, useState } from 'react';
import { Textarea } from '@/components/ui';
import { useGenerateImageStore } from '@/shared/store/generate-image';

const MAX_LENGTH = 250;

export const PromptTextarea = () => {
  const setPrompt = useGenerateImageStore(({ setPrompt }) => setPrompt);

  const [value, setValue] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setValue(e.target.value);
      setPrompt(e.target.value);
      return;
    }

    if (ref.current) {
      ref.current.value = value;
    }
  };

  return (
    <Textarea
      ref={ref}
      value={value}
      onChange={handleChange}
      maxLength={MAX_LENGTH}
      placeholder={`Enter your prompt or select tags and press \n “Generate”`}
      rows={5}
      minLength={5}
    />
  );
};
