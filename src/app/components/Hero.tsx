import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400 text-white">
      <div className="fixed top-0 inset-0 overflow-hidden">
        <ImageWithFallback
          src="/pages/lk.JPG"
          alt="image of a man drawing on a paper"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <p className="text-xl sm:text-2xl text-yellow-400 mb-8 animate-pulse">
              Taraji Learning Hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/our-services/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-700 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                What we do
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-700 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-visible mx-auto max-w-96 heroImg">
              <ImageWithFallback
                src="infographics/healing-art.png"
                alt="art illustration of an african woman getting healing from stress by painting."
                className="w-full h-full object-cover"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
