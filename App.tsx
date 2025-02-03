import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
type Album = {
  title: string;
  url: string;
  year: number;
  image?: string;
};
const images = [
  "images/covers/grouch1-cover.jpg",
  "images/covers/grouch2-cover.jpg",
  "images/covers/grouch3-cover.jpg",
  "images/covers/grouch4-cover.jpg",
  "images/covers/grouch5-cover.jpg",
  "images/covers/grouch6-cover.jpg",
  "images/covers/grouch7-cover.jpg",
  "images/covers/grouch8-cover.jpg",
  "images/covers/grouch8-cover.jpg",
  "images/covers/grouch10-cover.jpg",
  "images/covers/grouch11-cover.jpg",
  "images/covers/grouch12-cover.jpg",
];
const albums: Album[] = [
  {
    title: "Metamorph",
    url: "https://grouchnz.bandcamp.com/track/conswella-u-dirty-bitch-draft",
    year: 2023,
    image: "images/albums/techno-bitch.jpg",
  },
  {
    title: "Metamorph",
    url: "https://grouchnz.bandcamp.com/album/metamorph",
    year: 2023,
    image: "images/albums/metamorph.jpg",
  },
  {
    title: "Flow with the Tides",
    url: "https://grouchnz.bandcamp.com/track/flow-with-the-tides",
    year: 2023,
    image: "images/albums/metamorph.jpg",
  },
  {
    title: "Grouch in Dub (Metamorph)",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-metamorph",
    year: 2023,
    image: "images/albums/grouch-in-dub-metamorph.jpg",
  },
  {
    title: "Grouch in Dub & Dub Princess - Inocent",
    url: "https://grouchnz.bandcamp.com/track/grouch-in-dub-dub-princess-inocent",
    year: 2023,
    image: "images/albums/innocent.jpg",
  },
  {
    title: "Afrekea",
    url: "https://grouchnz.bandcamp.com/track/afrekea",
    year: 2022,
    image: "images/albums/Afrekea.jpg",
  },
  {
    title: "Apocalypse 2",
    url: "https://grouchnz.bandcamp.com/track/apocalypse-2",
    year: 2022,
    image: "images/albums/apocalypse.jpg",
  },
  {
    title: "Apocalypse",
    url: "https://grouchnz.bandcamp.com/track/apocalypse",
    year: 2022,
    image: "images/albums/apocalypse.jpg",
  },
  {
    title: "Grouch & Yestermorrow - Fractal",
    url: "https://grouchnz.bandcamp.com/track/grouch-yestermorrow-fractal",
    year: 2022,
    image: "images/albums/grouch-yestermorrow-fractal.jpg",
  },
  {
    title: "Soul Provider ft Timmy P",
    url: "https://grouchnz.bandcamp.com/track/soul-provider-ft-timmy-p",
    year: 2022,
    image: "images/albums/soul-provider-ft-timmy-p.jpg",
  },
  {
    title: "Rare Specimens",
    url: "https://grouchnz.bandcamp.com/album/rare-specimens",
    year: 2021,
    image: "images/albums/rare-specimens.jpg",
  },
  {
    title: "Future Relic",
    url: "https://grouchnz.bandcamp.com/album/future-relic",
    year: 2021,
    image: "images/albums/future-relic.jpg",
  },
  {
    title: "Initial Condition",
    url: "https://grouchnz.bandcamp.com/track/grouch-initial-condition-150bpm-master",
    year: 2021,
    image: "images/albums/grouch-initial-condition-150bpm-master.jpg",
  },
  {
    title: "Uber Bagusa - Evil Oil Man - Grouch - Dirty Hippy",
    url: "https://grouchnz.bandcamp.com/track/uber-bagusa-evil-oil-man-grouch-dirty-hippy",
    year: 2020,
    image: "images/albums/uber-bagusa-evil-oil-man-grouch-dirty-hippy.jpg",
  },
  {
    title: "Distance",
    url: "https://grouchnz.bandcamp.com/album/distance",
    year: 2020,
    image: "images/albums/distance.jpg",
  },
  {
    title: "GROUCH & GAUDI (ft Rick O'connor) - Aisha",
    url: "https://grouchnz.bandcamp.com/track/grouch-gaudi-ft-rick-oconnor-aisha",
    year: 2020,
    image: "images/albums/grouch-gaudi-ft-rick-oconnor-aisha.jpg",
  },
  {
    title: "Grouch in Dub",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-2",
    year: 2019,
    image: "images/albums/grouch-in-dub-2.jpg",
  },
  {
    title: "Quantumplation EP",
    url: "https://grouchnz.bandcamp.com/album/quantumplation-ep",
    year: 2019,
    image: "images/albums/quantumplation-ep.jpg",
  },
  {
    title: "Phenominiminal 2016",
    url: "https://grouchnz.bandcamp.com/album/phenominiminal-2016",
    year: 2016,
    image: "images/albums/Phenominiminal.jpg",
  },
  {
    title: "Corpus Callosum",
    url: "https://grouchnz.bandcamp.com/album/grouch-corpus-callosum",
    year: 2016,
    image: "images/albums/Grouch-Corpus Callosum.jpg",
  },
  {
    title: "Grouch in Dub Archive - Part 2",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-archive-dubby-glitchy-steppy-part-2",
    year: 2015,
    image: "images/albums/grouch-in-dub-archive-dubby-glitchy-steppy-part-2.jpg",
  },
  {
    title: "Grouch in Dub Archive - Part 1",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-archive-dubby-glitchy-steppy-part-1",
    year: 2015,
    image: "images/albums/grouch-in-dub-archive-dubby-glitchy-steppy-part-2.jpg",
  },
  {
    title: "Grouch Archive - Part 2",
    url: "https://grouchnz.bandcamp.com/album/grouch-archive-techy-proggy-breaksy-psychedelic-part-2",
    year: 2015,
    image: "images/albums/GrouchArchivePart 2.jpg",
  },
  {
    title: "Grouch Archive - Part 1",
    url: "https://grouchnz.bandcamp.com/album/grouch-archive-techy-proggy-breaksy-psychedelic-part-1",
    year: 2015,
    image: "images/albums/GrouchArchivePart 2.jpg",
  },
  {
    title: "Organik Mechanic Part 2",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-organik-mechanic-part-2-2015-edit",
    year: 2015,
    image: "images/albums/grouch-in-dub-organik-mechanic-part-2-2015-edit.jpg",
  },
  {
    title: "The Moof is Rooving",
    url: "https://grouchnz.bandcamp.com/album/the-moof-is-rooving",
    year: 2014,
    image: "images/albums/TheMoof-is-Rooving.jpg",
  },
  {
    title: "Further",
    url: "https://grouchnz.bandcamp.com/album/further",
    year: 2014,
    image: "images/albums/further.jpg",
  },
  {
    title: "Organik Mechanic Vol 1",
    url: "https://grouchnz.bandcamp.com/album/grouch-in-dub-organik-mechanic-vol-1",
    year: 2014,
    image: "images/albums/grouch-in-dub-organik-mechanic-vol-1.jpg",
  },
  {
    title: "Tin Foil Bowler",
    url: "https://grouchnz.bandcamp.com/track/tin-foil-bowler",
    year: 2013,
    image: "images/albums/tin-foil-bowler.jpg",
  },
  {
    title: "Spun Cycle V.A",
    url: "https://grouchnz.bandcamp.com/album/spun-cycle-v-a",
    year: 2013,
  },
  {
    title: "Soul Provider",
    url: "https://grouchnz.bandcamp.com/track/soul-provider",
    year: 2013,
  },
];
export function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-sm">
        <h1 className="text-3xl font-bold">GROUCHTOWN</h1>
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("music")}
            className="cursor-pointer hover:text-gray-300"
          >
            Music
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-gray-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="cursor-pointer hover:text-gray-300"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-gray-300"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("exclusive-content")}
            className="cursor-pointer hover:text-gray-300 text-purple-400"
          >
            Join
          </button>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <div
        className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          <button
            onClick={() => scrollToSection("music")}
            className="cursor-pointer hover:text-gray-300 w-full text-center py-3"
          >
            Music
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-gray-300 w-full text-center py-3"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="cursor-pointer hover:text-gray-300 w-full text-center py-3"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-gray-300 w-full text-center py-3"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("exclusive-content")}
            className="cursor-pointer hover:text-gray-300 text-purple-400 w-full text-center py-3 text-xl font-semibold"
          >
            Join
          </button>
        </div>
      </div>
      <section className="relative h-screen">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={img}
              alt="Artist"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>
      <div
        id="exclusive-content"
        className="bg-gradient-to-r from-purple-600 to-blue-600 pt-32 pb-16 md:pt-28 md:pb-12 px-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-xl font-bold mb-4 md:mb-2">
              Exclusive Content Available
            </h3>
            <p className="text-gray-100 text-lg md:text-base">
              Get access to exclusive tracks and behind-the-scenes content
            </p>
          </div>
          <a
            href="https://bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full md:w-auto"
          >
            Join on Bandcamp <ArrowRight size={20} />
          </a>
        </div>
      </div>
      <section id="music" className="py-24 px-8">
        <h2 className="text-4xl font-bold mb-12">Music</h2>
        <div className="relative group">
          <button
            onClick={() => {
              const container = document.getElementById("album-scroll");
              if (container) {
                container.scrollBy({
                  left: -300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              const container = document.getElementById("album-scroll");
              if (container) {
                container.scrollBy({
                  left: 300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          <div
            id="album-scroll"
            className="overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div className="grid grid-flow-col auto-cols-[280px] gap-6">
              {albums.map((album, i) => (
                <a
                  key={i}
                  href={album.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-4 rounded-lg transition-transform hover:scale-105 no-underline"
                >
                  <img
                    src={
                      album.image ||
                      `https://images.unsplash.com/photo-${1500000000000 + ((i % 5) + 1)}?ixlib=rb-4.0.3`
                    }
                    alt={album.title}
                    className="w-full aspect-square object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Released: {album.year}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-8 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <p className="max-w-2xl text-lg text-gray-300">
          GROUCHTOWN is an innovative artist pushing the boundaries of modern
          music. With a unique blend of electronic and acoustic elements, each
          track creates an immersive experience that takes listeners on a
          journey through sound and emotion.
        </p>
      </section>
      <section id="events" className="py-24 px-8">
        <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
        <div className="relative group">
          <button
            onClick={() => {
              const container = document.getElementById("events-scroll");
              if (container) {
                container.scrollBy({
                  left: -300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              const container = document.getElementById("events-scroll");
              if (container) {
                container.scrollBy({
                  left: 300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          <div
            id="events-scroll"
            className="overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div className="grid grid-flow-col auto-cols-[350px] gap-6">
              {Array.from(
                {
                  length: 10,
                },
                (_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i * 14); // Each event 2 weeks apart
                  return (
                    <div
                      key={i}
                      className="bg-zinc-900 p-6 rounded-lg transition-transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {
                              [
                                "London",
                                "Berlin",
                                "Paris",
                                "Amsterdam",
                                "Barcelona",
                              ][i % 5]
                            }{" "}
                            Show
                          </h3>
                          <p className="text-purple-400 font-medium">
                            {date.toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${i % 3 === 0 ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}
                        >
                          {i % 3 === 0 ? "Sold Out" : "Available"}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-300">
                        <p className="text-sm">
                          {
                            [
                              "O2 Arena",
                              "Berghain",
                              "Le Zenith",
                              "Paradiso",
                              "Razzmatazz",
                            ][i % 5]
                          }
                        </p>
                        <p className="text-sm">
                          Doors: {`${7 + (i % 2)}:00 PM`}
                        </p>
                      </div>
                      <button
                        className={`w-full mt-4 py-2 rounded font-medium transition-colors ${i % 3 === 0 ? "bg-zinc-800 text-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"}`}
                        disabled={i % 3 === 0}
                      >
                        {i % 3 === 0 ? "Sold Out" : "Get Tickets"}
                      </button>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 px-8">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="max-w-2xl text-lg text-gray-300 mb-8">
          For booking inquiries and collaborations, please reach out via email:
          <br />
          <a
            href="mailto:contact@grouch.com"
            className="text-white hover:text-gray-300"
          >
            contact@grouch.com
          </a>
        </p>
      </section>
      <footer className="bg-zinc-900 py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GROUCHTOWN</h3>
            <p className="text-gray-400">
              Creating unique soundscapes since 2020
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <button
                onClick={() => scrollToSection("music")}
                className="cursor-pointer hover:text-white text-left"
              >
                Music
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="cursor-pointer hover:text-white text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="cursor-pointer hover:text-white text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer hover:text-white text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("exclusive-content")}
                className="cursor-pointer hover:text-white text-left"
              >
                Join
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Join Our Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-400">
                Get updates on new releases and exclusive content
              </p>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
