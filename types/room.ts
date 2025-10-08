import { Prisma } from "@prisma/client";

export type RoomProps = Prisma.RoomGetPayload<{
    include : {RoomAmenities : { select : {amenitiesId : true}}},
}>

export type RoomDetailProps = Prisma.RoomGetPayload<{
    include : {
                RoomAmenities : { 
                    include : {
                        Amenities : {
                            select : {
                                name : true
                            }
                        }
                    }
            }},
}>

export type DisableDateProps = Prisma.ReservationGetPayload<{
    select : {
        startDate : true,
        endDate : true
    }
}>