import { FOOTER_LINKS } from "@/config/links";

export const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] border-t-gray-500 p-4 space-y-4">
      <div className="flex items-center justify-center gap-3">
        {FOOTER_LINKS.map(({ href, icon }) => (
          <a
            key={href}
            className="duration-300 rounded-full p-3 hover:bg-secondary"
            href={href}
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-center">
        © Dastan Özgeldi {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};
