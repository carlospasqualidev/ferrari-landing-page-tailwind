import Image from 'next/image';
import { svgs } from '@/assets';

interface IArrowButton {
  label: string;
  width?: string;
  widthForAnim?: string;
  variant?: 'white';
  selected?: boolean;
  onClick?: () => void;
}

export function ArrowButton({
  selected,
  variant,
  label,
  width = 'w-[95px]',
  widthForAnim = 'hover:w-[105px]',
  onClick,
}: IArrowButton) {
  return (
    <div
      onClick={onClick}
      className={`${selected ? `${width}` : `${width} ${widthForAnim}`}
      flex justify-between gap-3 transition-all ease-in cursor-pointer`}
    >
      <p
        className={`${variant === 'white' ? 'text-white ' : 'text-black'} 
          ${selected && 'border-b-[1px]'}


        text-base`}
      >
        {label}
      </p>

      {variant === 'white' ? (
        <Image src={svgs.ArrowWhite} alt="" />
      ) : (
        <Image src={svgs.Arrow} alt="" />
      )}
    </div>
  );
}
