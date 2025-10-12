import React from "react";

const Choose = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                    <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Experience the difference with our exceptional service and premium amenities
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Best Price Guarantee</h3>
                    <p className="text-gray-600">We guarantee the best rates for your perfect stay</p>
                    </div>
                    
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Booking</h3>
                    <p className="text-gray-600">Safe and secure online reservation system</p>
                    </div>
                    
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer service support</p>
                    </div>
                    
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Amenities</h3>
                    <p className="text-gray-600">Luxury facilities and world-class amenities</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Choose ;