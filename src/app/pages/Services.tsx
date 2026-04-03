import { Brain, Shield, BookOpen, Users, Heart, MessageCircle, GraduationCap, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Mental Health & Psychosocial Support (MHPSS)",
      description: ` Art & play therapy; Individual and group
counselling; Creative healing and
sustainable Textile Initiative; and
strengthening mental health referral
systems.`,
      features: []
    },
    {
      icon: BookOpen,
      title: "Trauma-Informed Education",
      description: `Trauma Informed Parenting; Supporting
caregivers, children in CCIs, and
reintegrated families`,
      features: []
    },
    {
      icon: Shield,
      title: "Child Protection & Safeguarding",
      description: "Supporting safe reintegration and protection systems",
      features: [
        "Community workshops",
        "School programs",
        "Workplace training",
        "Public awareness campaigns"
      ]
    },
    {
      icon: BookOpen,
      title: "Capacity Strengthening",
      description: "Training caregivers, social workers and community duty bearers",
      features: []
    },
    {
      icon: GraduationCap,
      title: "Knowledge Development",
      description: `Development of manuals and handbooks for
scalable interventions, Conducting research
and situational analysis on MHPSS.
`,
      features: []
    },
    // {
    //   icon: GraduationCap,
    //   title: "Advancing Knowledge & Capacity.Helpline Services",
    //   description: "Preventing future violence through education, community engagement and promoting gender equality for survivors.",
    // }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-700 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6">Our Services</h1>
              <p className="text-xl from-cyan-100 max-w-3xl">
                Comprehensive support and resources for mental health, gender-based violence prevention, and community empowerment.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <ImageWithFallback
                src="./public/pages/graphic2.png"
                alt="Taraji Lurning hub infographic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
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
                  <ul className="space-y-2">
                    {/* {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))} */}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      {/* <div className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl mb-8 text-red-100">
            Our 24/7 crisis helpline is always available for anyone in need of urgent support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <Phone size={32} />
              <span>1-800-HELP-NOW</span>
            </div>
            <div className="text-red-100">or</div>
            <div className="flex items-center gap-3 text-2xl font-bold">
              <MessageCircle size={32} />
              <span>Text "HELP" to 555-123</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* How to Access Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            OUR IMPLEMENTATION MODEL
          </h2>
          <p className="text-gray-600 text-2xl text-center mb-8">
            Taraji applies a community-based, trauma
            informed and scalable model:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2"> Creative Therapy Delivery</h3>
              <p className="text-gray-600 text-justify">
                <ul className="">
                  <li>Art and play therapy sessions in:
                    <ul className="list-disc list-inside italic text-left">
                      <li>Children’s homes (CCIs)</li>
                      <li>Schools and learning institutions</li>
                      <li>Street-connected families</li>
                      <li>Healthcare settings</li>
                    </ul>
                  </li>
                  <li>Art for healing exhibitions</li>
                  <li>Production of play-based learning
                    mental health games, materials and
                    equipment.</li>
                </ul>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2"> Therapeutic Program Structure</h3>
              <p className="text-gray-600 text-justify">
                <ul>
                  <li>12-week structured healing
                    cycles</li>
                  <li>Individual and group
                    counselling</li>
                  <li>Emotional readiness
                    assessments</li>
                  <li>Creative Healing Textile
                    Initiative (CHTI)</li>
                </ul>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Community support and Systems strengthening Get Support</h3>
              <p className="text-gray-600 text-justify">
                <ul>
                  <li>Trauma-informed Parenting
                    (caregiver) training</li>
                  <li>Capacity building for service
                    providers (Directorate for
                    Children Services DCS, social
                    workers, police service, other
                    CSOs)</li>
                  <li>Safeguarding, protection and
                    inclusion</li>
                </ul>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">4</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Reintegration Support</h3>
              <p className="text-gray-600 text-justify">
                <ul>
                  <li>Psychosocial readiness before placement</li>
                  <li>Post-placement follow-ups</li>
                  <li>Strengthening attachment and family
                    bonds</li>
                </ul>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">5</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2"> Research, consultancy and tools development</h3>
              <p className="text-gray-600 text-justify">
                <ul>
                  <li>MHPSS toolkits for alternative care providers</li>
                  <li>Development of art and play therapy modules</li>
                  <li>Art and Play-based learning card games, mind games and equipment.</li>
                </ul>
              </p>
            </div>
          </div>

        </div>
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
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
