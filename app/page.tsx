import Hero from "@/components/hero";
import Main from "@/components/main"
import Statistics from "@/components/statistics";
import Gallery from "@/components/gallery";
import Choose from "@/components/choose";
import Testimonial from "@/components/testimonial";
import Offers from "@/components/offers";
import CallToAction from "@/components/cta";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Rooms & Rates Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Room & <span className="text-orange-400">Rates</span>
              </h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our collection of luxury rooms designed for your comfort. Each room offers unique amenities and breathtaking views to make your stay unforgettable.
            </p>
          </div>
          <Main />
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />


      {/* Why Choose Us Section */}
      <Choose />  

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Offers Section */}
      <Offers />      

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
