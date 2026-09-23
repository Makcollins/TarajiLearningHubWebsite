import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, MapPin } from "lucide-react";
import { PhotoSlider } from "../components/PhotosSlider";
import { Link } from "react-router";
import BgImage from "../components/BgImage";
import {galleryItems, cld} from "../data/data";
import { AdvancedImage } from "@cloudinary/react";

export function Gallery() {

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400 text-white py-20">
        <BgImage/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400">Gallery</h1>
          <p className="text-xl from-cyan-100 max-w-3xl">
            Moments from our programs, workshops, and community events showcasing the impact we're making together.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  /> */}
                  <AdvancedImage 
                  className="w-full h-full object-cover"
                  cldImg={cld.image(`${item.image}`)} 
                  alt={item.title}/>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="from-cyan-600" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="from-cyan-600" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-700 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-5">
          <h2 className="text-3xl font-bold text-white">
            More...
          </h2>
          <PhotoSlider />
        </div>
      </div>


      {/* Impact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every event brings us closer to our vision of a safer, healthier community. Join us in making a difference.
          </p>

          <Link
            to="/contact/"
            className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}
