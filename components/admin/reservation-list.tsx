import { getReservations } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";


const ReservationList = async () => {
    const reservations = await getReservations();
    if(!reservations?.length) return <p>No Reservation Found</p>;

    return (
        <div className="bg-white p-4 mt-5 shadow-sm">
            <table className="w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 w-32 font-bold text-gray-700 uppercase text-left">Image</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left">Name</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left">Arrival</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left">Departure</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left">Room Name</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left" >Price</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase text-left">Created At</th>
                        <th className="px-6 py-3 font-bold text-gray-700 uppercase">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {reservations.map((reservation) => (    
                        <tr className="hover:bg-gray-100" key={reservation.id}>
                            <td className="px-6 py-4">
                                <div className="h-20 w-32 relative">
                                    <Image src={reservation.Room.image} fill sizes="20vw" alt="reservation image" className="object-cover"/>
                                </div>
                            </td>
                            <td className="px-6 py-4">{reservation.User.name}</td>
                            <td className="px-6 py-4">{formatDate(reservation.startDate.toISOString())}</td>
                            <td className="px-6 py-4">{formatDate(reservation.endDate.toISOString())}</td>
                            <td className="px-6 py-4">{reservation.Room.name}</td>
                            <td className="px-6 py-4">{formatCurrency(reservation.price)}</td>
                            <td className="px-6 py-4">{formatDate(reservation.createdAt.toString())}</td>
                            <td className="px-6 py-4 text-right">
                                <span className="capitalize">{reservation.Payment?.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReservationList ;