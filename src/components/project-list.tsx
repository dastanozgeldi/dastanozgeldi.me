import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import data from "@/config/projects.json";
import { Badge } from "./ui/badge";

export function ProjectList({ extended = false }: { extended?: boolean }) {
  const projects = extended ? data.projects : data.projects.slice(0, 3);

  return (
    <ul className="space-y-4">
      {projects.map((project) => {
        const LinkComponent = project.href.startsWith("http") ? "a" : Link;
        return (
          <li key={project.name} className="border rounded-lg p-3">
            <LinkComponent
              href={project.href}
              className="flex flex-col space-y-1.5 mb-3"
            >
              <div>
                <span className="font-medium underline underline-offset-4">
                  {project.name}
                </span>
                {project.tag && (
                  <Badge className="ml-2 font-mono font-normal">
                    {project.tag}
                  </Badge>
                )}
              </div>
              <span className="text-muted-foreground">
                {project.description}
              </span>
            </LinkComponent>

            {extended && (
              <Image
                className="rounded-lg shadow-lg"
                alt={project.name}
                src={`${site.cdn}/${project.bannerId}`}
                width={800}
                height={400}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
