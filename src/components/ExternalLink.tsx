import { PropsWithChildren } from "react";

type ExternalLinkProps = PropsWithChildren & {
  href: string;
};

export const ExternalLink = ({ children, href }: ExternalLinkProps) => {
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
