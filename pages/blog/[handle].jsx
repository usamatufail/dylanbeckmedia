import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "~/components";
import { blogData } from "~/data/blog";

const BlogPost = ({
  title = "Difference between Sewers and Drains",
  image = "/blog-1.png",
  date = "04/19/2023",
  shortText = `
    Sewers and drains are two different systems that are used for managing and transporting wastewater and rainwater respectively.
  Sewers are underground pipes or channels that are designed to carry sewage and other wastewater away from homes, buildings, and other structures. They are typically connected to a municipal sewage treatment plant, where the wastewater is treated and cleaned before being discharged into the environment.
  Drains, on the other hand, are typically open channels or pipes that are designed to carry rainwater and other surface water away from buildings and other structures. They are usually connected to a stormwater system, which is designed to prevent flooding by diverting rainwater away from populated areas and into rivers or other bodies of water.
    `,
  longText = ``,
  handle = "",
}) => {
  const router = useRouter();
  return (
    <div className="grid px-[20px] gap-[45px] max-w-[1440px] items-center justify-center">
      {/* Image */}
      <div>
        <img
          src={image}
          alt="Dylan Beck Media"
          className="w-full h-[500px] object-contain rounded-[8px]"
        />
      </div>
      {/* Text */}
      <div>
        <h2 className="text-[38px] text-center md:text-[32px] font-body text-[#fff] font-[600] mb-0">
          {title}
        </h2>
        <p className="text-[rgba(255,255,255,0.7)] text-center text-[14px] mt-[20px]">
          {date}
        </p>
        <p className="mt-[20px] text-[18px] text-[rgba(255,255,255,0.7)] text-center whitespace-pre-wrap">
          {longText}
        </p>
        <button
          className="mt-[20px] text-[18px] underline text-[rgba(255,255,255,0.7)]"
          onClick={() => router.push("/blog")}
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default function Post() {
  const [data, setData] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const ogBlog = blogData.find((el) => el?.handle === router.query.handle);
    setData(ogBlog);
  }, [router]);

  console.log(data);

  return (
    <>
      {data?.title ? (
        <Layout>
          <section className="min-h-[1050px] bg-[url('/blog-bg1.png')] z-0 -mt-[120px] relative bg-cover bg-no-repeat flex flex-col gap-[50px] justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px] py-[30px]">
            {/* <Banner heading={data?.title} bg="/careersBg.png" /> */}
            <div className="text-center items-center w-full flex justify-center mt-[160px] mb-[40px]">
              <BlogPost {...data} />
            </div>
          </section>
          <div className="w-full h-[2px] bg-[#0FF]" />
        </Layout>
      ) : (
        <></>
      )}
    </>
  );
}
