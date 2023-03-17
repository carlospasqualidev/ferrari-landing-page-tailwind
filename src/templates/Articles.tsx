import { svgs } from '@/assets';
import { ArticleCard } from '@/components';

const articlesData = [
  {
    image: svgs.FerrariMouseum,
    title: 'FERRARI MARANELLO MUSEUM',
    description:
      'The Ferrari Museums offer visitors a unique and engaging opportunity to relive the history of the Prancing Horse and its founder.',
  },
  {
    image: svgs.SnowAngels,
    title: 'SNOW ANGELS ',
    description:
      'The latest Corso Pilota Classiche offered a spectacular chance to drive some of the beautiful Prancing Horses in history on ‘The ice’ – the St Moritz international Concours of Elegance',
  },
  {
    image: svgs.SnowAngels,
    title: 'SNOW ANGELS ',
    description:
      'The latest Corso Pilota Classiche offered a spectacular chance to drive some of the beautiful Prancing Horses in history on ‘The ice’ – the St Moritz international Concours of Elegance',
  },
  {
    image: svgs.SnowAngels,
    title: 'SNOW ANGELS ',
    description:
      'The latest Corso Pilota Classiche offered a spectacular chance to drive some of the beautiful Prancing Horses in history on ‘The ice’ – the St Moritz international Concours of Elegance',
  },
];

export function Articles() {
  return (
    <div className="">
      <div className="flex gap-8  overflow-x-auto pb-4">
        {articlesData.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
}
