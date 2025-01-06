'use client';

import { cn } from '@/shared/utils/cn';
import React, { createContext, use, useState } from 'react';
import IconArrowTriangleFilled from '@/shared/assets/icons/arrow-triangle-filled.svg';

type CollapsibleProps = {
  children: React.ReactNode;
  defaultOpened?: boolean;
};

type CollapsibleTriggerProps = React.HTMLAttributes<HTMLButtonElement>;
type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement>;

const CollapsibleContext = createContext<{
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  opened: false,
  setOpened: () => {},
});

export const Collapsible = ({ children, defaultOpened }: CollapsibleProps) => {
  const [opened, setOpened] = useState(!!defaultOpened);

  return (
    <CollapsibleContext value={{ opened, setOpened }}>
      {children}
    </CollapsibleContext>
  );
};

export const CollapsibleContent = ({
  children,
  className,
  ...props
}: CollapsibleContentProps) => {
  const { opened } = use(CollapsibleContext);

  return (
    <div
      className={cn(
        'transition-all overflow-hidden',
        opened
          ? 'max-h-screen translate-y-0 opacity-100'
          : 'max-h-0 translate-y-[-100%] opacity-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CollapsibleTrigger = ({
  children,
  ...props
}: CollapsibleTriggerProps) => {
  const { setOpened, opened } = use(CollapsibleContext);

  const toggleOpen = () => {
    setOpened((prev) => !prev);
  };

  return (
    <button {...props} onClick={toggleOpen}>
      {children}
      <IconArrowTriangleFilled
        className={cn('transition-all', opened ? 'rotate-0' : 'rotate-180')}
      />
    </button>
  );
};
