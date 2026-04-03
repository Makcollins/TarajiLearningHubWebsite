import parse from 'html-react-parser';
import { useState } from 'react';
export function ImplementationModel() {
    const [activeStep, setActiveStep] = useState(1);
    const implementationSteps = [
        {
            id: 1,
            title: `Creative Therapy Delivery`,
            content: `<ul className="">
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
                            </ul>`,
            bg_color: `bg-gradient-to-br from-sky-900 to-sky-400`
        },
        {
            id: 2,
            title: `Therapeutic Program Structure`,
            content: `<ul>
                            <li>12-week structured healing
                                cycles</li>
                            <li>Individual and group
                                counselling</li>
                            <li>Emotional readiness
                                assessments</li>
                            <li>Creative Healing Textile
                                Initiative (CHTI)</li>
                        </ul>`,
            bg_color: `bg-gradient-to-br from-teal-900 to-teal-400`
        },
        {
            id: 3,
            title: `Community support and Systems strengthening Get Support`,
            content: `<ul>
                            <li>Trauma-informed Parenting
                                (caregiver) training</li>
                            <li>Capacity building for service
                                providers (Directorate for
                                Children Services DCS, social
                                workers, police service, other
                                CSOs)</li>
                            <li>Safeguarding, protection and
                                inclusion</li>
                        </ul>`,
            bg_color: `bg-gradient-to-br from-fuchsia-900 to-fuchsia-400`
        },
        {
            id: 4,
            title: `Reintegration Support`,
            content: `<ul>
                            <li>Psychosocial readiness before placement</li>
                            <li>Post-placement follow-ups</li>
                            <li>Strengthening attachment and family
                                bonds</li>
                        </ul>`,
            bg_color: `bg-gradient-to-br from-indigo-900 to-indigo-400`
        },
        {
            id: 5,
            title: `Research, consultancy and tools development`,
            content: `<ul>
                            <li>MHPSS toolkits for alternative care providers</li>
                            <li>Development of art and play therapy modules</li>
                            <li>Art and Play-based learning card games, mind games and equipment.</li>
                        </ul>`,
            bg_color: `bg-gradient-to-br from-amber-900 to-amber-400`
        },
    ]
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                OUR IMPLEMENTATION MODEL
            </h2>
            <p className="text-gray-600 text-2xl text-center mb-8">
                Taraji applies a community-based, trauma
                informed and scalable model:
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          </div> */}

            <div className="grid grid-cols-1 md:flex md:flex-row gap-4 mb-12">
                {implementationSteps.map((step, index) => {
                    return(<div onMouseEnter={()=> setActiveStep(step.id)} className= {`py-10 max-md:px-10 rounded-lg ${step.bg_color} ${step.id === activeStep? 'px-10 text-left md:flex-1 md:w-40': 'text-center md:flex-none md:w-15'} `}>
                    <div>
                        <div className={`w-8 h-8 bg-white text-cyan-900 rounded-full flex items-center justify-center ${step.id !== activeStep&&'mx-auto my-auto'} mb-4`}>
                            <span className={`text-3xl font-bold`}>{step.id}</span>
                        </div>
                        <h3 className={`font-bold text-lg text-white mb-2 text-left max-md:visible ${step.id !== activeStep&&'md:hidden'}`}>{step.title}</h3>
                        <p className={`text-white text-left ${step.id !== activeStep&&'hidden'}`}>
                            {parse(step.content)}
                        </p>
                    </div>
                   
                </div>);
                })}
            </div>

        </div>
    )
}