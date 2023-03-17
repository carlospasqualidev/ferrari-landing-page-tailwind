import { Collezione, Home, Subjects, Articles, News } from '@/templates';
import { Video } from '@/templates/Video';

export default function Root() {
  return (
    <div className="flex flex-col gap-28">
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="subjects" className="px-12">
        <Subjects />
      </section>
      <section id="collezione" className="px-12">
        <Collezione />
      </section>
      <section id="articles" className="px-12">
        <Articles />
      </section>
      <section id="video" className="px-12">
        <Video />
      </section>
      <section id="news" className="px-12">
        <News />
      </section>
      <section id="news" className="px-12">
        <News />
      </section>
    </div>
  );
}
