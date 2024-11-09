import Image from "next/image";
import { site } from "@/config/site";
import data from "@/config/projects.json";
import { Badge } from "./ui/badge";

export const ProjectList = ({ extended = false }: { extended?: boolean }) => {
  return (
    <ul className="space-y-4">
      {data.projects.map((project) => (
        <li
          key={project.name}
          className={extended ? "border rounded-lg p-4" : undefined}
        >
          <a href={project.href} className="flex flex-col space-y-1.5 mb-3">
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
            <span className="text-muted-foreground">{project.description}</span>
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
      ))}
    </ul>
  );
};
