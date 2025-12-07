import { FC } from "react";
import searchIcon from '@/shared/assets/icons/search.svg'
import Image from "next/image";

const SearchBar: FC = () => {
    return(
        <div 
            className="

                w-[100px]
                relative
                flex-1
                h-[56px]
                bg-[rgb(241,241,241)]
            "
        >

           <Image src={searchIcon} alt="search" width={20} height={20} />
            
            <input 
                type="text" 
                className="
                    w-[100px]
                    h-[100%]
                    absolute
                    inset-0
                    outline-none
                "
            />
        </div>
    )
}

export default SearchBar