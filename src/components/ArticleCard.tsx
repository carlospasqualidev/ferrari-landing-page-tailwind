import Image from 'next/image';
import { ArrowButton } from './ArrowButton';

interface IArticle {
  image: any;
  title: string;
  description: string;
}

export function ArticleCard({ image, title, description }: IArticle) {
  return (
    <div className="flex flex-col w-[575px] min-w-[400px] max-md:min-w-full px-6">
      <Image
        src={image}
        alt=""
        className="h-[260px] object-contain mb-5 pointer-events-none bg-white"
      />

      <h4 className="text-2xl mb-2 font-bold">{title}</h4>
      <p className="text-sm h-[50px]">{description}</p>

      <div className="mt-20">
        <ArrowButton label="Scoprire" />
      </div>
    </div>
  );
}
