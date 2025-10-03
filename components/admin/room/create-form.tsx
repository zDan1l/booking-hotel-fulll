"use client"
import { useRef, useState, useTransition } from "react"
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5"
import { type PutBlobResult } from "@vercel/blob"
import Image from "next/image"
import { BarLoader } from "react-spinners";
import { Amenities } from "@prisma/client"

const CreateForm = ({amenities} : {amenities: Amenities[]}) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [ image, setImage ] = useState("");
    const [ message, setMessage ] = useState("");
    const  [ pending, startTransition ] = useTransition();

    const handleUpload = () => {
        if(!inputFileRef.current?.files) return null;
        const file = inputFileRef.current.files[0];
        const formData = new FormData();
        formData.set("file", file);

        startTransition(async() => {
            try {
                const response = await fetch("/api/upload", {
                    method : "PUT",
                    body : formData
                });
                const data = await response.json();
                if(response.status !== 200){
                    setMessage(data.message);
                }
                const img = data as PutBlobResult;
                setImage(img.url)
            } catch (error) {
                console.log(error);
            }
        })

    }

    const deleteImage = (image: string) => {
        startTransition(async() => {
            try {
                await fetch(`/api/upload/?imageUrl=${image}`,{
                    method : "DELETE"
                });
                setImage("");
            } catch (error) {
                console.log(error);
            }
        })
            
    }

    return (    
        <form action="">
            <div className="grid md:grid-cols-12 gap-5">
                <div className="col-span-8 bg-white p-4">
                    <div className="mb-4">
                        <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Room Name..."  />
                        <div aria-live="polite" aria-atomic="true" >
                            <span className="text-sm text-red-500 mt-2">message</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea rows={8} name="description" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Description"></textarea>
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-sm text-red-500 mt-2">message</span>
                        </div>
                    </div>
                    <div className="mb-4 grid md:grid-cols-3">
                        {amenities.map((item) => (
                            <div className="flex items-center mb-4" key={item.id}>
                                <input type="checkbox" name="amenities" className="w-4 h-4 text-blue-600  border-gray-300 rounded" defaultValue={item.id}/>
                                <label htmlFor="amenities" className="ms-2 font-medium text-gray-900 capitalize">
                                    {item.name}
                                </label>
                            </div>
                        ))}
                        <div aria-live="polite" aria-atomic="true" >
                            <span className="text-sm text-red-500 mt-2">message</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 bg-white p-4">
                    <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative">
                        <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
                                {pending ? <BarLoader/> : null}
                                {image ? (
                                    <button type="button" onClick={()=> deleteImage(image)} className="flex items-center justify-center  size-6 rounded-sm absolute right-1 top-1 text-white bg-red-400 cursor-pointer">
                                        <IoTrashOutline className="size-4 text-white" />
                                    </button>
                                ): (
                                    <div className="flex flex-col items-center justify-center">
                                    <IoCloudUploadOutline className="size-8" />
                                    <p className="mb-1 text-sm font-bold"></p >
                                    {message ? (
                                    <p className="text-xs text-red-500">{message}</p>  
                                    ): (
                                        <p className="text-xs">SVG, PNG, JPG, GIF, or Others (Max : 4MB) </p>
                                    )}
                                </div>
                                )}
                        </div>
                        {!image ? (
                            <input type="file" ref={inputFileRef} onChange={handleUpload} id="input-file" className="hidden"/>
                        ): (
                            <Image src={image} alt="image" width={640} height={360} className="rounded-md absolute aspect-video object-cover" />
                        ) }
                    </label>
                    <div className="mb-4">
                        <input type="text" name="capacity" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Capacity..."  />
                        <div aria-live="polite" aria-atomic="true" >
                            <span className="text-sm text-red-500 mt-2">message</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input type="text" name="price" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Price..."  />
                        <div aria-live="polite" aria-atomic="true" >
                            <span className="text-sm text-red-500 mt-2">message</span>
                        </div>
                    </div>
                    <button type="submit" className="bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-10 text-lg font-semibold cursor-pointer">Save</button>
                </div>
            </div>
        </form>
    )
}

export default CreateForm ;