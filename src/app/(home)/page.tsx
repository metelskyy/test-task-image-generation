import { Header } from '@/components/common';
import { cn } from '@/shared/utils/cn';
import { DesktopPreview, MobilePreview, Settings } from './_components';

export default function Home() {
  return (
    <div className={cn('w-full flex min-h-screen overflow-hidden')}>
      <div
        className={cn(
          'w-full md:max-w-[393px] flex flex-col relative z-[2] bg-transparent',
          `after:content-["*"] after:bg-ui-violet-300 after:blur-[80px] after:rounded-[50%] after:h-[106px]
         after:absolute after:z-0 after:-top-10 after:w-full md:after:w-[330px]
        `,
          `before:content-["*"] before:bg-ui-violet-300 before:blur-[80px] before:rounded-[50%] before:h-[106px]
         before:absolute before:z-0 before:-bottom-28 before:w-full md:before:w-[330px]
        `
        )}
      >
        <Header />
        <Settings />
        <MobilePreview />
      </div>

      <div className="hidden md:flex p-5 w-full flex-1 max-h-screen">
        <DesktopPreview />
      </div>
    </div>
  );
}
