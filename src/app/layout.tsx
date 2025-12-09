import type { Metadata } from 'next';
import { Header } from '@/widgets/header';
import './globals.css'
import { SideBar } from '@/widgets/sideBar';
export const metadata: Metadata = {
    title: 'Photterest',
    description: 'Pet project, copy of pinterest',
};
import { Roboto_Flex } from 'next/font/google';


const roboto = Roboto_Flex({
    subsets: ['latin', 'cyrillic'],
    weight: ['100','300','400','500','700','900'], 
    style: ['normal'],
    variable: '--font-roboto',
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en" className={roboto.className}>
            <body>

                <div className='
                    grid grid-rows-[auto_1fr] grid-cols-[80px_auto]
                '>
                    <SideBar />
                    <Header />
                    

                    <div 
                        className="
                            row-start-2
                            col-start-2
                            relative
                            top-[80px]
                            "
                    >{children}</div>
                </div>
            </body>
        </html>
    );
}
