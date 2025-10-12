import { Metadata } from "next";
import MyReseverList from "@/components/my-reserve-list";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata : Metadata = {
    title : "My Reservation"
}

const MyReservationPage = async() => {
    const session = await auth();
    if(!session || !session.user ) redirect("/signin");
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-8 mt-30">
                <div className="mb-8">
                        <div className="flex justify-end space-x-3 pb-7">
                            <Link 
                                href="/room" 
                                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                <span>Book New Stay</span>
                            </Link>
                        </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span>Your Reservations</span>
                            </h2>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span>Paid</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <span>Pending</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <span>Unpaid</span>
                                </div>
                            </div>
                        </div>
                        <MyReseverList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyReservationPage ;