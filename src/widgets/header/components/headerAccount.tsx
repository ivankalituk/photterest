import { FC } from "react";
import avatarSample from '@/shared/assets/images/userAvatarSample.jpg'
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import tick from '@/shared/assets/icons/fullTick.svg'
const HeaderAccount: FC = () => {
    return(
        <div className="
            flex
            gap-[10px]
            items-center
        ">
            <Button type="ELEMENT">
                <Link href='/profile'>
                    <Image 
                        src={avatarSample} 
                        alt="avatar" 
                        className="
                        
                            w-[55px]
                            object-cover
                            rounded-full
                            aspect-[1/1]
                            p-[5px]
                            
                            hover:bg-grey-light
                            transition-colors duration: 250
                            no-drag
                        " 
                    />
                </Link>
            </Button>
            
            <Button 
                type="WHITE" 
                className="
                    w-[30px] 
                    h-[30px] 
                    rounded-[4px] 
                    flex
                    items-center
                    justify-center
                "
            >
                <Image src={tick} alt="tick"/>
            </Button>


        </div>
    )
}

export default HeaderAccount