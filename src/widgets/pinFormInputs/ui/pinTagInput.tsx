'use client'
import { FC, useState } from "react";
import PinField from "./components/pinField";
import { Input } from "@/shared/ui/input";
import PinTagsSearch from "./components/pinTagsSearch";
import { AnimatePresence } from "framer-motion";

const PinTagInput: FC = () => {
    
    const [listVisible, setListVisible] = useState<boolean>(false)

    return(
        <div
            className="relative"
        >
            <PinField name="tag">
                <Input 
                    placeholder="Введите тег"
                    className="
                        w-[100%]
                    "
                    onFocus = {() => setListVisible(true)}
                    onBlur={() => setListVisible(false)}
                />
            </PinField>
            
            <AnimatePresence>
                {listVisible && <PinTagsSearch />}
            </AnimatePresence>
        </div>
    )
}

export default PinTagInput