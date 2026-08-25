import { FC } from "react";
import { SearchBar } from "@/features/searchBar";
import HeaderAuth from "./components/headerAuth";

const Header: FC = () => {
    return(
        <header
            className="
                sticky
                hidden
                px-[16px]
                z-[1000]
                top-[0px]
                left-[70px]
                bg-[white]
                h-[80px]
                w-[100%]
                flex
                items-center
                gap-[10px]
                
                lg:flex
            "
        >
            <SearchBar />

            <HeaderAuth />
        </header>
    )
}

export default Header