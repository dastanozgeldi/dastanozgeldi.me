import { Badge } from "./ui/badge";
import { projects } from "../config/projects.json";

export const ProjectList = () => {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
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
          </a>
        </li>
      ))}
    </ul>
  );
};
