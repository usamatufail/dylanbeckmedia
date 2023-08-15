import { Element } from "react-scroll";
import { Layout } from "~/components";
import {
  About,
  Achievement,
  Banner,
  Contact,
  Partner,
  Testimonials,
} from "~/containers";
export default function Home() {
  return (
    <Element>
      <div id="home">
        <Layout>
          <Banner />
          <About />
          <Achievement />
          <Partner />
          <Testimonials />
          {/* <Contact /> */}
        </Layout>
      </div>
    </Element>
  );
}
