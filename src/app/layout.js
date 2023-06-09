import { Roboto } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import ThemeProvider from '@/context/ThemeContext';
import Footer from '@/components/footer/Footer';
import './globals.scss';
import AuthProvider from '@/components/authProvider/AuthProvider';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Esteem Designs',
  description: 'This Esteem Designs',
  keywords: 'blog, posts, portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
