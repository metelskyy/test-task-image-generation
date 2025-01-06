'use client';

import { cn } from '@/shared/utils/cn';
import { Typography } from './typography';

type TextAreaVariant = 'primary' | 'secondary';

type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  showCounter?: boolean;
  maxLength?: number;
  variant?: TextAreaVariant;
  wrapperClassName?: string;
};

export const Textarea = ({
  showCounter = true,
  value,
  placeholder,
  className,
  maxLength,
  ref,
  variant = 'primary',
  wrapperClassName,
  rows,
  minLength,
  onChange,
}: TextAreaProps) => {
  const variantClassname = {
    primary: `
        bg-ui-white-4 w-full h-full border border-ui-violet-20 rounded-xl resize-none  
        focus:outline-none p-4 pb-8 focus:bg-ui-white-12 
        placeholder:text-ui-gray-500 
    `,
  };

  return (
    <div
      className={cn(
        'border border-ui-violet-20 p-2 rounded-2xl bg-transparent relative flex items-center',
        wrapperClassName
      )}
    >
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          `font-sfProDisplay font-normal text-sm placeholder:font-sfProDisplay placeholder:font-normal placeholder:text-sm
           placeholder:text-center placeholder:translate-y-10 placeholder:w-full no-scrollbar
          `,
          variantClassname[variant as keyof typeof variantClassname],
          className
        )}
        rows={rows}
        minLength={minLength}
        maxLength={maxLength}
      />
      {(showCounter || !maxLength) && (
        <div className="absolute bottom-5 right-5 text-sm text-white opacity-60">
          <Typography variant="sm-normal">
            {`${value?.toString().length || 0}/${maxLength}`}
          </Typography>
        </div>
      )}
    </div>
  );
};
