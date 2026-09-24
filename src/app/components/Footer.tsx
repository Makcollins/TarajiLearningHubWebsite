import { Link } from "react-router";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cld } from "../data/data";
import { AdvancedImage, responsive } from '@cloudinary/react';
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export function Footer() {
  const logo = cld.image('taraji-3d');

  logo.delivery(format('auto')).delivery(quality('auto'));
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  <AdvancedImage cldImg={logo}
                  alt={`Taraji learning hub Logo`}
                  plugins={[
                    responsive({ steps: [20,40] })
                  ]}
                />
                </span>
              </div>
              <span className="font-bold text-lg">Taraji Learning Hub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Healing Minds. Restoring Hope. Building Resilient Futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Who we are
                </Link>
              </li>
              <li>
                <Link to="/our-services/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  What we do
                </Link>
              </li>
              <li>
                <Link to="/our-impact/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Kisii, Kenya</span>
              </li>
              <li>
                <a href="tel:+254745461993" className="flex items-center space-x-2 text-sm" aria-label="Call Us"><Phone size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">+254 799 815621</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/254745461993" className="flex items-center space-x-2 text-sm" aria-label="Contact us via WhatsApp">
                  <FaWhatsapp size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">+254 799 815621</span></a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <a href="mailto:info@tarajilearninghub.com" className="flex items-center space-x-2 text-sm" aria-label="email us">
                  <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">info@tarajilearninghub.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
              aria-label="Visit our instagram profile"
                href="https://www.instagram.com/tarajilearning"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
              aria-label="visit our linkedin page"
                href="https://www.linkedin.com/company/taraji-learning-hub/#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Taraji Learning Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
