import '@/styles/globals.css'
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import { CartContextProvider } from '../lib/CartContext';
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

const inter = Poppins({
  subsets: ['latin'],
  weight: '500'
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        <main className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto bg-background sm:px-6`}>
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
              <ScaleLoader color="#3643b5"  />
            </div>
          ) : (
            <>
              <Header />
              <Toaster position='top-center' />
              <Component {...pageProps} className="sm:mt-36" />
            </>
          )}
        </main>
      </CartContextProvider>
    </SessionProvider>
  );
}
