import Image from 'next/image';
import { images } from '@/assets';

export const Home = () => {
  return (
    <div className="h-screen w-full">
      <Image
        src={images.FerrariImage1}
        alt=""
        sizes=""
        className="absolute w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};
