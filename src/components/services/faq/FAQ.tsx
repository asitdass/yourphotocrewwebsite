

import FAQItem from "./FAQItem";
import { FAQItemType } from "./types";

const faqItems: FAQItemType[] = [
  {
    id: 1,
    question: "Quis pariatur excepteur in sit proident ex cillum anim qui.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Quis pariatur excepteur in sit proident ex cillum anim qui.",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Quis pariatur excepteur in sit proident ex cillum anim qui.",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Quis pariatur excepteur in sit proident ex cillum anim qui.",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "Quis pariatur excepteur in sit proident ex cillum anim qui.",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

const FAQ = () => {
  return (
    <section className="flex gap-16 p-5 mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:gap-8 max-md:p-4 max-sm:p-2.5">
      <header className="w-[452px] max-md:w-full">
        <h1 className="mb-6 text-4xl font-extrabold text-neutral-900 max-md:text-3xl max-sm:text-3xl font-manrope">
          Any questions? We got you.
        </h1>
        <p className="text-lg leading-8 text-neutral-900 text-opacity-80 max-sm:text-base max-sm:leading-7 font-lato">
          Think photoshoots are only for fancy occasions or dating apps? Nope.
          They're for everyone, and here's why:
        </p>
      </header>

      <div className="flex flex-col gap-3.5 w-[688px] max-md:w-full">
        {faqItems.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
