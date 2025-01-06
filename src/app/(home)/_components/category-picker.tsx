'use client';

import {
  HorizontalScrollable,
  RadioGroup,
  RadioGroupItem,
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

export const CategoryPicker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [currCategoty, setCurrCategoty] = useState<Category | null>(null);

  const setTags = useGenerateImageStore(({ setTags }) => setTags);
  const setCategory = useGenerateImageStore(({ setCategory }) => setCategory);

  const handleonScrollEnd = (scrollEnd: boolean) => {
    setScrollEnd(scrollEnd);
  };

  const onTagChange = (tags: RadioGroupOption[]) => {
    // timeout to suppress "while rendering diff comp" error
    setTimeout(() => {
      setTags(tags.map((tag) => tag.value));
    });
  };

  const onCategoryChange = (option: RadioGroupOption) => {
    const currCategory = GENERATE_CATEGORIES.find(
      (category) => category.value === option.value
    );

    setCurrCategoty(currCategory!);
    setCategory(currCategory!.value);
  };

  return (
    <div>
      <HorizontalScrollable
        ref={scrollRef}
        isScrollEnd={handleonScrollEnd}
        wrapperClassName="mb-4"
      >
        <RadioGroup className="flex justify-start flex-row overflow-x-auto w-full no-scrollbar gap-0 flex-nowrap">
          {GENERATE_CATEGORIES.map((category) => (
            <RadioGroupItem
              onChange={(option) =>
                onCategoryChange(option as RadioGroupOption)
              }
              label={category.label}
              value={category.value}
              key={category.value}
              icon={category.icon}
              variant="outlined"
              className="rounded-none text-base font-bold"
            />
          ))}
        </RadioGroup>

        {!scrollEnd && (
          <div className="absolute right-10 bg-gradient-dark-gray w-10 h-full z-[1] pointer-events-none" />
        )}
      </HorizontalScrollable>

      {currCategoty && (
        <RadioGroup multiple className="gap-2">
          {currCategoty.tags.map((tag) => (
            <RadioGroupItem
              onChange={(tags) => onTagChange(tags as RadioGroupOption[])}
              label={tag.label}
              value={tag.value}
              key={tag.value}
              variant="outlined"
            />
          ))}
        </RadioGroup>
      )}
    </div>
  );
};
