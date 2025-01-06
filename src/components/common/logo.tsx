import React from 'react';
import logo from '@/shared/assets/images/logo.png';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div>
      <Image src={logo} width={101} height={36} alt="" />
    </div>
  );
};
