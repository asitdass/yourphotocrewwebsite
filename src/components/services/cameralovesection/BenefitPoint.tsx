

import React from "react";

interface BenefitPointProps {
  icon: string;
  title: string;
  description: string;
}

export const BenefitPoint: React.FC<BenefitPointProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-start w-full max-md:max-w-full">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 aspect-[0.65] w-[26px]"
        alt=""
      />
      <p className="flex-1 shrink basis-0 max-md:max-w-full">
        <strong className="font-bold text-[#181818]">{title}: </strong>
        {description}
      </p>
    </div>
  );
};
