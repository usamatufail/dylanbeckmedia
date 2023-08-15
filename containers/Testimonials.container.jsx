import { Animate } from "~/components";

export const Testimonials = () => {
  return (
    <>
      <section className="md:min-h-[300px] bg-[url('/part-bg.png')] bg-cover bg-no-repeat py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[30px] justify-center items-center">
        <div className="font-body flex flex-col justify-center items-center md:gap-[40px]">
          <Animate>
            <h1 className="text-[#fff] text-[28px] md:text-[62px] font-[500] font-body text-center">
              Testimonials
            </h1>
          </Animate>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-[1.5rem] md:gap-[20px] pb-[20px]">
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056369/y2mate.com_-_Copy_of_63381f27ae444430ab0fa78b0c2a3ff1_1080p.mp4_x5uhl6.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test1.png" />
          </a>
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056370/y2mate.com_-_Copy_of_IMG_3429_1080p.mp4_pyiek5.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test2.png" />
          </a>
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056371/y2mate.com_-_69033460903_998CD276_F378_4D24_8CC4_C706A998D599_1080p.mp4_dyniau.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test3.png" />
          </a>
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056371/y2mate.com_-_josh_123_1080p.mp4_gcek4q.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test4.png" />
          </a>
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056373/Copy_of_IMG_9949.mp4_tdclru.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test5.png" />
          </a>
          <a
            href="https://res.cloudinary.com/dfy77jd7z/video/upload/v1692056373/y2mate.com_-_Copy_of_IMG_8365_480p.mp4_i6wyum.mp4"
            target="_blank"
            rel="noreferrer"
          >
            <Card img="/test6.png" />
          </a>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </>
  );
};

const Card = ({ img = "" }) => {
  return (
    <div
      className="md:min-h-[35rem] md:min-w-[40rem] min-h-[26rem] min-w-[350px] rounded-[2rem] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <button>
        <img src="/svg/play.svg" alt="play-button" />
      </button>
    </div>
  );
};
