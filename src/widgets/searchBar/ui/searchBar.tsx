import { FC, useState } from "react";
import SearchSVG from "@/shared/assets/controlledSVG/searchSVG";

const SearchBar: FC = () => {

    const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false)

    return(
        <div 
            className={`
                px-[25px]
                py-[16px]
                flex
                gap-[10px]
                items-center
                h-[56px]
                relative
                flex-1
                rounded-full
                bg-grey-light
                focus-within:bg-[var(--color-grey)]
            `}
        >

           <SearchSVG color={searchBarFocus? 'var(--color-grey-light)' : 'var(--color-grey)'}/>
            
            <input 
                type="text"
                placeholder="Enter your pin..."
                onFocus={() => setSearchBarFocus(true)}
                onBlur={() => setSearchBarFocus(false)}
                className="
                    w-full
                    border-none
                    outline-none
                "
            />
        </div>
    )
}

export default SearchBar