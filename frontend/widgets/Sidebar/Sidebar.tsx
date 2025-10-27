import NavbarLink from "./SidebarLink";
import User from "@/assets/User.svg";

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-center w-[215px] fixed left-0 h-full bg-[#8A60D3] z-20">
      <div className="mb-[16px]">
        <span className="mt-[17px] cursor-pointer flex justify-center items-center relative w-[152px] h-[140px] bg-[#FFFEFE] rounded-[50%] after:content-[''] after:absolute after:left-0 after:top-[13px] after:bg-[#D9D9D9] after:w-[152px] after:h-[140px] after:rounded-[50%] after:-z-10 ">
          <img src={User.src} alt="" className="w-[83px] h-[82px] z-10" />
        </span>
      </div>
      <h1 className="mb-[50px]! text-[24px] text-white text-center [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-bold">
        Власова <br /> Варвара
      </h1>
      <div className="flex flex-col gap-[37px] w-full">
        <NavbarLink text={"Главная"} href="/" />
        <NavbarLink text={"Аккаунт"} href="/" />
        <NavbarLink text={"Курсы"} href="/" />
      </div>
    </div>
  );
};

export default Sidebar;
