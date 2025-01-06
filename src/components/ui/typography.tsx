import { cn } from '@/shared/utils/cn';

export type TypographyVariant =
  | 'xs-regular'
  | 'xs-medium'
  | 'xs-bold'
  | 'base-normal'
  | 'base-semibold'
  | 'base-bold'
  | 'sm-normal'
  | 'xl-bold'
  | 'xl-normal';

type ComponentVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  component?: ComponentVariants;
  children: React.ReactNode | string;
  variant?: TypographyVariant;
  className?: string;
  fontFamily?: 'font-inter' | 'font-sfProDisplay';
  opacity?: number;
};

export const Typography = ({
  component = 'p',
  children,
  variant = 'base-normal',
  className,
  fontFamily = 'font-sfProDisplay',
  opacity = 1,
  ...props
}: TypographyProps) => {
  const variantClassname = {
    'xs-regular': 'text-xs font-normal',
    'xs-medium': 'text-xs font-medium',
    'xs-bold': 'text-xs font-bold',
    'base-normal': 'text-base font-normal',
    'base-medium': 'text-base font-medium',
    'base-semibold': 'text-base font-semibold',
    'base-bold': 'text-base font-bold',
    'sm-normal': 'text-sm font-normal',
    'xl-bold': 'text-xl	font-bold',
    'xl-normal': 'text-xl font-normal',
  };

  const Comp = component;

  return (
    <Comp
      className={cn(
        variantClassname[variant as keyof typeof variantClassname],
        fontFamily,
        `opacity-${opacity * 100}`,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
