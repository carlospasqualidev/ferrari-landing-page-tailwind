import {
  Collezione,
  Home,
  Subjects,
  Articles,
  News,
  Contact,
  Video,
} from '@/templates';

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
      <section id="contact" className="px-12">
        <Contact />
      </section>
      <section id="contact" className="px-12">
        <Contact />
      </section>
    </div>
  );
}
