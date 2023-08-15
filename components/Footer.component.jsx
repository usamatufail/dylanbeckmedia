import { Element, Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import NextLink from "next/link";
import { Animate, Zoom } from "./Animate.component";
import { useRouter } from "next/router";
import { Buy } from "./Buy.component";
const linkData = [
  {
    link: "Home",
    to: "/",
  },
  {
    link: "Services",
    to: "/services",
  },

  {
    link: "Blog",
    to: "/blog",
  },
  {
    link: "Contact",
    to: "https://calendly.com/dylanriverbeck/30min",
  },
];

export const Footer = () => {
  return (
    <Element>
      <section
        id="contact"
        className="min-h-[450px] bg-[url('/footer.png')] bg-no-repeat md:bg-top bg-cover py-[30px] px-[20px] md:pt-[120px] md:px-[80px] flex flex-col gap-[50px]"
      >
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <Zoom>
            <Link href="/" className="cursor-pointer">
              <img
                src="/logo.png"
                alt="footer"
                className="w-[120px] md:w-[200px]"
              />
            </Link>
          </Zoom>
          <Animate>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[50px] px-[20px] py-[10px] border-[1px] border-solid border-[#0FF] flex justify-center">
              <p className="text-[#b6b9ba] text-center font-body font-[400] text-[16px]">
                Your Digital Partner.
              </p>
            </div>
          </Animate>
        </div>
        <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-[20px] md:gap-[150px] items-center">
          <Links />

          <div />
          <div className="flex flex-col items-center md:items-center gap-[20px]">
            <div className="flex gap-[10px]">
              <Zoom>
                <a href="" className="corsur-pointer">
                  <img src="/svg/twiter.svg" alt="Twiter" />
                </a>
              </Zoom>
              <Zoom>
                <a href="https://www.instagram.com/dylanriverbeck/?hl=en">
                  <img src="/svg/insta.svg" alt="insta" />
                </a>
              </Zoom>
              <Zoom>
                <a href="https://www.facebook.com/dylanriverbeck/">
                  <img src="/svg/fb.svg" alt="fb" />
                </a>
              </Zoom>
              <Zoom>
                <a href="https://www.linkedin.com/in/dylan-river-beck-6897131a4/">
                  <img src="/svg/in.svg" alt="in" />
                </a>
              </Zoom>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-[20px] md:gap-[150px] items-center">
          <div />
          <Animate>
            <p className="text-[#8a8a8a] text-center font-body font-[400] text-[14px]">
              © 2023 Dylan Beck Media. All rights reserved.
            </p>
          </Animate>
          <Animate>
            <p className="text-[#8a8a8a] text-center font-body font-[400] text-[14px]">
              Based in Los Angeles, California.
            </p>
          </Animate>
        </div>
      </section>
    </Element>
  );
};

export const Links = ({ isMobile = false, onClick = () => {} }) => {
  const linkClass = ` text-[1.6rem] md:px-[10px] md:py-[8px] text-[#8a8a8a] font-[500] cursor-pointer font-body transition-all duration-500 flex items-center rounded-[50px] border-[1px] border-solid border-transparent bg-transparent`;
  const hoverClass = ` hover:text-[#fff] hover:font-[600] hover:bg-[rgba(255,255,255,0.05)] hover:transition-all hover:border-[rgba(255,255,255,0.10)]`;
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col text-[1.6rem] font-body font-medium navbar gap-[20px]"
          : "bg-[rgba(255,255,255,0.05)] rounded-[50px] p-[6px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] shadow-[0px_15px_20px_0px_rgba(11,13,16,0.10)]"
      } gap-[20px] justify-center items-center `}
    >
      {linkData.map((link) => {
        return (
          <>
            {router.pathname === "/inquire" ? (
              <NextLink href="/" className={`${linkClass} ${hoverClass}`}>
                {link?.link}
              </NextLink>
            ) : (
              <NextLink
                key={link?.link}
                href={link.to}
                activeClass="active"
                className={`${linkClass} ${hoverClass}`}
                onClick={onClick}
                // spy={true}
                // smooth={true}
                // duration={500}
              >
                {link?.link}
              </NextLink>
            )}
          </>
        );
      })}
    </div>
  );
};
