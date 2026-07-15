import SearchSVG from "@/shared/assets/controlledSVG/searchSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import PhotoSearch from "@/shared/assets/controlledSVG/photoSearch";
import { Input } from "@/shared/ui/input";


const SearchBar: FC = () => {
    return(
        <div
            className="
                flex
                bg-grey-light
                flex-1
                items-center
                justify-between
                gap-[10px]
                h-[48px]
                pl-[16px]
                rounded-[12px]
            "
        >
            <SearchSVG />

            <Input 
                className="
                    flex-1
                    bg-[green]
                    h-[100%]
                "
                
            />

            <Button>
                <PhotoSearch />
                {false && <img src="" alt="cross" />}
            </Button>
        </div>
    )
}

export default SearchBar