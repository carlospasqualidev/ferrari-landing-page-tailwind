import { ArrowButton } from '@/components';

interface INewsCard {
  newsData: {
    hours: string;
    title: string;
    description: string;
  }[];
}

export function NewsCard({ newsData }: INewsCard) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {newsData.map((news, i) => (
        <div key={news.title} className="min-w-[375px] flex flex-col gap-2">
          <h6 className="text-lg text-[#999999]">{news.hours} HOURS</h6>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <h6 className="text-lg font-bold truncate w-[360px]">
                {news.title}
              </h6>
              <p className="text-sm">{news.description}</p>
              <ArrowButton label="Scoprire" />
            </div>

            {newsData.length - 1 > i && (
              <hr className="w-[1px] h-full bg-[#999999]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
