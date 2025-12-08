'use client'

import { SearchBar } from "@/widgets/searchBar"
import { FC } from "react"

const Header: FC = () => {
    return (
        <header
            className="
                fixed
                items-center
                left-[80px]
                w-[calc(100%-80px)]
                flex
                h-[80px]
                row-start-1 row-end-2
                col-start-2 col-end-3
                bg-[white]
                px-[20px]
                text-[16px]
            "
        >
            <SearchBar />
        </header>
    )
}

export default Header
