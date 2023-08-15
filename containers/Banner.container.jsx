import { Animate, Buy, Zoom } from "~/components";

export const Banner = () => {
  return (
    <>
      <section className="min-h-[750px] md:min-h-[850px]  bg-[url('/banner-bg.png')] bg-cover bg-no-repeat bg-right  md:bg-bottom relative z-0 -mt-[120px] flex flex-col justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px]">
        <div className="font-body flex flex-col justify-center items-center gap-[40px] pt-[50px] lg:pt-[100px]">
          <Animate>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[50px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] w-[120px] flex justify-center">
              <p className="text-[#fff] text-center font-body font-[400] text-[16px]">
                Welcome!
              </p>
            </div>
          </Animate>
          <Animate>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[20px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] flex flex-col gap-[15px] justify-center">
              <p className="text-[#555758] text-center font-body font-[400] text-[16px]">
                Verified By
              </p>
              <div className="flex gap-[18px] justify-center">
                <a href="https://www.forbes.com.au/life/brand-voice/dylan-beck-media-dbm-the-global-authority-in-digital-marketing/">
                  <img
                    src="/svg/forbes.svg"
                    alt="Forbes"
                    className="cursor-pointer"
                  />
                </a>
                <a href="https://www.entrepreneur.com/en-in/author/dylan-beck">
                  <img
                    src="/svg/enter.svg"
                    alt="Entrepreneur"
                    className="cursor-pointer"
                  />
                </a>
                <a href="https://finance.yahoo.com/news/dylanbeckmedia-successfully-scaled-over-1-193000955.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAD29sKZ_wlv0ZXw5g8PZ76HuMQZFf6WKcn4rtp9Sj4FzVfVA6P5hEbcsH22LAPwrCNpvOrDYSwbUsfdwhT21qkaGT-Yba5cdiGL3LkFdXG8yNlIRvAeASO-1o-heoxLz3U4_1Ns1sETNH0Byjqt60sbxF4Zhp-X-pFBZbGwZ_bBa">
                  <img
                    src="/svg/yahoo.svg"
                    alt="Yahoo"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </Animate>
          <div className="flex flex-col gap-[10px]">
            <Animate>
              <h1 className="text-[#00B7FF] text-[28px] md:text-[62px] font-[500] font-body leading-[1.5] text-center">
                World-Class Digital Marketing Solutions
              </h1>
            </Animate>
            <Animate>
              <h1 className="text-[#F8F9FA] text-[28px] md:text-[62px] font-[500] font-body leading-[1.125] text-center">
                Honor, Creativity, Innovation
              </h1>
            </Animate>
          </div>
          <Animate>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[50px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] flex justify-center">
              <p className="text-[#fff] text-center font-body font-[400] text-[16px]">
                Turning your ideas into a reality.
              </p>
            </div>
          </Animate>
          <div>
            <Zoom>
              <Buy />
            </Zoom>
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </>
  );
};
