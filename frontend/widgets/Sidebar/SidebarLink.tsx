import Link from "next/link";
import React, { FC } from "react";

interface ISidebarLinkProps {
  href: string;
  text: string;
}

const SidebarLink: FC<ISidebarLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="relative text-[24px] font-normal text-center p-[12px] text-white bg-[#5F31AB] w-full after:content-[''] after:absolute after:left-0 after:top-full after:bg-[#502990] after:w-full after:h-[12px]"
    >
      {text}
    </Link>
  );
};

export default SidebarLink;
