import React from "react";

const Statistics = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="group">
                    <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                    <p className="text-orange-100 text-lg">Happy Guests</p>
                    </div>
                    <div className="group">
                    <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                    <p className="text-orange-100 text-lg">Luxury Rooms</p>
                    </div>
                    <div className="group">
                    <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                    <p className="text-orange-100 text-lg">Years Experience</p>
                    </div>
                    <div className="group">
                    <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                    <p className="text-orange-100 text-lg">Satisfaction Rate</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Statistics ;