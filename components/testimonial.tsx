import React from "react";

const Testimonial = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our <span className="text-orange-400">Guests</span> Say</h2>
                    <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Read what our valued guests have to say about their experience at LuxuryStay
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                        <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                        "Absolutely amazing experience! The rooms were spotless, the staff was incredibly friendly, and the amenities exceeded my expectations. Will definitely stay again!"
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        JS
                        </div>
                        <div className="ml-4">
                        <h4 className="font-semibold text-gray-800">John Smith</h4>
                        <p className="text-gray-500 text-sm">Business Traveler</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                        <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                        "Perfect for our honeymoon! The romantic atmosphere, beautiful rooms, and exceptional service made our stay unforgettable. Thank you for the memories!"
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        EM
                        </div>
                        <div className="ml-4">
                        <h4 className="font-semibold text-gray-800">Emma Miller</h4>
                        <p className="text-gray-500 text-sm">Honeymoon Couple</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                        <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                        "Family vacation was perfect here! Kids loved the pool, parents enjoyed the spa, and everyone appreciated the spacious rooms. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        MJ
                        </div>
                        <div className="ml-4">
                        <h4 className="font-semibold text-gray-800">Michael Johnson</h4>
                        <p className="text-gray-500 text-sm">Family Vacation</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial ;