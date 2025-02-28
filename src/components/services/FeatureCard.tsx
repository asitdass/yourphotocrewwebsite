import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex-1 shrink basis-0 min-w-60">
      <img
        loading="lazy"
        src={icon}
        className="object-contain w-11 aspect-square"
        alt=""
      />
      <h3 className="mt-1.5 text-xl font-bold">{title}</h3>
      <p className="mt-1.5 text-base leading-6">{description}</p>
    </article>
  );
};
