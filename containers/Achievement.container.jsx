import { Element } from "react-scroll";
import { Animate, Zoom } from "~/components";
import { CountUp } from "use-count-up";
import { useInView } from "react-intersection-observer";

const data = [
  {
    heading: 110,
    text: "Team Members",
  },
  {
    heading: 100,
    text: "Success Rate",
  },
  {
    heading: 1650,
    text: "Delivered Projects",
  },
  {
    heading: 22,
    text: "Years of Experience",
  },
];

export const Achievement = () => {
  return (
    <Element>
      <section
        className="min-h-[650px] md:min-h-[600px] bg-[url('/achive-bg.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px]"
        id="projects"
      >
        <div className="font-body flex flex-col justify-center items-center gap-[40px]">
          <Animate>
            <h1 className="text-[#fff] text-[28px] md:text-[62px] font-[500] font-body leading-[1.125] text-center">
              Achievements
            </h1>
          </Animate>
          <Animate>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[50px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] flex justify-center">
              <p className="text-[#555758] text-center font-body font-[400] text-[16px]">
                We&apos;re proud of our journey
              </p>
            </div>
          </Animate>
          <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-[40px] pb-[20px]">
            {data.map((el, idx) => {
              return (
                <div key={idx}>
                  <Card heading={el.heading} text={el.text} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Element>
  );
};

const Card = ({ heading, text }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div
      className="flex justify-center items-center bg-[rgba(255,255,255,0.03)] rounded-[20px] border-[1px] border-solid border-[#0FF] w-[150px] h-[150px] md:w-[300px] md:h-[200px]"
      ref={ref}
    >
      <div className="flex flex-col gap-[2px] md:gap-[4px] text-[#fff] ">
        <Animate>
          <h1 className="text-[#fff] font-body text-[30px] md:text-[40px] font-[700] text-center">
            <CountUp
              isCounting={inView}
              end={heading}
              duration={2.2}
              thousandsSeparator=","
            />
            +
          </h1>
        </Animate>
        <Animate>
          <p className="text-[#b6b9ba] font-body text-[16px] md:text-[20px] font-[400] text-center">
            {text}
          </p>
        </Animate>
      </div>
    </div>
  );
};
