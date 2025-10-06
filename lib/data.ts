import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { Room, RoomAmenities } from '../app/generated/prisma/index';

export const getAmenities = async () => {
    const session = await auth();
    if(!session || !session.user){
        throw new Error("Unauthorized access");
    }
    try {
        const result = await prisma.amenities.findMany();
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const getRoom = async () => {
    
    try {
        const result = await prisma.room.findMany({
            orderBy: {createdAt: "desc"}
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getRoomById = async (roomId: string) => {
    
    try {
        const result = await prisma.room.findUnique({
            where : {id:roomId},
            include : {RoomAmenities : { select : {amenitiesId : true}}},
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getRoomDetailById = async (roomId: string) => {
    try {
        const result = await prisma.room.findUnique({
            where : {id : roomId},
            include : {
                RoomAmenities : { 
                    include : {
                        Amenities : {
                            select : {
                                name : true,
                            },
                        },
                    },
            }},
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const getReservationById = async (id: string) => {
    try {
        const result = await prisma.reservation.findUnique({
            where : {id },
            include : {
                Room : {
                    select: {
                        name: true,
                        image: true,
                        price: true,
                    }
                },
                User : {
                    select : {
                        name : true,
                        email: true,
                        phone : true,
                    }
                },
                Payment : true,
            }
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}