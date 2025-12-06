import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/widgets/header';
import './globals.css'
import { SideBar } from '@/widgets/sideBar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

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
            <body className={`
                grid grid-rows-[auto_1fr] grid-cols-[80px_auto]
                ${geistSans.variable} 
                ${geistMono.variable} 
                antialiased`}
            >
                <SideBar />
                <Header />

                <div className="
                    top-[80px]
                    relative
                    row-start-2 row-end-2
                    col-start-2 col-end-2
                ">
                    {children}
                </div>

            </body>
        </html>
    );
}
