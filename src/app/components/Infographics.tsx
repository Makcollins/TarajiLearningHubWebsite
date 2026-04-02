import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { AlertCircle, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

export function Infographics() {
  // Gender-Based Violence Statistics
  const gbvData = [
    { category: "Physical Violence", percentage: 35 },
    { category: "Emotional Abuse", percentage: 43 },
    { category: "Sexual Violence", percentage: 27 },
    { category: "Economic Abuse", percentage: 22 },
  ];

  // Mental Health Statistics
  const mentalHealthData = [
    { age: "18-25", affected: 28, seekHelp: 15 },
    { age: "26-35", affected: 32, seekHelp: 18 },
    { age: "36-45", affected: 25, seekHelp: 12 },
    { age: "46-55", affected: 20, seekHelp: 10 },
    { age: "56+", affected: 15, seekHelp: 8 },
  ];

  // Support Services Impact
  const impactData = [
    { name: "Received Support", value: 70 },
    { name: "No Support Yet", value: 30 },
  ];

  const COLORS = ["#007595", "#d08700"];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Understanding the Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya is undergoing a transition from institutional
            care to family and community-based alternative
            care systems. However:
            Many children experience Adverse Childhood
            Experiences (ACEs) including neglect, violence,
            loss, incarceration and separation.
            Mental health services remain underfunded
            and inaccessible, especially those offering child
            friendly approaches.
            Children transitioning from care lack emotional
            and psychosocial support.
            Caregivers often lack trauma-informed
            parenting skills
            Community-level MHPSS systems remain limited
            Children and youth struggle with trauma,
            behavioural challenges and difficulty reintegrating
            into families and communities.
          </p>
        </div>

        {/* Gender-Based Violence Section */}
        {/* <div className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-red-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                Gender-Based Violence Statistics
              </h3>
            </div>
            <p className="text-gray-700 mb-8">
              Prevalence of different types of gender-based violence affecting women globally
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gbvData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#dc2626" name="Affected (%)" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> These statistics represent global averages. Gender-based violence affects 1 in 3 women worldwide, making awareness and prevention critical.
              </p>
            </div>
          </div>
        </div> */}

        {/* Mental Health Section */}
        {/* <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-cyan-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                Mental Health Awareness
              </h3>
            </div>
            <p className="text-gray-700 mb-8">
              Mental health challenges by age group and help-seeking behavior
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mentalHealthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="affected" stroke="#9333ea" strokeWidth={3} name="Experiencing Mental Health Issues (%)" />
                <Line type="monotone" dataKey="seekHelp" stroke="#ec4899" strokeWidth={3} name="Seeking Professional Help (%)" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Key Insight:</strong> While mental health challenges are prevalent across all age groups, there's a significant gap between those affected and those seeking help. Our programs aim to bridge this gap.
              </p>
            </div>
          </div>
        </div> */}

        {/* Impact of Support Services */}
        <div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={2150} duration={5}/>+</h4>
                  <p className="text-gray-600">individuals reached in Kisii and Nyamira Counties through schools and community sessions.</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={850} duration={5}/>+</h4>
                  <p className="text-gray-600">Participated in awareness workshops</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={80} duration={5}/>%</h4>
                  <p className="text-gray-600">Reported improved well-being after support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
             KEY ACHIEVEMENTS (SINCE 2021)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering art and play therapy
            interventions across multiple
            care settings; in CCIs, families
            and community environments
            Training on Trauma informed
            parenting/caregiving
            Developed Art and Play
            Therapy modules for scale and
            replication
            Strengthened psychosocial
            reintegration frameworks
            Piloting a Creative Healing
            and Sustainable Textile
            Initiative aimed at recycling
            old fabrics into therapeutic
            toys, dolls, play materials
            and themed bags.
          </p>
        </div>
      </div>
    </div>
  );
}
