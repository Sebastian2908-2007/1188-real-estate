import './globals.css';
//import { Inter } from 'next/font/google';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
//const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: '2908 Real Estate',
  description: 'Sell your house fast with 2908 Real Estate',
  manifest:'/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    
      <body className='myBody bg-gradient-to-r from-sitelteblu to-sitedrkblu'>
      <Heading/>
      <main>
        {children} 
      </main>
        <Footer/>
      </body>
      
    </html>
  )
}

/**green #a2d033 dark blue #143c64 light blue #62b2cb  */
