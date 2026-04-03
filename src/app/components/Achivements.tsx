import { BookOpen, Globe, Heart, Users } from "lucide-react";
import CountUp from "react-countup";

export function Achievements(){
    const achievements = [
    { icon: Users, value: 2150, label: "Lives Impacted" },
    { icon: BookOpen, value: 50, label: "Workshops Conducted" },
    { icon: Heart, value: 20, label: "Counseling Sessions" },
    { icon: Globe, value: 3, label: "Counties reached" }
  ];

    return(
        <div id="impact" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                    Our Impact
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="text-yellow-300" size={40} />
                          </div>
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            <CountUp end={achievement.value} duration={5} />+
                          </div>
                          <div className="text-gray-600">{achievement.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
    )
}