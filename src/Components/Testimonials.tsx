import Image from "next/image"
import TestimonialsImage from "../../public/testimonials.png"

const Testimonials = () => {
  return (
    <div>
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden mt-20">
      {/* Background Image */}
      <Image
        src={TestimonialsImage}
        alt="Medical professionals background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-slate-800/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-24">
        {/* Quote Mark */}
        <div className="text-6xl md:text-7xl lg:text-8xl text-white/60 mb-6">"</div>

        {/* Quote Text */}
        <blockquote className="text-white text-center max-w-4xl mb-8">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
          </p>
        </blockquote>

        {/* Author */}
        <cite className="text-white text-lg md:text-xl font-medium not-italic mb-6">John Doe</cite>

        {/* Pagination Dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
