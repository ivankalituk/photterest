import StickyBoards from './components/stickyBoards'
import './globals.css'

export default function Home() {
    return (
        <div className='
                relative
                bg-[red]
                h-[10000px]
                px-[16px]    
            '
        >
            {/* сделать колбек с выбором */}
            <StickyBoards />


        </div>
    )
}
