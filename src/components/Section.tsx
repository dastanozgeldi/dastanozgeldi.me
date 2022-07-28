import { ReactNode } from "react";

export default function Section({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="my-8">
      <h2 className="underline underline-offset-[6px] decoration-4 decoration-[#303030] mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}
