'use client'

import { Button } from "@/shared/ui/button"
import { SearchBar } from "@/widgets/searchBar"
import { FC } from "react"
import HeaderAccount from "../components/headerAccount"

const Header: FC = () => {
    return (
        <header
            className="
                fixed
                items-center
                left-[80px]
                w-[calc(100%-80px)]
                flex
                gap-[10px]
                h-[80px]
                row-start-1 row-end-2
                col-start-2 col-end-3
                bg-[white]
                px-[20px]
                text-[16px]
                z-1
            "
        >
            <SearchBar />
            <HeaderAccount />
        </header>
    )
}

export default Header
