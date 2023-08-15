import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import NextLink from "next/link";
import { Zoom } from "./Animate.component";
import { Drawer, useDrawer } from "./Drawer.component";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useRouter } from "next/router";
import { Buy } from "./Buy.component";
import { useCallback, useEffect, useState } from "react";

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

export const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNav = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  return (
    <nav className="md:hidden top-0 relative flex items-center justify-between px-[1rem] z-30 overflow-hidden mt-[10px] py-[10px]">
      {/* Drawer For Links */}
      <Drawer
        open={isOpen}
        openFrom="right"
        onClose={closeDrawer}
        heading="Menu"
      >
        <Links isMobile onClick={closeDrawer} />
      </Drawer>
      {/* Logo */}

      <Zoom>
        <Link href="/" className="cursor-pointer">
          <img src="/logo.png" alt="logo" className="w-[80px]" />
        </Link>
      </Zoom>
      {/* Icons */}

      <button onClick={openDrawer}>
        <HiBars3BottomRight size={35} color="white" />
      </button>
    </nav>
  );
};

export const DesktopNav = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, {});
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return (
    <nav
      className={`${
        scrollY > 30 ? "bg-[#000]" : "bg-transparent"
      } hidden md:block h-[120px] z-10 px-[100px] w-full md:px-[55px] py-[18px] sticky top-0`}
    >
      <div className="mt-[5px] flex justify-between items-center">
        <Zoom>
          <Link href="/" className="cursor-pointer">
            <img src="/logo.png" alt="logo" className="w-[100px]" />
          </Link>
        </Zoom>
        <Links />
        <Zoom>
          <Buy />
        </Zoom>
      </div>
    </nav>
  );
};

export const Links = ({ isMobile = false, onClick = () => {} }) => {
  const linkClass = ` text-[1.6rem] md:px-[16px] md:py-[10px] text-[#8a8a8a] font-[500] cursor-pointer font-body transition-all duration-500 flex items-center rounded-[50px] border-[1px] border-solid border-transparent bg-transparent`;
  const hoverClass = ` hover:text-[#02a9eb] hover:font-[600] hover:bg-[rgba(255,255,255,0.05)] hover:transition-all hover:border-[rgba(255,255,255,0.10)]`;
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col text-[1.6rem] font-body font-medium navbar gap-[20px]"
          : "bg-[rgba(255,255,255,0.05)] rounded-[50px] p-[6px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] shadow-[0px_15px_20px_0px_rgba(11,13,16,0.10)]"
      } gap-[20px] items-center `}
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
