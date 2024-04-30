import { VscArrowRight } from "react-icons/vsc";
import { Carousel } from "@/components/carousel";
import RolesTable from "./roles-table";
import StackList from "./stack-list";
import type { Project } from "./types";

interface WorksheetProps {
  project: Project;
}

export default function Worksheet({ project }: WorksheetProps) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col space-y-20 text-lg">
        <div>
          <h1 className="text-5xl">{project.title}</h1>
        </div>
        <section className="flex flex-col gap-8">
          {project.deck && <p className="text-2xl">{project.deck}</p>}
          {project.challenge && <p>{project.challenge}</p>}
          {project.awards && <p>{project.awards}</p>}
          <p>
            {project.agency.prefix} {project.agency.name}
          </p>
        </section>
        {project.links && project.links.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Visit</h2>
            <ul className="flex flex-col gap-4">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    aria-label={`View ${link.title} (opens in a new tab)`}
                    className="group"
                    href={link.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.title}{" "}
                    <VscArrowRight
                      className="inline align-text-top transition-transform group-hover:translate-x-1"
                      size={22}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.roles.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Role</h2>
            <div className="flex w-full">
              <div className="overflow-x-auto">
                <RolesTable roles={project.roles} />
              </div>
            </div>
          </section>
        )}
        {project.stack.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Stack</h2>
            <div>
              <StackList stack={project.stack} />
            </div>
          </section>
        )}
      </div>
      <section className="-mx-4 md:-mx-6">
        <Carousel screenshots={project.screenshots} />
      </section>
    </>
  );
}
