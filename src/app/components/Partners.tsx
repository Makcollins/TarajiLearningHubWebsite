import { Handshake } from "lucide-react";
import { Link } from "react-router";

export function Partners() {
  const partners = [
    { name: "County government of Kisii", description: "County government of Kisii" , logo:"/partners/kisii-county.png"},
    { name: "County government of Nyamira", description: "County government of Nyamira", logo:"/partners/nyamira-county-logo.png"},
    { name: "European Union", description: "European Union", logo:"/partners/european-union.png" },
    { name: "International Solidarity Foundation", description: "International Solidarity Foundation", logo:"/partners/international-solidarity-foundation-logo.png" },
    { name: "Kilimo Bora", description: "Kilimo Bora", logo:"/partners/kilimo-bora.png" },
    { name: "Victory Child Empowerment", description: "Victory Child Empowerment", logo:"/partners/vce.png" },
  ];

  return (
    <div className="py-16 bg-gray-50 backdrop-opacity-100">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-50 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="h-32 w-32 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <span className="text-2xl font-bold from-cyan-600">
                  {partner.name.charAt(0)}
                </span> */}
                <img src={partner.logo} alt="" />
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
          <Link
            to="/contact/"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
