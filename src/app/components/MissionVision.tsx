import { Target, Eye, Heart } from "lucide-react";

export function MissionVision() {
  return (
    <div className="py-16 bg-gradient-to-br from-cyan-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are is dedicated to 
            advancing mental health and 
            psychosocial well-being among 
            vulnerable children, youths and 
            caregivers. Through innovative, 
            creative and trauma-informed 
            approaches, Taraji provides safe 
            spaces where individuals can 
            creatively express, heal and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              Knowledge transfer and resilience for sustainable futures.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-600 text-center">
              To invest in inclusive, community-driven approaches that strengthen resilience among vulnerable populations
            </p>
          </div>

          {/* Values */}
          {/* <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Values
            </h3>
            <p className="text-gray-600 text-center">
              Compassion, integrity, empowerment, inclusivity, and evidence-based practices guide everything we do. We believe in the dignity and potential of every person.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
