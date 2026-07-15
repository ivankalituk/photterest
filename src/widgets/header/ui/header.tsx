import { FC } from "react";
import HeaderAccount from "./components/headerAccount";
import { SearchBar } from "@/features/searchBar";

const Header: FC = () => {
    return(
        <header
            className="
                fixed
                px-[16px]
                z-[1000]
                top-[0px]
                left-[70px]
                bg-[white]
                h-[80px]
                w-[calc(100%-70px)]
                flex
                items-center
                gap-[10px]
            "
        >
            <SearchBar />    

            <HeaderAccount />
        </header>
    )
}

export default Header