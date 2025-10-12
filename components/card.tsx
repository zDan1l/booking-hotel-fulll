import Image from "next/image";
import Link from "next/link";
import {IoPeopleOutline} from "react-icons/io5"
import { Room } from "@prisma/client";
import { formatCurrency } from "@/lib/utils";

const Card = ({room} : {room:Room }) => {
    return (
        <div className="group bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100 my-15">
            <div className="relative h-[280px] overflow-hidden">
                <Image 
                    src={room.image} 
                    width={384} 
                    height={280} 
                    alt="room image" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-2 rounded-lg shadow-lg">
                    <span className="font-bold text-lg">{formatCurrency(room.price)}</span>
                    <span className="text-xs block">/Night</span>
                </div>
                
                {/* Capacity Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                        <IoPeopleOutline className="text-orange-500"/>
                        <span className="text-sm font-medium">
                            {room.capacity} {room.capacity == 1 ? "person" : "people"}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                        <Link 
                            href={`/room/${room.id}`} 
                            className="hover:text-orange-500 transition-colors duration-200"
                        >
                            {room.name}
                        </Link>
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Enjoy luxury and comfort in this beautifully designed room with premium amenities.
                    </p>
                </div>
                
                {/* Features */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-1 text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.06 2.524 1 1 0 01-1.538 0z" />
                            </svg>
                            <span className="text-xs">Wi-Fi</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs">AC</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-xs">Phone</span>
                        </div>
                    </div>
                </div>
                
                {/* Book Now Button */}
                <Link 
                    href={`/room/${room.id}`} 
                    className="block w-full text-center bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/25 transform hover:-translate-y-0.5"
                >
                    Book Now
                </Link>
            </div>
        </div>
    )
}

export default Card ;