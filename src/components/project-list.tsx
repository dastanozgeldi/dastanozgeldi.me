import { Badge } from "./ui/badge";
import data from "../config/projects.json";

export const ProjectList = ({ extended = false }: { extended?: boolean }) => {
  return (
    <ul className="space-y-4">
      {data.projects.map((project) => (
        <li key={project.name}>
          <a href={project.href} className="flex flex-col space-y-1.5">
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
            {extended && (
              <div className="h-96 w-full border-2 rounded-lg"></div>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};
