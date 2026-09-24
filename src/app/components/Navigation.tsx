import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { cld } from "../data/data";
import { AdvancedImage,responsive } from '@cloudinary/react';
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const logo = cld.image('taraji-2b');

  logo.delivery(format('auto')).delivery(quality('auto'));

  const links = [
    { path: "/", label: "Home" },
    { path: "/about-us/", label: "Who We Are" },
    { path: "/our-services/", label: "What We Do" },
    { path: "/our-impact/", label: "Our Impact" },
  ];
  const more_menu = [
    { path: "/gallery/", label: "Gallery" },
    { path: "/contact/", label: "Contact Us" },
    // { path: "/blogs", label: "Blogs" },
  ];
  const phone_menu = links.concat(more_menu);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className=" bg-gradient-to-b md:bg-gradient-to-r from-black md:via-blue-900 to-blue-950 md:to-blue-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-white">
                <AdvancedImage cldImg={logo}
                  alt={`Taraji learning hub Logo`}
                  plugins={[
                    responsive({ steps: 100 })
                  ]}
                />
              </span>
            </div>
            <span className="font-bold text-xl text-white">
              Taraji Learning Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)
                  ? "text-yellow-400 font-bold border-b-2 border-yellow-300"
                  : "text-white hover:text-yellow-400"
                  } transition-colors pb-1`}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <div className={`flex items-center px-2 text-white hover:text-yellow-400`}
                onClick={() => setMoreOpen(true)} onMouseEnter={() => setMoreOpen(true)}>
                More <FaAngleDown /></div>
              <div className="absolute pb-2 @max-lg:right-0 bg-blue-700" onMouseLeave={() => setMoreOpen(false)}>
                {moreOpen && more_menu.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMoreOpen(false)}
                    className={`block p-2 py-2 ${isActive(link.path)
                      ? "text-yellow-400 bg-blue-800"
                      : "text-white hover:bg-blue-800"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-md text-white hover:bg-gray-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {phone_menu.map((link: any) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 ${isActive(link.path)
                  ? "text-yellow-400 font-bold bg-blue-950"
                  : "text-white hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
