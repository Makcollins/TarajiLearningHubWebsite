import { Brain, Shield, BookOpen, Users, Heart, MessageCircle, GraduationCap, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import "./css/services.css";
import { TypeAnimation } from "react-type-animation";
import { ImplementationModel } from "../components/ImplementationModel";
import { Link } from "react-router";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import {services} from '../data/data'

export function Services() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'xnlxwmb1'
    }
  });

  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br  from-blue-950 via-blue-700 to-blue-400from-cyan-700 to-indigo-600 text-white py-5">
        <div className="fixed top-0 inset-0 overflow-hidden">
                   <AdvancedImage className="w-full h-full object-cover opacity-20"
          cldImg={cld.image('lk')}
          alt="image of a man drawing on a paper"
        />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6">Our Services</h1>
              <p className="text-xl from-cyan-100 max-w-3xl">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    `At Taraji Learning Hub, we provide a holistic ecosystem of support designed to foster healing, safety, and long-term resilience. 
                    From Mental Health & Psychosocial Support, Trauma-Informed Education to Knowledge Development, 
                    researching and creating the manuals that define the future of mental health and social protection systems.`,
                  ]}
                  // style={{ fontSize: '2em' }}
                  repeat={1}
                />

              </p>
            </div>
            <div className="growing-image rounded-xl overflow-hidden shadow-xl">
              <AdvancedImage 
              className="w-full h-full object-cover"
          cldImg={cld.image('taraji-services')}
          alt="Taraji Lurning hub infographic"
        />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50 backdrop-opacity-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-yellow-300" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ImplementationModel />

      {/* How to Access Section */}
      <div className="py-16 bg-white backdrop-opacity-100">

        <div className="">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              EXPECTED OUTCOMES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ul>
                <li>70% increased emotional
                  resilience among
                  children, care leavers
                  (youths) and caregivers.</li>
                <li>Reduced placement
                  breakdown or relapse
                  rates</li>
                <li>Improved caregiver-child
                  attachment</li>
                <li>Strengthened trauma
                  informed
                  parenting/caregiving
                  capacity</li>
                <li>Institutionalized MHPSS
                  within care systems</li>
              </ul>

            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact/"
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"

            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
