import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline} from "react-icons/io5";


const AboutPage = () => {
    return (
        <div className="">
            <HeaderSection title="About Us" subTittle="Lorem ipsum dolor sit amet." /> 
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/about-image.avif" width={650} height={579} alt="About Image" />
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who we are</h1>
                        <p className="text-gray-700 py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aliquid similique est quisquam neque. Porro placeat voluptate repudiandae magni eveniet?</p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7" />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint rerum quod architecto quos! Autem?</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7" />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold mb-1">Mision : </h4>
                                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore sit, optio unde autem minima voluptate saepe ullam nulla incidunt!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default AboutPage ;