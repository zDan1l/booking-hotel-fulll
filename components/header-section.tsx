import Image from "next/image";


const HeaderSection = ({
    title,
    subTittle
}: {
    title : string;
    subTittle : string;
}) => {
    return (
        <header className="relative h-80 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/hero.avif" alt="hero image" fill className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight capitalize mb-4 animate-fade-in">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        {subTittle}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection ;