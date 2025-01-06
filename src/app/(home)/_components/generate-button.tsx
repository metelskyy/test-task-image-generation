'use client';

import { Button, type ButtonProps } from '@/components/ui';
import IconLightningFilled from '@/shared/assets/icons/lightning-filled.svg';
import { useGenerateImageStore } from '@/shared/store/generate-image';

type GenerateButtonProps = ButtonProps;

export const GenerateButton = ({
  loading,
  onClick,
  children,
  ...props
}: GenerateButtonProps) => {
  const tags = useGenerateImageStore(({ tags }) => tags);

  return (
    <Button
      fullWidth
      icon={<IconLightningFilled className="text-ui-gray-700" />}
      loading={loading}
      onClick={onClick}
      disabled={!tags}
      {...props}
    >
      {children}
    </Button>
  );
};
