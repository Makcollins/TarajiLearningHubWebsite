import { Brain, Shield, BookOpen, Users, Heart, MessageCircle, GraduationCap, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import "./css/services.css";
import { TypeAnimation } from "react-type-animation";
import { ImplementationModel } from "../components/ImplementationModel";

// // const handleMouseEnter () => {

// }

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Mental Health & Psychosocial Support (MHPSS)",
      description: ` We provide a safe harbor for emotional recovery through diverse therapeutic paths. 
      From Art & Play Therapy and professional Individual and Group Counseling 
      to our innovative Sustainable Textile Initiative,
      we integrate creative healing to help individuals process trauma and build coping skills..`,
      features: []
    },
    {
      icon: BookOpen,
      title: "Trauma-Informed Education",
      description: `Sustainable healing happens within a supported community. 
      We empower the foundation of the home through Trauma-Informed Parenting programs and 
      dedicated support for caregivers, children in CCIs, and reintegrated families, 
      ensuring a stable environment for growth`,
      features: []
    },
    {
      icon: Shield,
      title: "Child Protection & Safeguarding",
      description: `We are committed to the safety and rights of every child. 
      Our experts work to strengthen protection systems and facilitate safe reintegration, 
      while simultaneously building robust mental health referral networks to ensure seamless access to care.`,
      features: []
    },
    {
      icon: BookOpen,
      title: "Capacity Strengthening",
      description: `Empowering the community to lead the way. 
      We transform child welfare by providing essential trauma-informed training to caregivers, social workers, 
      and community leaders. Our mission is to close the knowledge gap, 
      ensuring professional-grade support is available at every level of a child's life.`,
      features: []
    },
    {
      icon: GraduationCap,
      title: "Knowledge Development",
      description: `To ensure our impact is lasting and scalable, we bridge practice with theory. 
      We conduct in-depth MHPSS research and situational analysis and 
      develop specialized manuals and handbooks that serve as blueprints 
      for high-quality, scalable interventions across the sector`,
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
      <div className="relative bg-gradient-to-br from-cyan-700 to-indigo-600 text-white py-5">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://i.ibb.co/W4M85Dms/lk.jpg"
            alt="Students learning"
            className="w-full h-full object-cover opacity-20"
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
              <ImageWithFallback
                src="https://i.ibb.co/WWM68Wp9/taraji-services.png"
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
      <ImplementationModel />

      {/* How to Access Section */}
      <div className="py-16 bg-white">

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
