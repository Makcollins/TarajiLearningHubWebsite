import { MissionVision } from "../components/MissionVision";
import { Users, Award, Globe, Target, BookOpen, Heart, TicketCheck, ArrowBigDown, ArrowBigRightDash, Fingerprint, Pointer, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import CountUp from "react-countup";
import { Achievements } from "../components/Achivements";

export function About() {
  const teamMembers = [
    {
      name: "Joseph Onyonka",
      role: "C.E.O. / Mental Health Educator",
      image: "./public/team/joseph.png"
    },
    {
      name: "Cliff Omayio",
      role: "Education Specialist",
      image: "./public/team/cliff.jpg"
    },
    {
      name: "Lanith Juma",
      role: "IT Specialist",
      image: "./public/team/jumataraji.jpg"
    },
    {
      name: "Bridget Kamau",
      role: "Education Specialist",
      image: "./public/team/bridget.jpg"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-700 text-white to-indigo-600 py-5">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="./public/pages/lk.JPG"
            alt="Students learning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400">About Us</h1>
              <p className="text-xl from-cyan-100 max-w-3xl">
                Established in Western Kenya,
                Taraji Learning Hub is dedicated to
                advancing mental health and
                psychosocial well-being among
                vulnerable children, youths and
                caregivers. Through innovative,
                creative and trauma-informed
                approaches, Taraji provides safe
                spaces where individuals can
                creatively express, heal and thrive          </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <ImageWithFallback
                src="./public/pages/girl.JPG"
                alt="Community workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Since its inception, Taraji has
                  prioritized addressing the
                  growing burden of unmet mental
                  health needs among children,
                  youths and families exposed to
                  violence and abuse, neglect and
                  exploitation, disability & social
                  exclusion and family/community
                  level trauma.
                  Taraji integrates Art and Play
                  Therapy (APT) to support
                  emotional healing, resilience
                  building and social reintegration
                </p>
                <div>
                  <h3 className="text-2xl font-bold mb-2">OUR CORE FOCUS AREAS</h3>
                  <ul className="list-disc list-inside">
                    <li className="mb-2">
                      <strong>Mental Health & Psychosocial Support
                        (MHPSS): </strong>
                      Art & play therapy; Individual and group
                      counselling; Creative healing and
                      sustainable Textile Initiative; and
                      strengthening mental health referral
                      systems.
                    </li>
                    <li className="mb-2">
                      <strong>Trauma-Informed Education: </strong>
                      Trauma Informed Parenting; Supporting
                      caregivers, children in CCIs, and
                      reintegrated families.
                    </li>
                    <li className="mb-2">
                      <strong>Child Protection & Safeguarding: </strong>
                      Supporting safe reintegration and
                      protection systems
                    </li>
                    <li className="mb-2">
                      <strong>Capacity Strengthening: </strong>
                      Training caregivers, social workers and
                      community duty bearers
                    </li>
                    <li className="mb-2">
                      <strong>Knowledge Development: </strong>
                      Development of manuals and handbooks for
                      scalable interventions, Conducting research
                      and situational analysis on MHPSS.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="./public/gallery/tarajipaints.JPG"
                alt="Community workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <MissionVision />

      {/* Achievements */}
      <Achievements/>
      {/* <div id="impact" className="py-16 bg-white">
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
      </div> */}

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands dedicated to making a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="from-cyan-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
