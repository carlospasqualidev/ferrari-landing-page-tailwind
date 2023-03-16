import Image from 'next/image';
import { svgs } from '@/assets';

export function News() {
  return (
    <div>
      <h3 className="text-4xl font-bold">News</h3>
      {/* <Image
        src={svgs.FerrariImage1}
        alt=""
        sizes=""
        className="absolute w-full h-full object-cover pointer-events-none"
      /> */}
    </div>
  );
}
