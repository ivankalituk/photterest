import { FC } from "react";

interface Props{
    active?: boolean
}

const SearchSVG: FC <Props> = ({active}) => {
    if (active){
        return <svg aria-label="Поиск"  height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M17.33 18.74a10 10 0 1 1 1.41-1.41l4.47 4.47-1.41 1.41zM11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16"></path></svg>
    } else {
        return <svg aria-label="Поиск" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M17.33 18.74a10 10 0 1 1 1.41-1.41l4.47 4.47-1.41 1.41zM11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16"></path></svg>
    }
}

export default SearchSVG