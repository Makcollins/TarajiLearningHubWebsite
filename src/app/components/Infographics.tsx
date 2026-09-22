import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { AlertCircle, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import {gbvData,mentalHealthData, impactData} from "../data/data";

export function Infographics() {

  const COLORS = ["#007595", "#d08700"];

  return (
    <div className="py-16 bg-white backdrop-opacity-100">
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
      
        <div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="w-full h-96">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      // label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={500}
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
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={2150} duration={5} />+</h4>
                  <p className="text-gray-600">individuals reached in Kisii and Nyamira Counties through schools and community sessions.</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={850} duration={5} />+</h4>
                  <p className="text-gray-600">Participated in awareness workshops</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2"><CountUp end={80} duration={5} />%</h4>
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
