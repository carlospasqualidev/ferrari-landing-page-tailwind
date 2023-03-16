import { svgs } from '@/assets';
import Image from 'next/image';
export function Language() {
  return (
    <div className="flex gap-2">
      <Image src={svgs.Italy} alt="" />
      <p className="text-[#FCFCFC]">IT</p>
    </div>
  );
}
