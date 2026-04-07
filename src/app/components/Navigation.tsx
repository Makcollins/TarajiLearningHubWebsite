import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "Who We Are" },
    { path: "/our-services", label: "What We Do" },
    { path: "/our-impact", label: "Our Impact" },
  ];
  const more_menu = [
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];
  const phone_menu = links.concat(more_menu);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-yellow-600 rounded-lg flex items-center justify-center"> */}
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-xl"><img src="https://i.ibb.co/ymP93ng5/taraji-3d.png" alt="" /></span>
            </div>
            <span className="font-bold text-xl text-gray-900">
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
                  ? "text-cyan-600 border-b-2 border-cyan-600"
                  : "text-gray-700 hover:text-cyan-600"
                  } transition-colors pb-1`}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <div className={`flex items-center px-2 text-gray-700 hover:text-cyan-600`} 
              onClick={()=>setMoreOpen(true)} onMouseEnter={()=>setMoreOpen(true)}>
                More <FaAngleDown /></div>
              <div className="absolute pb-2 @max-lg:right-0 bg-white" onMouseLeave={()=>setMoreOpen(false)}>
               { moreOpen && more_menu.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMoreOpen(false)}
                    className={`block p-2 py-2 ${isActive(link.path)
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-gray-700 hover:bg-gray-50"
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
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {phone_menu.map((link:any) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 ${isActive(link.path)
                  ? "text-cyan-600 bg-cyan-50"
                  : "text-gray-700 hover:bg-gray-50"
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
