import React from "react";

interface IconCardProps {
  icon: React.ReactNode;
  text: string;
}

const IconCard = ({ icon, text }: IconCardProps) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div
        className={`flex flex-col items-center gap-2 text-neutral-900 break-words 
       bg-orange-500  rounded-xl h-12 w-16 justify-center font-medium `}>
        {icon}
      </div>
      <span className="  flex text-center   leading-[1.2] text-neutral-900 break-words w-16 text-[13px] font-medium flex-col justify-center items-center h-7 py-2">
        {text}
      </span>
    </div>
  );
};

export default IconCard;
