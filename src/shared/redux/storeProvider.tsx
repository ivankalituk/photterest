"use client"

import { FC, ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import { AppStore, makeStore } from "./store"

interface Props {
    children: ReactNode
}

const StoreProvider: FC <Props> = ({children}) => {

    const storeRef = useRef<AppStore | null>(null)

    if(!storeRef.current){
        storeRef.current = makeStore()
    }

    return(
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default StoreProvider