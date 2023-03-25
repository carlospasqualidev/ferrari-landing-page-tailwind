import { images } from '@/assets';
import Image from 'next/image';
import { ArrowButton } from '@/components';

export function Subjects() {
  return (
    <div>
      <div className="w-full h-[540px] bg-[#F6F6F6] relative">
        <Image
          src={images.FerrariRoma}
          alt=""
          className="absolute pointer-events-none z-10 -right-12 max-md:hidden"
        />
        <Image
          src={images.FerrariRomaMobile}
          alt=""
          className="absolute pointer-events-none z-10 bottom-0 hidden max-md:flex -right-6"
        />

        <h1 className="text-[#FCFCFC] text-[362px] absolute w-full pl-26 -top-32 pointer-events-none font-bold max-md:hidden">
          ROMA
        </h1>
        <div className=" z-20 h-full absolute p-12 flex flex-col gap-4 max-md:p-8">
          <h3 className="text-4xl font-bold max-md:w-[250px]">
            ELEGANZA SENZA TEMPO
          </h3>

          <p className="text-base w-[450px] max-md:w-[250px]">
            La Ferrari Roma, nuova coupé 2+ a motore centrale-anteriore della
            Casa di Maranello.
          </p>

          <ArrowButton label="Scoprire" />
        </div>
      </div>
    </div>
  );
}
