import SearchSVG from "@/shared/assets/controlledSVG/searchSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import PhotoSearch from "@/shared/assets/controlledSVG/photoSearch";


const SearchBar: FC = () => {
    return(
        <div>
            <SearchSVG />
            
            <input type="text" />

            <Button>
                <PhotoSearch />
                {false && <img src="" alt="cross" />}
            </Button>
        </div>
    )
}

export default SearchBar