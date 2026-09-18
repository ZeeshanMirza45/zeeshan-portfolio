import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Zeeshan Zahid — Full Stack Developer',description:'Portfolio of Zeeshan Zahid, Shopify and web developer specializing in React.js, Next.js, MERN and AI workflow automation.',metadataBase:new URL('https://example.com')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}