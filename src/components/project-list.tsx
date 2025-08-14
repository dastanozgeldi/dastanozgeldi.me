import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { site } from "@/config/site";
import data from "@/config/projects.json";
import { Badge } from "./ui/badge";

export function ProjectList({ extended = false }: { extended?: boolean }) {
  const projects = extended ? data.projects : data.projects.slice(0, 3);

  return (
    <ul className="space-y-4">
      {projects.map((project) => {
        return (
          <li key={project.name} className="border rounded-lg p-3">
            <a
              className="flex flex-col space-y-1.5 mb-3"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium underline underline-offset-4 ">
                    {project.name}
                  </span>

                  {project.tag && (
                    <Badge className="ml-2 font-mono font-normal">
                      {project.tag}
                    </Badge>
                  )}
                </div>
                <ExternalLinkIcon size={16} />
              </div>

              <span className="text-muted-foreground">
                {project.description}
              </span>
            </a>

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
