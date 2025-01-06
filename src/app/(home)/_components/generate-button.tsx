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
  const tagsLength = useGenerateImageStore(({ tags }) => tags.length);
  const category = useGenerateImageStore(({ category }) => category);

  const disabled = !category || tagsLength < 1;

  return (
    <Button
      fullWidth
      icon={<IconLightningFilled className="text-ui-gray-700" />}
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
