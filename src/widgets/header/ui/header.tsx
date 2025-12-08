'use client'

import { SearchBar } from "@/widgets/searchBar"
import { FC } from "react"

const Header: FC = () => {
    return (
        <header
            className="
                fixed
                left-[80px]
                w-[calc(100%-80px)]
                flex
                row-start-1 row-end-2
                col-start-2 col-end-3
                bg-[green]
                px-[20px]
            "
        >
            <SearchBar />
        </header>
    )
}

export default Header
