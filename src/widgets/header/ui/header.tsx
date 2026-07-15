import { FC } from "react";
import HeaderAccount from "./components/headerAccount";
import { SearchBar } from "@/features/searchBar";

const Header: FC = () => {
    return(
        <header
            className="
                fixed
                z-[1000]
                top-[0px]
                left-[0px]
                bg-[white]
                h-[80px]
                w-[100%]
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