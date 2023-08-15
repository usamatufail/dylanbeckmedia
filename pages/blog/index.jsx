import { useRouter } from "next/router";
import { Animate, Layout } from "~/components";
import { blogData } from "~/data/blog";

const BlogPost = ({ title, image, date, shortText, handle }) => {
  const router = useRouter();
  return (
    <div className="bg-[/blog-bg.png]">
      <div className="flex flex-col gap-[20px] md:gap-[65px] md:px-[20px] items-center justify-center md:h-[770px]">
        {/* Image */}
        <div className="rounded-[12px]">
          <img
            src={image}
            alt="Dylan Beck Media"
            className="w-[450px] h-[450px] rounded-[8px]  md:object-cover object-bottom"
          />
        </div>
        {/* Text */}
        <div>
          <Animate>
            <p className="text-[rgba(255,255,255,0.7)] text-center md:text-left text-[14px] pb-[5px]">
              {date}
            </p>
          </Animate>
          <h2 className="text-[20px] text-center md:text-left md:text-[26px] font-body text-[#fff] font-[600] md:h-[85px] leading-[1.190]">
            {title}
          </h2>
          <Animate>
            <p className="mt-[20px] text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.180] text-center md:text-left md:h-[150px]">
              {shortText}
            </p>
          </Animate>
          <button
            className="mt-[10px] text-[18px] w-full text-center md:text-left underline text-[#6799FD]"
            onClick={() => router.push(`/blog/${handle}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[1050px] bg-[url('/service-bg.png')] z-0 -mt-[130px] relative bg-cover bg-no-repeat flex flex-col gap-[20px] md:gap-[50px] justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px] py-[30px]">
        <Animate>
          <h1 className="text-[#fff] text-[28px] md:text-[62px] font-[500] font-body text-center mt-[90px] md:mt-[150px]">
            Our Blogs
          </h1>
        </Animate>
        <div className="md:mt-[40px] mb-[40px] grid md:grid-cols-3 justify-center items-center gap-[50px]">
          {blogData.map((el) => {
            return <BlogPost key={el.title} {...el} />;
          })}
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Layout>
  );
}
