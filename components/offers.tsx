import React from "react";

const Offers = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                </div>
                
                <div className="relative max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Special <span className="text-orange-400">Offers</span></h2>
                    <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Don't miss out on our exclusive deals and limited-time offers
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Early Bird Special</h3>
                            <p className="text-orange-100">Book 30 days in advance</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">25%</div>
                            <div className="text-orange-100">OFF</div>
                        </div>
                        </div>
                        <p className="text-orange-50 mb-6 leading-relaxed">
                        Plan ahead and save big! Book your stay 30 days in advance and enjoy up to 25% off on all room categories.
                        </p>
                        <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
                        Book Now
                        </button>
                    </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Weekend Getaway</h3>
                            <p className="text-blue-100">Perfect for couples</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">2+1</div>
                            <div className="text-blue-100">NIGHTS</div>
                        </div>
                        </div>
                        <p className="text-blue-50 mb-6 leading-relaxed">
                        Book 2 nights and get the 3rd night absolutely free! Includes complimentary breakfast and spa access.
                        </p>
                        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                        Learn More
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Offers ;