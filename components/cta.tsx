import React from "react";

const CallToAction = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                </div>
                
                <div className="relative max-w-screen-xl mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Experience <br className="hidden md:block" />
                    <span className="text-orange-100">Luxury Like Never Before?</span>
                    </h2>
                    <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Join thousands of satisfied guests who have made LuxuryStay their home away from home. 
                    Book now and create memories that will last a lifetime.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <a 
                        href="/room" 
                        className="group bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-white/25 min-w-[200px]"
                    >
                        <span className="flex items-center justify-center gap-2">
                        Book Your Stay
                        <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </span>
                    </a>
                    <a 
                        href="/contact" 
                        className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105 min-w-[200px]"
                    >
                        Contact Us
                    </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Call Us</h4>
                        <p className="text-orange-100">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Email Us</h4>
                        <p className="text-orange-100">info@luxurystay.com</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                        <p className="text-orange-100">123 Luxury Ave, City</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction ;