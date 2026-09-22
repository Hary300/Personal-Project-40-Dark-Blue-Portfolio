import type { NavId } from '@/data/headerData';
import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionId = NavId | 'home' | 'contact' | 'trusted';

interface SectionWrapperProps {
  sectionId: SectionId;
  className?: string;
  children: ReactNode;
  hasPy?: boolean;
  hasGap?: boolean;
}

const SectionWrapper = ({
  sectionId,
  hasPy = false,
  hasGap = false,
  className,
  children,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 sm:px-10 lg:px-15 xl:px-30',
        hasGap && 'flex flex-col gap-6 lg:gap-16',
        hasPy && 'py-10 lg:py-20',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
