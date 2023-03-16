import { svgs } from '@/assets';
import Image from 'next/image';
import { ArrowButton } from '@/components';

export function Subjects() {
  return (
    <div>
      <div className="w-full h-[540px] bg-[#F6F6F6] relative">
        <Image
          src={svgs.FerrariRoma}
          alt=""
          className="absolute pointer-events-none z-10 -right-12  "
        />

        <h1 className="text-[#FCFCFC] text-[362px] absolute w-full pl-28 -top-32 pointer-events-none">
          ROMA
        </h1>
        <div className=" z-20 h-full absolute p-12 flex flex-col gap-4">
          <h3 className="text-4xl font-bold">ELEGANZA SENZA TEMPO</h3>

          <p className="text-base w-[450px]">
            La Ferrari Roma, nuova coupé 2+ a motore centrale-anteriore della
            Casa di Maranello.
          </p>

          <ArrowButton />
        </div>
      </div>
    </div>
  );
}
