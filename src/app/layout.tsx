"use client"
import './globals.css'
import Navbar from './components/Navbar';
import { ThemeProvider } from 'next-themes';
import Footer from './components/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>  
        <ThemeProvider  enableSystem={true} attribute="class">
        <Navbar/>
   
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
