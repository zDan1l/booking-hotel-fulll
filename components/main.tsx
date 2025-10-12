import Card from "@/components/card";
import { getRoom } from "@/lib/data";
import { notFound } from "next/navigation";


const Main = async() => {
    const rooms = await getRoom();
    if(!rooms) return notFound();
    return (
        <div className="px-4">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {rooms.map((room) => (
                    <Card room={room} key={room.id} />
                ))}
            </div>
        </div>
    )
}

export default Main ;