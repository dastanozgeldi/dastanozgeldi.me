export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <span className="text-sm text-muted-foreground font-mono">
        <a
          href="https://x.com/dastanozgeldi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono whitespace-nowrap underline"
        >
          x
        </a>
        {", "}
        <a
          href="https://linkedin.com/in/dastanozgeldi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono whitespace-nowrap underline"
        >
          linkedin
        </a>
        {", "}
        <a
          href="https://github.com/dastanozgeldi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono whitespace-nowrap underline"
        >
          github
        </a>
      </span>
    </footer>
  );
}
