import { Hero } from "../components/Hero";
import { MissionVision } from "../components/MissionVision";
import { Infographics } from "../components/Infographics";
import { Partners } from "../components/Partners";
import { BookOpen, Users, Heart, Award } from "lucide-react";
import { Link } from "react-router";
import CountUp from 'react-countup';


export function Home() {
  const stats = [
    { icon: Users, value: 2150 , label: "Lives Impacted" },
    { icon: BookOpen, value: 50, label: "Workshops Conducted" },
    { icon: Heart, value: 20, label: "Counseling Sessions" },
    { icon: Award, value: 2, label: "Partner Organizations" },
  ];

  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-yellow-400" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <CountUp end={stat.value} duration={5} />+
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <MissionVision />
      <Infographics />
      <Partners />

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-cyan-700 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-2 text-cyan-100">
            Partner with us. Support healing.
            Transform lives.</p>
          <p className="text-xl mb-8 text-cyan-100">
            Taraji welcomes collaboration with
            donors, institutions and community
            partners committed to advancing mental
            health and child protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
