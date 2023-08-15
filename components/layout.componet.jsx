import Head from "next/head";
import { Navbar } from "./Navbar.component";
import { Footer } from "./Footer.component";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dylan Beck Media</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
