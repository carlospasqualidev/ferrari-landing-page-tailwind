import { svgs } from '@/assets';
import Image from 'next/image';

interface IArrowButton {
  onClick: () => void;
}

export function RoundButton({ onClick }: IArrowButton) {
  return (
    <button
      onClick={onClick}
      className="h-fit w-fit hover:scale-110 transition-all ease-in"
    >
      <Image src={svgs.RoundButton} alt="" />
    </button>
  );
}
