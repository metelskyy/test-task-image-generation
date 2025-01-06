import { cn } from '@/shared/utils/cn';

import RefreshIcon from '@/shared/assets/icons/refresh.svg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({
  children,
  icon,
  variant = 'primary',
  fullWidth = false,
  disabled,
  loading,
  className,
  ...props
}: ButtonProps) => {
  const variantClassName = {
    base: `py-2.5 px-5  flex justify-center items-center gap-2 font-semibold text-base font-inter border rounded-lg shadow-sm transition-all
      ${!loading && !disabled && 'focus:ring-4 focus:ring-[#f4ebff]'}    
      ${fullWidth && 'w-full'}
      ${loading && 'cursor-default bg-none'}
      ${disabled && 'bg-none bg-ui-gray-600'}
    `,
    primary: `border-ui-yellow bg-gradient-yellow text-ui-gray-700 
      ${loading && 'bg-ui-dark-yellow'}
      ${
        !disabled &&
        !loading &&
        'active:bg-gradient-yellow-active hover:bg-gradient-yellow-hover'
      }
      ${disabled && 'border-ui-gray-600'}
    `,
    secondary: `bg-ui-gray-900 text-white border-white
      ${!disabled && !loading && 'hover:bg-ui-gray-700'}
      ${loading && 'border-ui-gray-400'}
      ${disabled && 'text-ui-gray-700 border-ui-gray-400'}
    `,
  };

  return (
    <button
      className={cn(
        variantClassName[variant],
        variantClassName.base,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {loading ? <RefreshIcon /> : icon}
      {loading ? 'Loading ...' : children}
    </button>
  );
};
