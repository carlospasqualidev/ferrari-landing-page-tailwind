import Image from 'next/image';
import { svgs } from '@/assets';
import { ArrowButton, NewsCard } from '@/components';

const newsData = [
  {
    hours: '03',
    title: 'CHARLES AND CARLOS BAG THE SECOND',
    description:
      'When the Bahrain Grand Prix gets underway tomorrow at 6pm at the Sakhir circuit, Charles Leclerc and Carlos Sainz will be starting from the second row.',
  },
  {
    hours: 'O7 MAR',
    title: 'THE FERRARI 499P DEBUTS AT THE 1000 ROUND OF THE FIA WEC',
    description:
      'The countdown is over, and half a century of waiting is coming to an end. Ferrari is returning to the top class of the FIA World Endurance Championship, after fifty years since its last...',
  },
  {
    hours: 'O6 MAR',
    title: 'FERRARI 488 GTES AT SEBRING FOR THE FIRST ROUND OF THE FIA WEC',
    description:
      'When the Bahrain Grand Prix gets underway tomorrow at 6pm at the Sakhir circuit, Charles Leclerc and Carlos Sainz will be starting from the second row.',
  },
];

export function F1() {
  return (
    <div className="min-w-[320px] ">
      <div className="absolute p-6">
        <h4 className="font-bold text-[#FCFCFC] mb-1">
          CARLOS FOURTH, CHARLES RETIRES
        </h4>
        <p className="w-[270px] line-clamp-[2] text-[#FCFCFC] mb-2">
          Scuderia Ferrari heads home from the opening round of the season in
          Bahrain with 12 points, courtesy of a fourth place finish for Carlos
          Sainz, but also with the disappointment of Charles Leclerc’s
          retirement at two thirds distance, when he was a comfortable third.
        </p>

        <ArrowButton label="Scoprire" variant="white" />
      </div>
      <Image
        src={svgs.F1}
        alt=""
        sizes=""
        className="object-cover pointer-events-none"
      />
    </div>
  );
}

export function SF90() {
  return (
    <div className="w-full relative">
      <Image
        src={svgs.FerrariSF90}
        alt=""
        className="absolute -right-12 bottom-0 z-10 pointer-events-none"
      />

      <h1 className="text-[#ffffff] font-bold pointer-events-none text-[362px] absolute -top-[130px] -right-12">
        SF90
      </h1>

      <div className="bg-[#F6F6F6] flex flex-col p-8 h-full">
        <h3 className="text-black font-bold text-4xl z-30">
          SCOPRI LA SF90 STRADALE
        </h3>
        <div className="z-10">
          <ArrowButton label="Scoprire" />
        </div>
      </div>
    </div>
  );
}

export function News() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-4xl font-bold">News</h3>

      <div className="flex gap-8">
        <F1 />

        <SF90 />
      </div>

      <NewsCard newsData={newsData} />
    </div>
  );
}
