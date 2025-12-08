import type { Metadata } from 'next';
import { Header } from '@/widgets/header';
import './globals.css'
import { SideBar } from '@/widgets/sideBar';

export const metadata: Metadata = {
    title: 'Photterest',
    description: 'Pet project, copy of pinterest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
                        "
                    >{children}</div>
                </div>
            </body>
        </html>
    );
}
