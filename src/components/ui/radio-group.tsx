'use client';

import { cn } from '@/shared/utils/cn';
import { createContext, useContext, useState } from 'react';

export interface RadioGroupOption {
  value: string;
  label: string;
}

type CheckIsMultiple<T> = T extends RadioGroupOption
  ? RadioGroupOption
  : RadioGroupOption[];

type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: RadioGroupOption;
  defaultValueMultiple?: RadioGroupOption[];
  multiple?: boolean;
  className?: string;
};
type RadioGroupItemProps = {
  variant?: 'outlined' | 'filled';
  value: string;
  label: string;
  onChange?: <T>(option: CheckIsMultiple<T>) => void;
  icon?: React.ReactNode;
  className?: string;
};

const RadioGroupContext = createContext<{
  selected: RadioGroupOption | undefined;
  setSelected: React.Dispatch<
    React.SetStateAction<RadioGroupOption | undefined>
  >;
  selectedMultiple: RadioGroupOption[];
  setSelectedMultiple: React.Dispatch<React.SetStateAction<RadioGroupOption[]>>;
  multiple?: boolean;
}>({
  selected: undefined,
  setSelected: () => {},
  selectedMultiple: [],
  setSelectedMultiple: () => {},
  multiple: false,
});

export const RadioGroup = ({
  children,
  defaultValue,
  multiple,
  defaultValueMultiple,
  className,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultValue);
  const [selectedMultiple, setSelectedMultiple] = useState(
    defaultValueMultiple || []
  );

  return (
    <RadioGroupContext
      value={{
        selected,
        setSelected,
        selectedMultiple,
        setSelectedMultiple,
        multiple,
      }}
    >
      <div className={cn('flex gap-1 flex-wrap', className)}>{children}</div>
    </RadioGroupContext>
  );
};

export const RadioGroupItem = ({
  variant = 'filled',
  value,
  label,
  icon,
  className,
  onChange,
}: RadioGroupItemProps) => {
  const {
    selected,
    setSelected,
    selectedMultiple,
    setSelectedMultiple,
    multiple,
  } = useContext(RadioGroupContext);

  const isSelected =
    selected?.value === value ||
    selectedMultiple.map((item) => item.value).includes(value);

  const variantClassname = {
    filled: `
      bg-ui-white-8 border-2 border-ui-violet-20 rounded-2xl hover:bg-ui-gray-900 active:bg-ui-dark-rose
      text-sm font-normal 
      ${
        isSelected
          ? 'bg-gradient-rose border-0 hover:bg-gradient-light-rose active:bg-none'
          : ''
      }
    `,
    outlined: `
      bg-transparent border border-ui-violet-20 rounded-lg hover:bg-ui-gray-850 active:bg-ui-dark-rose
      text-base font-medium 
      ${
        isSelected
          ? 'bg-gradient-rose hover:bg-gradient-light-rose active:bg-none'
          : ''
      }
    `,
  };

  const handleChange = () => {
    if (!multiple) {
      onChange?.<RadioGroupOption>({ label, value });
      setSelected({ label, value });
      return;
    }

    setSelectedMultiple((prev) => {
      if (prev.map((item) => item.value).includes(value)) {
        onChange?.<RadioGroupOption[]>(
          prev.filter((prevItem) => prevItem.value !== value)
        );
        return prev.filter((prevItem) => prevItem.value !== value);
      }

      onChange?.<RadioGroupOption[]>([...prev, { label, value }]);
      return [...prev, { label, value }];
    });
  };

  return (
    <button
      className={cn(
        'px-3 py-2 transition-colors cursor-pointer flex items-center justify-center gap-1',
        variantClassname[variant as keyof typeof variantClassname],
        className
      )}
      onClick={handleChange}
    >
      <div className={cn('text-white', isSelected && 'text-ui-yellow')}>
        {icon}
      </div>

      {label}
    </button>
  );
};
