import { PinsGrid } from '@/widgets/pinsGrid'
import './globals.css'



// по началу будут пины из доски ВСЕ
// когда юзер нажмёт на другую доску - добавим квери с айди доски
// 

export default function Home() {
    return (
        <div 
            className='
                h-[1000px]
                px-[16px]
            '
        >
            <PinsGrid />
        </div>
    )
}
