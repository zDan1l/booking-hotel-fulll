import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
                <Link href={"/"} className="flex items-center space-x-3 group">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.06 2.524 1 1 0 01-1.538 0z" />
                        </svg>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-2xl font-bold text-gray-800">LuxuryStay</h1>
                        <p className="text-xs text-gray-500">Premium Hotel Booking</p>
                    </div>
                </Link>
                <Navlink />
            </div>
        </nav>
    )
}

export default Navbar ;