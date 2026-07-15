import type { Metadata } from 'next';
import './globals.css'
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
                <main>{children}</main>                 
            </body>
        </html>
    );
}
