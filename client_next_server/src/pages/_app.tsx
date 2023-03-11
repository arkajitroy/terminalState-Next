import "@/styles/globals.css";
import type { AppProps } from "next/app";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans">
        <Navbar />

        <main className="pb-40">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}
