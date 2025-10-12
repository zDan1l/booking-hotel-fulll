
import { IoEyeOutline, IoLocateOutline} from "react-icons/io5";
import Image from "next/image";

const HeroAbout = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <Image 
                                    src="/about.avif" 
                                    width={650} 
                                    height={579} 
                                    alt="About LuxuryStay Hotel" 
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
                            </div>
                            {/* Floating Cards */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">10+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -left-6 bg-orange-400 text-white p-4 rounded-xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-sm">Happy Guests</div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                    Who <span className="text-orange-400">We Are</span>
                                </h2>
                                <div className="w-24 h-1 bg-orange-400 mb-6"></div>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    LuxuryStay is more than just a hotel - we're your gateway to extraordinary experiences. 
                                    Since our founding, we've been dedicated to providing unparalleled hospitality that combines 
                                    luxury, comfort, and authentic local charm.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our commitment to excellence is reflected in every detail, from our meticulously designed rooms 
                                    to our world-class amenities and personalized service that anticipates your every need.
                                </p>
                            </div>

                            {/* Vision & Mission */}
                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="flex-none">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                                            <IoEyeOutline className="w-7 h-7 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            To be the world's most beloved hospitality brand, creating magical moments and 
                                            lasting memories for every guest through exceptional service and innovative experiences.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 group">
                                    <div className="flex-none">
                                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                            <IoLocateOutline className="w-7 h-7 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            To deliver extraordinary hospitality experiences by combining luxury accommodations, 
                                            personalized service, and authentic local culture while maintaining our commitment 
                                            to sustainability and community engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroAbout ;