import { Element } from "react-scroll";
import { Animate, Zoom } from "~/components";

export const Blog = () => {
  return (
    <Element className="element">
      <section
        className="md:min-h-[300px] bg-[url('/part-bg.png')] bg-cover bg-no-repeat py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[30px] justify-center items-center"
        id="aprtner"
      >
        <div className="font-body flex flex-col md:grid md:grid-cols-[35%_65%] justify-center items-center gap-[40px]">
          <div className="flex flex-col gap-[12px]">
            <Animate>
              <h1 className="text-[#000] letter-border text-[28px] md:text-[62px] font-[500] font-body text-center">
                Our Reputed World Wide Partners
              </h1>
            </Animate>
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Element>
  );
};
