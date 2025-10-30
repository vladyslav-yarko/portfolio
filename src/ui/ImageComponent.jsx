import Image from "next/image";


export default function ImageComponent({ src, alt, className="" }) {

    return (
        <div className={`${className}`}>
            <Image 
                src={src}
                alt={alt}
                fill
            />
        </div>
    )
}
