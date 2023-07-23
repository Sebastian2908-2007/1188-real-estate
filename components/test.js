'use client'
import Image from "next/image"
import wasatch from '../public/wasatch.jpg'
export default function Test () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
        <Image
        src={wasatch}
        alt="wasatch front"
        />
        </div>
    )
};