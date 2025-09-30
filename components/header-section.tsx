import Image from "next/image";


const HeaderSection = ({
    title,
    subTittle
}: {
    title : string;
    subTittle : string;
}) => {
    return (
        <header className="relative h-60 text-white overflow-hidden">
            <div className="absoulute inset-0">
                <Image src="/hero.avif" alt="hero image" fill className="object-cover object-center w-full h-full"/>
                <div className="absoulute inset-0 bg-black opacity-50">

                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
                <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
                <p className="text-xl text-gray-300">{subTittle}</p>
            </div>
        </header>
    )
}

export default HeaderSection ;