import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  title: string;
};

export const Section = ({ children, title }: SectionProps) => {
  return (
    <div className="my-8">
      <h2 className="font-bold text-2xl underline underline-offset-[6px] decoration-4 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
};
