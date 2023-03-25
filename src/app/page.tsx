import {
  Collezione,
  Home,
  Subjects,
  Articles,
  News,
  Contact,
  Video,
  Footer,
} from '@/templates';

export default function Root() {
  return (
    <div className="flex flex-col gap-28">
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="subjects" className="px-12 max-md:px-6">
        <Subjects />
      </section>
      <section id="collezione" className="px-12 max-md:px-6">
        <Collezione />
      </section>
      <section id="articles" className="px-12 max-md:px-0">
        <Articles />
      </section>
      <section id="video" className="px-12 max-md:px-6">
        <Video />
      </section>
      <section id="news" className="px-12 max-md:px-6">
        <News />
      </section>
      <section id="contact" className="px-12 max-md:px-6">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
