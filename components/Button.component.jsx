import Link from "next/link";

export const Button = ({ onClick, navy }) => {
  return (
    <Link href="/inquire">
      <button
        onClick={onClick}
        className={`${
          navy
            ? "bg-[#1AC2FA] border-[#1AC2FA] "
            : "bg-[#031221] border-[#031221] "
        } text-white 
          font-[500]
        text-[18px] p-[1.5rem] border border-solid  rounded-[8px] px-[40px] md:px-[40px] md:py-[20px]`}
      >
        Inqure Now
      </button>
    </Link>
  );
};
