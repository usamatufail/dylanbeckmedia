import Head from "next/head";
import JotformEmbed from "react-jotform-embed";
import { Footer } from "~/components/Footer.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elite Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/192x192.png" />
      </Head>
      <div className="form-container" id="form-container">
        <JotformEmbed
          src="https://form.jotform.com/231944429068463"
          style={{ height: "120vh" }}
        />
      </div>
      <Footer />
    </>
  );
}
