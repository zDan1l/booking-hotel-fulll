import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
               <Image src="/hero.avif" alt="hero image" fill className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 capitalize animate-fade-in">
                        Book Your <span className="text-orange-400">Luxury</span> Room
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience unparalleled comfort and luxury. Get special offers just for you today with premium amenities and world-class service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={"/room"} className="group bg-orange-400 text-white hover:bg-orange-500 py-3 px-8 md:px-12 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-orange-400/25 min-w-[160px]">
                            <span className="flex items-center justify-center gap-2">
                                Book Now
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                        <Link href={"/contact"} className="group bg-transparent border-2 border-orange-400 text-white hover:bg-orange-400 hover:border-orange-400 py-3 px-8 md:px-12 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm min-w-[160px]">
                            Contact Us
                        </Link>
                    </div>
                    
                    {/* Features Preview */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                            <div className="text-2xl mb-2">🏨</div>
                            <h3 className="font-semibold text-lg mb-1">Luxury Rooms</h3>
                            <p className="text-gray-200 text-sm">Premium comfort & amenities</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                            <div className="text-2xl mb-2">🍽️</div>
                            <h3 className="font-semibold text-lg mb-1">Fine Dining</h3>
                            <p className="text-gray-200 text-sm">World-class cuisine</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                            <div className="text-2xl mb-2">🌟</div>
                            <h3 className="font-semibold text-lg mb-1">5-Star Service</h3>
                            <p className="text-gray-200 text-sm">Exceptional hospitality</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero ;