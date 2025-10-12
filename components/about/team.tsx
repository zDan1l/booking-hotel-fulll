import React from "react";

const Team = () => {
    return (
        <>
            <section className="py-20 bg-slate-50">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our <span className="text-orange-400">Team</span></h2>
                        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our passionate team of hospitality professionals is dedicated to making your stay exceptional.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                                JD
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
                            <p className="text-orange-500 font-medium mb-4">General Manager</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                With over 15 years in luxury hospitality, John leads our team with passion and dedication to guest satisfaction.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                                SM
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah Miller</h3>
                            <p className="text-blue-500 font-medium mb-4">Head of Guest Services</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sarah ensures every guest receives personalized attention and memorable experiences during their stay.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
                            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                                MJ
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Michael Johnson</h3>
                            <p className="text-green-500 font-medium mb-4">Executive Chef</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Michael creates culinary masterpieces that showcase local flavors with international flair.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team ;