import { Handshake } from "lucide-react";

export function Partners() {
  const partners = [
    { name: "European Union", description: "European Union" },
    { name: "International Solidarity Foundation", description: "International Solidarity Foundation" },
    // { name: "UNICEF", description: "United Nations Children's Fund" },
    // { name: "Global Mental Health", description: "Mental Health Alliance" },
    // { name: "Women's Rights Foundation", description: "Empowerment & Advocacy" },
    // { name: "Community Health Network", description: "Local Healthcare Partners" },
    // { name: "Education for All", description: "Learning & Development" },
    // { name: "Safe Spaces Initiative", description: "Protection & Support" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="from-cyan-600" size={40} />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Partners
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to maximize our impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:mx-50 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold from-cyan-600">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4"> PARTNER WITH US TO: </p>
          <ul className="text-gray-600 mb-4">
            <li>Scale <strong>The Rainbow Minds for Healing Project</strong></li>
            <li>Institutionalize <strong>trauma-informed art and play therapy models</strong></li>
            <li>Strengthen <strong>family-based care systems through integrating MHPSS</strong></li>
            <li>Support <strong>policy and care reform implementation.</strong></li>
          </ul>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
