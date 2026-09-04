'use client'
import ImageSVG from "@/shared/assets/controlledSVG/imageSVG";
import { IMAGE_ACCEPT } from "@/shared/constants/mediaAccept";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

import { ChangeEvent, FC, useState } from "react";

const PinImageUpload: FC = () => {

    const [images, setImages] = useState<string[]>([])
    const [imageFiles, setImageFiles] = useState<File[]>([])

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (!files) return

        const newFiles = Array.from(files).filter(file =>
            !imageFiles.some(
                existingFile =>
                    existingFile.name === file.name &&
                    existingFile.size === file.size &&
                    existingFile.lastModified === file.lastModified
            )
        )

        if (!newFiles.length) {
            event.target.value = ""
            return
        }

        setImageFiles(prev => [...prev, ...newFiles])

        newFiles.forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                if (typeof reader.result !== "string") return

                setImages(prev => [...prev, reader.result])
            }

            reader.readAsDataURL(file)
        })

        event.target.value = ""
    }

    const handleDeleteImage = (src: string) => {
        const index = images.indexOf(src)

        if (index === -1) return

        setImages(prev => prev.filter((_, i) => i !== index))
        setImageFiles(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="flex flex-col gap-[12px]">
            <div
                className="
                    relative
                    w-[357px]
                    aspect-[357/457]
                    rounded-[24px]
                    bg-background-secondary
                    overflow-hidden
                    border-[1px]
                    border-border
                    transition-colors
                    duration-200
                    ease-[cubic-bezier(0.2,0,0,1)]

                    hover:bg-background-hover
                    active:bg-background-active
                "
            >
                <div
                    className="
                        h-full
                        flex
                        flex-col
                        items-center
                        justify-center
                    "
                >
                    <ImageSVG />

                    <span
                        className="
                            font-[600]
                            mt-[12px]
                            text-text-default
                        "
                    >
                        Загрузите медиафайлы
                    </span>

                    <span
                        className="
                            mt-[10px]
                            w-[70%]
                            text-center
                            text-text-light
                        "
                    >
                        Выберите несколько файлов в проводнике, используя клавиши Shift или Cmd/Ctrl
                    </span>
                </div>

                <input
                    type="file"
                    accept={IMAGE_ACCEPT}
                    multiple
                    onChange={handleImageUpload}
                    className="
                        opacity-0
                        absolute
                        top-0
                        left-0
                        w-full
                        h-full
                    "
                />
            </div>

            <div className="flex gap-[8px]">
                {images.map((src, index) => (
                    <div className="flex flex-col gap-[4px]">
                        <Image
                            key={src}
                            src={src}
                            alt={`uploaded image ${index + 1}`}
                            width={30}
                            height={30}
                        />
                        <Button
                            onClick={() => handleDeleteImage(src)}
                        >
                            delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PinImageUpload;