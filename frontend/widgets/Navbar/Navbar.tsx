import Bell from "@/assets/Bell.svg";
import Arrow from "@/assets/Arrow.svg";
import BarChart from "@/assets/BarChart.svg";
import NavbarLink from "./NavbarLink";
interface INavbarLink {
  text: string;
  imgSrc: string;
  href: string;
}

const NavbarLinks: INavbarLink[] = [
  {
    text: "Мои задачи",
    imgSrc: Bell.src,
    href: "",
  },
  {
    text: "Оценка 360",
    imgSrc: Arrow.src,
    href: "",
  },
  {
    text: "Самооценка",
    imgSrc: BarChart.src,
    href: "",
  },
];
const Navbar = () => {
  return (
    <div className="z-10 pl-[215px] fixed top-0 left-0 bg-[#5F37A8] h-[80px] w-full flex justify-around items-end">
      {NavbarLinks.map((link, linkInd) => {
        return (
          <NavbarLink
            key={linkInd}
            text={link.text}
            href={link.href}
            imgSrc={link.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
