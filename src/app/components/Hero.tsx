import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-cyan-700 via-cyan-600 to-indigo-600 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="./public/gallery/tarajipaints.JPG"
          alt="Students learning"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6">
            <TypeAnimation
            cursor={false}
              sequence={[
                'Healing Minds.',
                1000,
                'Healing Minds. Restoring Hope.', //  Continuing previous Text
                1000,
                'Healing Minds. Restoring Hope. Building Resilient Futures',
                5000,
                '',
              ]}
              // style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-400 mb-8">
            Taraji Learning Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-700 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              What we do
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-700 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
