import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
};

export const ExternalLink = ({ children, href }: Props) => {
  return (
    <a
      className="flex items-center gap-2 font-medium text-teal-400"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
