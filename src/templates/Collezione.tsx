import { svgs } from '@/assets';
import Image from 'next/image';

export function Collezione() {
  return (
    <div className="flex justify-center items-center w-full">
      <Image
        src={svgs.Collezione}
        alt=""
        className="h-[540px] object-cover w-full pointer-events-none "
      />

      <h3 className="text-4xl absolute w-[500px] text-center text-[#FCFCFC] font-bold">
        NUOVA COLLEZIONE PRIMAVERA-ESTANTE 2023
      </h3>
    </div>
  );
}
