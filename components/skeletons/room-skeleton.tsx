import React from "react";
import CardSekeletons from "@/components/skeletons/card-skeletons";


const RoomSkeleton = () => {
    return (
        <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                <CardSekeletons />
                <CardSekeletons />
                <CardSekeletons />
            </div>
        </div>
    )
}

export default RoomSkeleton ;