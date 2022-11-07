type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
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
