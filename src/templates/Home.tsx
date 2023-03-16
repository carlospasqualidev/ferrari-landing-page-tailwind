import Image from 'next/image';
import { svgs } from '@/assets';

export const Home = () => {
  return (
    <div className="h-screen w-full">
      <Image
        src={svgs.FerrariImage1}
        alt=""
        sizes=""
        className="absolute w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};
