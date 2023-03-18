import Image from 'next/image';
import { svgs } from '@/assets';
import { ArrowButton } from '@/components';

export interface ICheckbox {
  label: string;
}

function Checkbox({ label }: ICheckbox) {
  return (
    <div className="flex items-center gap-3">
      <input type="checkbox" className="w-5 h-5" />
      <p className="text-sm">{label}</p>
    </div>
  );
}

export const Contact = () => {
  return (
    <div className="w-full bg-[#F6F6F6] h-[540px] flex flex-col relative p-8 items-end gap-16">
      <Image
        src={svgs.FerrariImage2}
        alt=""
        sizes=""
        className=" -left-[48px] absolute pointer-events-none bottom-14"
      />

      <h3 className="text-4xl font-bold w-full flex justify-end ">
        VUOI RICEVERE LE NEWSLETTER FERRARI?
      </h3>

      <div className="flex flex-col w-1/2 gap-9">
        <h6 className="text-[#999999]">EMAIL</h6>
        <input className="w-full bg-transparent border-b-2 border-solid border-[#2B2B2B] outline-none" />

        <h6 className="text-lg font-bold w-full flex">
          VUOI RICEVERE LE NEWSLETTER FERRARI?
        </h6>

        <div className="grid grid-cols-2 gap-6">
          <Checkbox label="GT & SPORT CARS" />
          <Checkbox label="FORMULA 1" />
          <Checkbox label="ESPORTS" />
          <Checkbox label="CORSE CLIENTI & COMPETIZIONI GT" />
        </div>
        <ArrowButton label="Inscrivit" />
      </div>
    </div>
  );
};
