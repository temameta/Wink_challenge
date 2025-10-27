"use client";
import Open from "@/assets/Open.svg";
import PlusButton from "@/components/PlusButton/PlusButton";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full">
      <div className="bg-[#D9D9D9] w-full flex justify-center items-center h-[57px] ">
        <p className="[text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-[#000000CC] text-[24px]">
          Ваши задачи 1/5
        </p>
      </div>
      <div className="pr-[50px]">
        <div className="ml-[24px] pt-[25px] mt-[24px] bg-[#AC7AFE80] rounded-[20px] w-full">
          <p className="text-[24px] ml-[40px] mb-[40px]">
             Разработать «Service Desk — Портал для IT-поддержки»
          </p>
          <div className="bg-[#BC9BF4] flex justify-between w-full px-[40px] rounded-[20px] py-[15px] items-end">
            <p className="text-[#210057] text-[24px]">Срок 25.05.2026</p>
            <p className="text-[#210057] text-[24px]">Рабочая группа</p>
            <img src={Open.src} alt="" className="w-[50px] cursor-pointer" />
          </div>
        </div>
      </div>
      <PlusButton
        onClick={() => router.push("/create-task")}
        className="scale-[1.7] fixed right-[60px] bottom-[60px]"
      />
    </div>
  );
};

export default page;
