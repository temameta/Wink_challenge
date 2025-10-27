import Plus from "@/assets/Plus.svg";
import clsx from "clsx";
import { FC } from "react";

interface IPLusButtonProps {
  onClick: () => void;
  className?: string;
}

const PlusButton: FC<IPLusButtonProps> = ({ onClick, className }) => {
  return (
    <div className={clsx("", className)}>
      <span
        onClick={() => onClick()}
        className={clsx(
          "cursor-pointer z-1 flex justify-center items-center relative w-[58px] h-[55px] bg-[#230B82] rounded-[50%] after:content-[''] after:absolute after:left-0 after:top-0 after:bg-[#3C53A2] after:w-[58px] after:h-[50px] after:rounded-[50%]"
        )}
      >
        <img src={Plus.src} alt="#" className="w-[26px] z-10" />
      </span>
    </div>
  );
};

export default PlusButton;
