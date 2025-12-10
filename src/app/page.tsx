import { PinsGrid } from '@/shared/ui/pinsGrid'
import StickyBoards from './components/stickyBoards'
import './globals.css'



// по началу будут пины из доски ВСЕ
// когда юзер нажмёт на другую доску - добавим квери с айди доски
// 

export default function Home() {
    return (
        <div className='
                relative
                px-[16px]    
            '
        >
            {/* сделать колбек с выбором */}
            <StickyBoards />

            <div className='mt-[0px]'>
                <PinsGrid />
            </div>

        </div>
    )
}
