import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import HeroAbout from "@/components/about/hero";
import Values from "@/components/about/value";
import Team from "@/components/about/team";
import Awards from "@/components/about/awards";

export const metadata: Metadata = {
    title : "About",
    description : "Who we are"
}

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <HeaderSection title="About Us" subTittle="Discover our story, values, and commitment to exceptional hospitality." /> 
            
            {/* Hero About Section */}
            <HeroAbout />

            {/* Values Section */}
            <Values />

            {/* Team Section */}
            <Team />

            {/* Awards & Recognition */}
            <Awards />
        </div>        
    )
}

export default AboutPage ;