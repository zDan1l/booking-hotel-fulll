import { getReservationById } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { differenceInCalendarDays } from 'date-fns';
import Image from "next/image";
import Link from "next/link";


const ReservationDetail = async({reservationId} : {reservationId : string}) => {
    const reservation = await getReservationById(reservationId);
    if(!reservation) return notFound();

    // Function to get status badge color
    const getStatusBadge = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'paid':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'unpaid':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'failure':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span>Reservation Details</span>
                            </h1>
                            <p className="text-gray-600 mt-1">Reservation ID: #{reservation.id.slice(-8)}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(reservation.Payment?.status || 'pending')}`}>
                                {reservation.Payment?.status?.toUpperCase() || 'PENDING'}
                            </span>
                            <Link 
                                href="/myreservation" 
                                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                <span>Back to List</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Guest & Booking Information */}
                <div className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Guest Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>Guest Information</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Full Name</span>
                                    <span className="font-semibold text-gray-800">{reservation.User.name}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Email Address</span>
                                    <span className="font-semibold text-gray-800">{reservation.User.email}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Phone Number</span>
                                    <span className="font-semibold text-gray-800">{reservation.User.phone || 'Not provided'}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Booking Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span>Booking Information</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Booking Date</span>
                                    <span className="font-semibold text-gray-800">{formatDate(reservation.createdAt.toISOString())}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Payment Method</span>
                                    <span className="font-semibold text-gray-800 capitalize">
                                        {reservation.Payment?.method ? reservation.Payment.method.replace("_", " ") : 'Not selected'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-600">Payment Status</span>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(reservation.Payment?.status || 'pending')}`}>
                                        {reservation.Payment?.status?.toUpperCase() || 'PENDING'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.06 2.524 1 1 0 01-1.538 0z" />
                        </svg>
                        <span>Room Details</span>
                    </h2>
                </div>
                
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0">
                        {/* Room Image */}
                        <div className="lg:w-1/3">
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                <Image 
                                    src={reservation.Room.image} 
                                    width={400} 
                                    height={300} 
                                    alt={reservation.Room.name}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                        
                        {/* Room Info */}
                        <div className="lg:w-2/3 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{reservation.Room.name}</h3>
                                <p className="text-gray-600">Experience luxury and comfort in this beautifully designed room.</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>Check-in Date</span>
                                        </span>
                                        <span className="font-semibold text-gray-800">{formatDate(reservation.startDate.toISOString())}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>Check-out Date</span>
                                        </span>
                                        <span className="font-semibold text-gray-800">{formatDate(reservation.endDate.toISOString())}</span>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span>Duration</span>
                                        </span>
                                        <span className="font-semibold text-gray-800">
                                            {differenceInCalendarDays(reservation.endDate, reservation.startDate)} Night{differenceInCalendarDays(reservation.endDate, reservation.startDate) > 1 ? 's' : ''}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Room Price</span>
                                        </span>
                                        <span className="font-semibold text-gray-800">{formatCurrency(reservation.price)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Payment Summary</span>
                    </h2>
                </div>
                
                <div className="p-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                <div>
                                    <h4 className="font-medium text-gray-800">{reservation.Room.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {formatDate(reservation.startDate.toISOString())} - {formatDate(reservation.endDate.toISOString())}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {differenceInCalendarDays(reservation.endDate, reservation.startDate)} night{differenceInCalendarDays(reservation.endDate, reservation.startDate) > 1 ? 's' : ''} × {formatCurrency(reservation.price)}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold text-gray-800">{formatCurrency(reservation.price)}</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="font-bold text-lg text-gray-800">Total Amount</div>
                                <div className="font-bold text-2xl text-orange-600">
                                    {reservation.Payment && formatCurrency(reservation.Payment.amount)}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {reservation.Payment?.status === "unpaid" && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-red-800">Payment Required</h4>
                                    <p className="text-sm text-red-600">Complete your payment to confirm your reservation.</p>
                                </div>
                                <Link 
                                    href={`/checkout/${reservation.id}`}
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                                >
                                    Pay Now
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReservationDetail ;