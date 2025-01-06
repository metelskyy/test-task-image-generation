'use client';

import { cn } from '@/shared/utils/cn';
import { useState } from 'react';

export interface RadioGroupOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

type RadioGroupProps = {
  defaultValue?: RadioGroupOption;
  defaultValueMultiple?: RadioGroupOption[];
  multiple?: boolean;
  className?: string;
  options: RadioGroupOption[];
  optionClassName?: string;
  variant?: 'outlined' | 'filled';
  onChange?: (option: RadioGroupOption) => void;
};
type RadioGroupItemProps = {
  variant?: 'outlined' | 'filled';
  value: string;
  label: string;
  onChange?: (option: RadioGroupOption) => void;
  icon?: React.ReactNode;
  className?: string;
  selected: boolean;
};

export const RadioGroup = ({
  defaultValue,
  multiple,
  defaultValueMultiple,
  className,
  options,
  variant = 'filled',
  optionClassName,
  onChange,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultValue);
  const [selectedMultiple, setSelectedMultiple] = useState(
    defaultValueMultiple || []
  );

  const handleChange = ({ label, value }: RadioGroupOption) => {
    if (!multiple) {
      onChange?.({ label, value });
      setSelected({ label, value });
      return;
    }

    if (selectedMultiple.map((item) => item.value).includes(value)) {
      setSelectedMultiple((prev) =>
        prev.filter((prevItem) => prevItem.value !== value)
      );
    } else {
      setSelectedMultiple((prev) => [...prev, { label, value }]);
    }
    onChange?.({ label, value });
  };

  return (
    <div className={cn('flex gap-1 flex-wrap', className)}>
      {options.map((option) => (
        <RadioGroupItem
          onChange={handleChange}
          label={option.label}
          value={option.value}
          key={option.value}
          icon={option?.icon}
          variant={variant}
          selected={
            selected?.value === option.value ||
            selectedMultiple.map((item) => item.value).includes(option.value)
          }
          className={optionClassName}
        />
      ))}
    </div>
  );
};

export const RadioGroupItem = ({
  variant = 'filled',
  value,
  label,
  icon,
  className,
  selected,
  onChange,
}: RadioGroupItemProps) => {
  const variantClassname = {
    filled: `
      bg-ui-white-8 border-2 border-ui-violet-20 rounded-2xl hover:bg-ui-gray-900 active:bg-ui-dark-rose
      text-sm font-normal 
      ${
        selected
          ? 'bg-gradient-rose border-0 hover:bg-gradient-light-rose active:bg-none'
          : ''
      }
    `,
    outlined: `
      bg-transparent border border-ui-violet-20 rounded-lg hover:bg-ui-gray-850 active:bg-ui-dark-rose
      text-base font-medium 
      ${
        selected
          ? 'bg-gradient-rose hover:bg-gradient-light-rose active:bg-none'
          : ''
      }
    `,
  };

  return (
    <button
      className={cn(
        'px-3 py-2 transition-colors cursor-pointer flex items-center justify-center gap-1',
        variantClassname[variant as keyof typeof variantClassname],
        className
      )}
      onClick={() => onChange?.({ label, value })}
    >
      {icon && (
        <div className={cn('text-white', selected && 'text-ui-yellow')}>
          {icon}
        </div>
      )}

      {label}
    </button>
  );
};
