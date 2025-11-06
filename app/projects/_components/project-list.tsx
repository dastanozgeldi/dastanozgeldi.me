import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { site } from "@/config/site";
import data from "@/config/projects.json";

export function ProjectList() {
  return (
    <ul className="space-y-4">
      {data.projects.map((project) => {
        return (
          <li key={project.name} className="border rounded-lg p-3">
            <a
              className="flex flex-col space-y-1.5 mb-3"
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
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

            <Image
              className="rounded-lg shadow-lg aspect-video object-cover"
              alt={project.name}
              src={`${site.cdn}/${project.bannerId}`}
              width={800}
              height={400}
            />
          </li>
        );
      })}
    </ul>
  );
}
