import React from "react";
import { BsChatLeftQuote } from "react-icons/bs";
import team_05 from '../../Image/team_05.jpg'
import Image from "next/image";
const TeamInfo = () => {
  return (
    <div className="w-full max-w-lg md:max-w-xl lg:max-w-none p-5 lg:p-15 flex flex-col lg:flex-row items-center justify-between text-gray-500 bg-linear-to-br from-gray-950 to-gray-700 mx-auto gap-y-8 gap-x-5 ">
      <div className="w-full max-w-xl space-y-5">
        <div className=" text-4xl lg:text-5xl  text-purple-600">
          <BsChatLeftQuote />
        </div>
        <p className="lg:text-[17px] text-[15px]">
          "I've been playing games for years, and Evel consistently delivers
          top-notch experiences. Their attention to detail and passion for
          gaming shine through in every title. "
        </p>
        <div className="flex items-center gap-3">
          <div className="uppercase space-y-0">
            <h5 className="font-bold text-white text-sm lg:text-[16px]">
              Jenny Wilson
            </h5>
            <span className="text-xs font-semibold">Gammer</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-xs aspect-square bg-red-500 relative">
      <Image src={team_05} alt="image" fill className="object-cover" />
      </div>
    </div>
  );
};

export default TeamInfo;
