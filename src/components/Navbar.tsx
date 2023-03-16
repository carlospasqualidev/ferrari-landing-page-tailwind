import Image from 'next/image';
import { svgs } from '@/assets';
import { Language } from './Languages';

export function Navbar() {
  return (
    <div className="flex h-16 justify-between px-12  py-7 items-center absolute w-full z-50">
      <p className="text-[#FCFCFC]">MENU</p>
      <Image src={svgs.FerrariLogo} alt="" />
      <Language />
    </div>
  );
}
