'use client';

import {
  HorizontalScrollable,
  RadioGroup,
  RadioGroupOption,
} from '@/components/ui';
import { useRef, useState } from 'react';
import { CommonOption } from '@/shared/types/common';
import { useGenerateImageStore } from '@/shared/store/generate-image';
import { GENERATE_CATEGORIES } from '@/shared/const/common';

type Category = CommonOption & {
  icon: React.ReactNode;
  tags: CommonOption[];
};

export const PresetTagsPicker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [currCategoty, setCurrCategoty] = useState<Category | null>(null);

  const setTags = useGenerateImageStore(({ setTags }) => setTags);

  const handleonScrollEnd = (scrollEnd: boolean) => {
    setScrollEnd(scrollEnd);
  };

  const onTagChange = (tag: RadioGroupOption) => {
    // timeout to suppress "while rendering diff comp" error

    setTimeout(() => {
      setTags(currCategoty!.value, tag.value);
    });
  };

  const onCategoryChange = (option: RadioGroupOption) => {
    const currCategory = GENERATE_CATEGORIES.find(
      (category) => category.value === option.value
    );

    setCurrCategoty(currCategory!);
  };

  return (
    <div>
      <HorizontalScrollable
        ref={scrollRef}
        isScrollEnd={handleonScrollEnd}
        wrapperClassName="mb-4"
      >
        <RadioGroup
          className="flex justify-start flex-row overflow-x-auto w-full no-scrollbar gap-0 flex-nowrap"
          options={GENERATE_CATEGORIES}
          optionClassName="rounded-none text-base font-bold"
          variant="outlined"
          onChange={onCategoryChange}
        />

        {!scrollEnd && (
          <div className="absolute right-10 bg-gradient-dark-gray w-10 h-full z-[1] pointer-events-none" />
        )}
      </HorizontalScrollable>

      {currCategoty && (
        <RadioGroup
          multiple
          className="gap-2"
          options={currCategoty.tags}
          onChange={onTagChange}
        />
      )}
    </div>
  );
};
