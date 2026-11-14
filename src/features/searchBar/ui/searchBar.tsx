'use client'
import SearchCustomSVG from "@/shared/assets/controlledSVG/searchCustomSVG";
import { Button } from "@/shared/ui/button";
import { ChangeEvent, FC, useState } from "react";
import PhotoSearch from "@/shared/assets/controlledSVG/photoSearch";
import { Input } from "@/shared/ui/input";
import CrossCircleSVG from "@/shared/assets/controlledSVG/crossCircleSVG";
import { twMerge } from "tailwind-merge";

interface Props {
    photoSearch?: boolean
    className?: string
}

const SearchBar: FC <Props> = ({photoSearch, className}) => {

    const [text, setText] = useState<string>('')

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const onCross = () => {
        setText('')
    }

    return(
        <div
            className={twMerge(`
                flex
                bg-grey-light
                flex-1
                items-center
                justify-between
                gap-[10px]
                h-[48px]
                pl-[16px]
                rounded-[12px]
            `, className)}
        >
            <SearchCustomSVG />

            <Input
                className="
                    flex-1
                    h-[100%]
                    roboto
                "
                placeholder="Поиск"
                value = {text}
                onChange={onInputChange}
            />

            {!text && photoSearch && <Button square hover="WHITE">
                <PhotoSearch />
            </Button>}
            
            {text && <Button square hover="WHITE" onClick={onCross}>
                <CrossCircleSVG />
            </Button>}
        </div>
    )
}

export default SearchBar