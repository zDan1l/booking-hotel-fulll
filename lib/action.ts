"use server";
import { prisma } from "@/lib/prisma";
import { ContactSchema, RoomSchema } from "@/lib/zod";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export const ContactMessage = async (prevState: unknown ,formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success){   
        return { error : validatedFields.error.flatten().fieldErrors };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        await prisma.contact.create({
            data : {
                name,
                email,
                subject,
                message
            }
        });

        return {message : "Thanks for Contact us."}
    } catch (error) {
        console.log(error);
    }
}

export const saveRoom = async (image: string, prevState: unknown, formData: FormData) => {
    if(!image) return {message : "Image is Required."}
    const rowData = {
        name: formData.get("name"),
        description : formData.get("description"),
        capacity : formData.get("capacity"),
        price : formData.get("price"),
        amenities : formData.getAll("amenities")
    };

    const validatedField = RoomSchema.safeParse(rowData);

    if(!validatedField.success){
        return {error : validatedField.error.flatten().fieldErrors}
    }

    const { name, description, price, capacity, amenities } = validatedField.data;

    try {
        await prisma.room.create({
            data : {
                name,
                description,
                image,
                price,
                capacity,
                RoomAmenities : {
                    createMany : {
                        data : amenities.map((item) => ({
                            amenitiesId : item
                        }))
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
    }

    redirect("/admin/room");
}

// delete room
export const deleteRoom = async (id: string, image:string) => {
    try {
        await del(image);
        await prisma.room.delete({
            where : {
                id
            }
        })
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/admin/room");
}

// update room
export const updateoom = async (image: string, roomId : string, prevState: unknown, formData: FormData) => {
    if(!image) return {message : "Image is Required."}
    const rowData = {
        name: formData.get("name"),
        description : formData.get("description"),
        capacity : formData.get("capacity"),
        price : formData.get("price"),
        amenities : formData.getAll("amenities")
    };

    const validatedField = RoomSchema.safeParse(rowData);

    if(!validatedField.success){
        return {error : validatedField.error.flatten().fieldErrors}
    }

    const { name, description, price, capacity, amenities } = validatedField.data;

    try {
        await prisma.$transaction([
            prisma.room.update({
                where : {id: roomId},
                data : {
                    name,
                    description,
                    image,
                    price,
                    capacity,
                    RoomAmenities :{
                        deleteMany : {},
                    }
                }
            }),
            prisma.roomAmenities.createMany({
                data : amenities.map((item) => ({
                    roomId,
                    amenitiesId : item
                }))
            })
        ])
        
    } catch (error) {
        console.log(error)
    }
    revalidatePath("/admin/room");
    redirect("/admin/room");
}