"use client";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActionButton = ({ text, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-3.5 justify-center items-center self-stretch py-1.5 pr-1.5 pl-7 my-auto bg-amber-700 rounded-[100px] max-md:pl-5"
    >
      <span className="self-stretch my-auto text-base font-semibold text-black">
        {text}
      </span>
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2 my-auto w-8 h-8 bg-white rounded-[100px]">
        <img
          loading="lazy"
          src="assets/services/gettingstarted/rightbookshootarrow.svg"
          className="object-contain w-4 aspect-[1.14]"
          alt=""
        />
      </div>
    </button>
  );
};
