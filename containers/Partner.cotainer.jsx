import Marquee from "react-fast-marquee";
import { Element } from "react-scroll";
import { Animate, Zoom } from "~/components";

export const Partner = () => {
  return (
    <Element className="element">
      <section
        className="md:min-h-[300px] bg-[url('/part-bg.png')] bg-cover bg-no-repeat py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[30px] justify-center items-center"
        id="aprtner"
      >
        <div className="font-body flex flex-col justify-center items-center gap-[40px]">
          <Animate>
            <h1 className="text-[#000] letter-border text-[28px] md:text-[62px] font-[500] font-body text-center">
              Our Reputed World Wide Partners
            </h1>
          </Animate>
        </div>
        <div className="md:px-[80px] overflow-hidden max-w-[1300px] m-auto">
          <Marquee pauseOnHover gradient={false} speed={40}>
            <div className="flex gap-[10px] pl-[10px]">
              {/* <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/4d2369e10ced468694ce6d3442d66de6.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806175/iTorus/cream0241-0480_saz6hc.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/a4d8776e0d1b4c6792a0d35401d3a4d3.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806188/iTorus/green0001-0240_nvusas.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/6c94b85c869d488e8da51f540cd9fb43.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806201/iTorus/purple0001-0240_fawidw.webm"
                  type="video/mp4"
                />
              </video>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="w-[250px] lg:w-[500px]"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
                  type='video/mp4; codecs="hvc1"'
                ></source>
                <source
                  src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                  type="video/mp4"
                />
              </video> */}

              <img src="/ibm.png" alt="" className="w-[120px] md:w-[210px]" />
              <img src="/bmw.png" alt="" className="w-[120px] md:w-[210px]" />
              <img src="/puma.png" alt="" className="w-[120px] md:w-[210px]" />
              <img src="/intel.png" alt="" className="w-[120px] md:w-[210px]" />
              <img src="/mer.png" alt="" className="w-[120px] md:w-[210px]" />
            </div>
          </Marquee>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Element>
  );
};
