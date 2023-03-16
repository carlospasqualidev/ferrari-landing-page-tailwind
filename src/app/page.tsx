import { Collezione, Home, Subjects, Articles, News } from '@/templates';

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
      <section id="articles" className="px-12">
        <News />
      </section>
    </div>
  );
}
