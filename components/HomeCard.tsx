'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  
  handleClick?: () => void;
}

const HomeCard = ({ className, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-hcard1 bg-cover px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    > 
    </section>
  );
};

export default HomeCard;