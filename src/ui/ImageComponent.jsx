import Image from "next/image";


export default function ImageComponent({ src, alt, width, height, className="" }) {

    return (
        <div className={`${className}`}>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}
