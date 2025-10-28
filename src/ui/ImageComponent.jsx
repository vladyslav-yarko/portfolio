import Image from "next/image";


export default function ImageComponent({ src, alt, width, height }) {

    return (
        <div>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}
