import { Logo } from '@/components/common';
import IconStar from '@/shared/assets/icons/star.svg';
import IconDiamond from '@/shared/assets/icons/diamond.svg';
import IconAdd from '@/shared/assets/icons/add.svg';
import { Typography } from '../ui';
import { cn } from '@/shared/utils/cn';

type HeaderProps = React.HTMLAttributes<HTMLHeadElement>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'bg-ui-gray-800 flex items-center justify-between w-full p-4 relative z-[2]',
        className
      )}
      {...props}
    >
      <Logo />

      <div className="flex items-center gap-2 justify-center">
        <div className="flex items-center gap-1 px-2 py-1 border border-ui-gray-500 rounded-lg bg-ui-gray-700">
          <IconStar width={20} height={20} className="text-ui-yellow" />
          <Typography variant="base-semibold" fontFamily="font-inter">
            120
          </Typography>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 border border-ui-gray-500 rounded-lg bg-ui-gray-700">
          <IconDiamond width={20} height={20} className="text-ui-yellow" />
          <Typography variant="base-semibold" fontFamily="font-inter">
            330
          </Typography>
        </div>

        <div className="cursor-pointer rounded-full border border-ui-gray-500 bg-ui-gray-700 w-8 h-8 flex items-center justify-center">
          <IconAdd className="text-ui-rose" />
        </div>
      </div>
    </header>
  );
};
