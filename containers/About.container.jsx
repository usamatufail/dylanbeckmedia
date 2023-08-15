/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Element } from "react-scroll";
import { Animate, Buy, Zoom } from "~/components";

export const About = () => {
  return (
    <Element>
      <section
        className="min-h-[750px] md:min-h-[850px] bg-[url('/about-bg.png')] relative bg-cover bg-no-repeat flex flex-col justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px] py-[30px]"
        id="about"
      >
        <div className="w-[350px] md:w-[950px] h-[300px] md:h-[550px]">
          <iframe
            width="100%"
            height="100%"
            autoplay
            src="https://www.youtube.com/embed/Wrih5wNyDJM?autoplay=1&loop=1"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-[40%_60%] justify-center items-center gap-[20px] md:gap-[50px] max-w-[1300px] m-auto pt-[30px]">
          <Zoom>
            <img src="/about-img.webp" alt="Dylan" className="rounded-[16px]" />
          </Zoom>
          <div className="font-body flex flex-col gap-[10px]">
            <Animate>
              <p className="text-[#F8F9FA] text-[28px] md:text-[52px] font-body font-[500]">
                Our Services
              </p>
            </Animate>
            <Animate>
              <p className="text-[#555758] text-[18px] md:text-[30px] font-body leading-[1.125] font-[400]">
                We provide wide range of innovative tech solutions for building
                all kinds of applications.
              </p>
            </Animate>
            <Animate>
              <p className="text-[#fff] font-[400] text-[16px] pb-[10px]">
                We offer Elite Graphic Design services including branding, UI/UX
                design, Marketing solutions including lead generation, social
                media management, high-end multimedia creation etc. We also
                offer Web & Mobile app development, NFT art, and branding
                services. Count on our knowledgeable staff to increase your
                brand’s visibility and effect on all platforms.
              </p>
            </Animate>
            <div className=" flex justify-center md:justify-start">
              <Zoom>
                <Link href="/services">
                  <div className="py-[10px] cursor-pointer">
                    <span className="bg-[#00B7FF] px-[22px] py-[14px] rounded-[40px] flex gap-[8px] justify-center items-center text-[#000] text-[14px] font-body font-[500] border-[5px] border-solid border-[rgba(0,0,0,0.7)] w-full shadow-sm">
                      Our Servives
                      <img src="/svg/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </Link>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Element>
  );
};
