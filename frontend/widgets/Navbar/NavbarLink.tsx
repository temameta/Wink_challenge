import Link from "next/link";
import React, { FC } from "react";

interface INavbaLinkProps {
  href: string;
  text: string;
  imgSrc: string;
}
const NavbarLink: FC<INavbaLinkProps> = ({ href, text, imgSrc }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer flex items-center gap-[10px] px-[22px] h-[56px] bg-[#8A5CD6]"
    >
      <p className="text-white text-[24px]">{text}</p>
      <img src={imgSrc} alt="" className="w-[33px] h-[38px]" />
    </Link>
  );
};

export default NavbarLink;
