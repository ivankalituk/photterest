'use client'
import { FC, useRef, useState } from "react";
import PinField from "./components/pinField";
import { Input } from "@/shared/ui/input";
import PinTagsSearch from "./components/pinTagsSearch";
import { AnimatePresence } from "framer-motion";

const PinTagInput: FC = () => {
    
    const [listVisible, setListVisible] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)
    return(
        <div
            className="relative"
            ref={containerRef}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setListVisible(false)
                }
            }}
        >
            <PinField name="tag">
                <Input 
                    placeholder="Введите тег"
                    className="
                        w-[100%]
                    "
                    onFocus = {() => setListVisible(true)}
                />
            </PinField>
            
            <AnimatePresence>
                {listVisible && <PinTagsSearch />}
            </AnimatePresence>
        </div>
    )
}

export default PinTagInput