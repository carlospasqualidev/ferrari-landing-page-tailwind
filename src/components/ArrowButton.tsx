import Image from 'next/image';
import { svgs } from '@/assets';

interface IArrowButton {
  label: string;
  variant?: 'white';
}

export function ArrowButton({ variant, label }: IArrowButton) {
  return (
    <div className="flex gap-3 items-center relative">
      <p
        className={`${
          variant === 'white' ? 'text-white' : 'text-black'
        } text-base text-black`}
      >
        {label}
      </p>

      <div className="absolute pl-[72px] hover:pl-[80px] transition-all ease-in cursor-pointer">
        {variant === 'white' ? (
          <Image src={svgs.ArrowWhite} alt="" />
        ) : (
          <Image src={svgs.Arrow} alt="" />
        )}
      </div>
    </div>
  );
}
