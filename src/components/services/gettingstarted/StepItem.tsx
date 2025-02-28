interface StepItemProps {
    number: number;
    content: string;
  }
  
  export const StepItem = ({ number, content }: StepItemProps) => {
    return (
      <article className="flex flex-wrap gap-3 justify-center items-center w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-base whitespace-nowrap w-[30px]">
          <div className="px-3 py-1 rounded-full border border-solid border-white border-opacity-80">
            {number}
          </div>
        </div>
        <p className="flex-1 shrink self-stretch my-auto text-xl basis-0 max-md:max-w-full">
          {content}
        </p>
      </article>
    );
  };
  