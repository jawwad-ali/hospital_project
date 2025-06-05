"use client";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Fancybox from "./FancyBox";

const galleryImages = [
  {
    id: 1,
    src: "/slider_one.png",
    alt: "Hospital patient room with blue curtains",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    src: "/slider_one.png",
    alt: "Modern hospital corridor",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    src: "/slider_two.png",
    alt: "Hospital treatment room",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    src: "/slider_two.png",
    alt: "Patient ward with multiple beds",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    src: "/slider_three.png",
    alt: "Hospital room with medical equipment",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    src: "/slider_four.png",
    alt: "Hospital reception area",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    src: "/slider_five.png",
    alt: "Hospital waiting room with black seating",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    src: "/slider_six.png",
    alt: "Modern hospital hallway",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    src: "/slider_four.png",
    alt: "Hospital consultation room",
    gridSpan: "md:col-span-1     md:row-span-1",
  },
  {
    id: 10,
    src: "/slider_seven.png",
    alt: "Medical examination room",
    gridSpan: "md:col-span- md:row-span-2",
  },
  {
    id: 11,
    src: "/slider_eight.png",
    alt: "Hospital lobby area",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    src: "/slider_nine.png",
    alt: "Private patient room",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 13,
    src: "/slider_ten.png",
    alt: "Hospital corridor with seating",
    gridSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 14,
    src: "/slider_eleven.png",
    alt: "Modern hospital facility",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 15,
    src: "/slider_twelve.png",
    alt: "Hospital lounge area",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 16,
    src: "/slider_thirteen.png",
    alt: "Hospital lounge area",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 17,
    src: "/slider_fourteen.png",
    alt: "Hospital lounge area",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
];

const HospitalGallery = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Hospital Gallery
          </h2>
        </div>

        {/* Mobile Gallery - Single Column */}
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="block lg:hidden">
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <a
                      href={image.src}
                      data-fancybox="gallery"
                      data-caption={image.alt}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={100}
                        height={100}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fancybox>

        {/* Desktop Gallery - Masonry Grid */}
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {/* Desktop Gallery - Masonry Grid */}
          <div className="hidden lg:block mx-12">
            <div className="grid grid-cols-6 grid-rows-8 gap-4 h-[800px]">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className={`group cursor-pointer ${image.gridSpan}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] h-full">
                    <a
                      href={image.src as any}
                      data-fancybox="gallery"
                      data-caption={image.alt}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        width={500}
                        height={500}
                      />
                    </a>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fancybox>
      </div>
    </section>
  );
};

export default HospitalGallery;
