'use client';

import { useState } from 'react';

import { Typography } from '@/components/ui/typography';
import CloseIcon from '@/shared/assets/icons/add.svg';
import TimerIcon from '@/shared/assets/icons/timer.svg';
import { cn } from '@/shared/utils/cn';
import { useTimer } from '@/shared/hooks';

type TodaySpecialProps = {
  className?: string;
};

type TimerItemProps = {
  time: number;
  type: string;
  isLast?: boolean;
  disabled: boolean;
};

const TimerItem = ({
  time = 0,
  type = 'd',
  isLast = false,
  disabled,
}: TimerItemProps) => {
  return (
    <>
      <div
        className={cn(
          'p-1 flex items-center text-neutral-400 gap-0.5 bg-[#070518] rounded-md',
          disabled && 'bg-black/30'
        )}
      >
        <Typography
          component="span"
          variant="base-semibold"
          className={cn(
            'text-xs',
            disabled ? 'text-neutral-400' : 'text-ui-yellow'
          )}
        >
          {time.toString().padStart(2, '0')}
        </Typography>
        <Typography component="span" variant="xs-regular">
          {type}
        </Typography>
      </div>
      {!isLast && (
        <Typography
          variant="xs-regular"
          component="span"
          className="mx-[4px] text-gray-200"
        >
          :
        </Typography>
      )}
    </>
  );
};

export const TodaySpecial = ({ className }: TodaySpecialProps) => {
  const [isClose, setIsClose] = useState(false);

  const { days, hours, minutes, seconds } = useTimer();

  const handleCloseBtn = () => {
    setIsClose(true);
  };

  if (isClose) {
    return;
  }

  return (
    <div className={cn('flex', className)}>
      <div className="flex gap-4 bg-ui-violet-900 rounded-lg p-2">
        <div className="bg-gradient-violet-rose p-2 rounded-lg">
          <div className="flex gap-1 items-center align-center mb-2.5">
            <div className="pl-0.5">
              <TimerIcon />
            </div>
            <Typography variant="xl-bold" className="font-semibold">
              60%
            </Typography>
            <Typography variant="xs-medium" className="text-white/80">
              Today&apos;s special
            </Typography>
          </div>

          <div className="flex items-center min-w-[165px]">
            <TimerItem time={days} type="d" disabled={days === 0} />
            <TimerItem
              time={hours}
              type="h"
              disabled={days === 0 && hours === 0}
            />
            <TimerItem
              time={minutes}
              type="m"
              disabled={days === 0 && hours === 0 && minutes == 0}
            />
            <TimerItem
              time={seconds}
              isLast
              type="s"
              disabled={
                days === 0 && hours === 0 && minutes === 0 && seconds === 0
              }
            />
          </div>
        </div>
        <Typography variant="xs-regular" className="my-auto max-w-[115px]">
          Exclusive discount for VIP coins &nbsp;
          <Typography
            component="span"
            className="text-ui-yellow text-xs font-semibold"
          >
            up to 60%!
          </Typography>
          <Typography
            component="span"
            variant="xs-regular"
            className="inline-block"
          >
            Act now to not miss it!
          </Typography>
        </Typography>
        <div className="h-[20px] cursor-pointer" onClick={handleCloseBtn}>
          <CloseIcon className="rotate-45" color="color-white" />
        </div>
      </div>
    </div>
  );
};
