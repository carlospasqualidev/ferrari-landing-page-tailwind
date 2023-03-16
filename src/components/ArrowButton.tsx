import Image from 'next/image';
import { svgs } from '@/assets';

export function ArrowButton() {
  return (
    <div className="flex gap-3 items-center relative">
      <p className="text-base text-black ">Scoprire </p>

      <div className="absolute pl-[72px] hover:pl-[80px] transition-all ease-in cursor-pointer">
        <Image src={svgs.Arrow} alt="" />
      </div>
    </div>
  );
}
