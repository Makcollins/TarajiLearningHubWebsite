import { Brain, Shield, BookOpen, Users, Heart, MessageCircle, GraduationCap, Phone } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Healing Through Creative Expression",
      description: "Helping individuals and at-risk families process trauma, manage stress and build coping mechanisms through theatre and art therapy",
      features: [
        "Individual therapy sessions",
        "Group support programs",
        "Crisis intervention",
        "Family counseling"
      ]
    },
    {
      icon: Users,
      title: "Building Inclusive Communities",
      description: "Comprehensive support services for survivors of gender-based violence, including emergency assistance, counseling, and legal advocacy.Foster inclusive societies that uphold the rights, dignity and active participation of PWDs in social, economic and civic aspects of life.",
      features: [
        "24/7 emergency hotline",
        "Safe shelter referrals",
        "Legal support and advocacy",
        "Survivor support groups"
      ]
    },
    {
      icon:Shield,
      title: "Supporting Survivors of GBV",
      description: "Community workshops and training programs focused on mental health awareness, healthy relationships, and violence prevention.Creating a GBV-free society by assisting survivors meet their immediate needs, legal aid, and psychosocial support.",
      features: [
        "Community workshops",
        "School programs",
        "Workplace training",
        "Public awareness campaigns"
      ]
    },
    {
      icon: Users,
      title: "Community Support Groups",
      description: "Safe, supportive spaces where individuals can connect, share experiences, and find strength in community.",
      features: [
        "Peer support circles",
        "Women's empowerment groups",
        "Youth programs",
        "Caregiver support"
      ]
    },
    {
      icon:BookOpen,
      title: "Preventing Violence Through Education.",
      description: "Preventing future violence through education, community engagement and promoting gender equality for survivors..",
      features: [
        "Mindfulness training",
        "Stress management workshops",
        "Yoga and meditation",
        "Nutrition guidance"
      ]
    },
    {
      icon: GraduationCap,
      title: "Advancing Knowledge & Capacity.Helpline Services",
      description: "Preventing future violence through education, community engagement and promoting gender equality for survivors.",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-700 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6">Our Services</h1>
          <p className="text-xl from-cyan-100 max-w-3xl">
            Comprehensive support and resources for mental health, gender-based violence prevention, and community empowerment.
          </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Access Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via phone, email, or our contact form
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We'll discuss your needs and recommend appropriate services
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold from-cyan-600">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Get Support</h3>
              <p className="text-gray-600">
                Begin your journey with personalized support
              </p>
            </div>
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
