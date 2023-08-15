export const Buy = ({ text = "Book A Call" }) => {
  return (
    <a href="https://calendly.com/dylanriverbeck/30min">
      <div className="py-[10px] cursor-pointer">
        <span className="bg-[#00B7FF] px-[22px] py-[14px] rounded-[40px] flex gap-[8px] justify-center items-center text-[#000] text-[14px] font-body font-[500] border-[5px] border-solid border-[rgba(0,0,0,0.7)] w-full shadow-sm">
          {text}
          <img src="/svg/arrow.svg" alt="arrow" />
        </span>
      </div>
    </a>
  );
};
