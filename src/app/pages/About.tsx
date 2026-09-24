import { MissionVision } from "../components/MissionVision";
import { Achievements } from "../components/Achivements";
import { teamMembers } from "../data/data"
import BgImage from "../components/BgImage";
import { cld } from "../data/data";
import { AdvancedImage, responsive } from '@cloudinary/react';
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export function About() {
  const aboutImg = cld.image('girl')
    .delivery(format('auto')).delivery(quality('auto'));

  const storyImg = cld.image('tarajipaints')
    .delivery(format('auto')).delivery(quality('auto'));

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400 py-5">
        <BgImage />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl h-96 hover:animate-pulse">
              <AdvancedImage
                className="w-full h-full object-cover"
                cldImg={aboutImg}
                alt={`A young woman with styled, beaded hair and a black top standing beside a Taraji Learning Hub banner featuring the text 
                  "Creative Healing, Bold prevention - Ending GBV through Art."`}
              />
            </div>
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
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-pulse">Our Story</h2>
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
            <div className="rounded-xl overflow-hidden h-full shadow-xl heroImg">
              <AdvancedImage
                className="w-full h-full object-cover"
                cldImg={storyImg}
                alt={`Hands of participants gathered around a table reaching for colorful oil pastels and crayons.`}
              plugins={[
                    responsive({ steps: 100 })
                  ]}
              />
            </div>
          </div>
        </div>
      </div>

      <MissionVision />

      <Achievements />

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
            {teamMembers.map((member, index) => {
              const img = cld.image(member.image)
              .delivery(format('auto')).delivery(quality('auto'));

              return (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">

                  <AdvancedImage className="w-full h-full object-cover"
                    cldImg={img}
                    alt={`image of ${member.name}, ${member.role}, taraji`}
                    plugins={[
                      responsive({steps:100})
                    ]}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="from-cyan-600">{member.role}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
