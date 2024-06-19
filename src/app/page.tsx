import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "node:fs";

import Container from "@/components/container";
import FadeUp from "@/components/fade-up";
import Tag from "@/components/tag";
import type { Project } from "@/components/types";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const file = await fs.readFile(
    `${process.cwd()}/src/data/projects.json`,
    "utf8",
  );
  const data = JSON.parse(file);

  return (
    <div className="mx-auto flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Container>
        <div className="flex h-svh flex-col justify-center gap-12">
          <h1 className="mb-6 text-5xl md:mb-24">Chris Styles</h1>
          <p className="max-w-[48ch] text-pretty text-2xl">
            A design-focused{" "}
            <a
              aria-label="If we’re not software engineers, then what are we? (opens in a new tab)"
              className="underline decoration-dotted decoration-2 underline-offset-4 dark:decoration-1"
              href="https://www.youtube.com/watch?v=9LfmrkyP81M&t=2805s"
              rel="noreferrer noopener"
              target="_blank"
            >
              software writer
            </a>{" "}
            working to create beautiful, functional, and accessible digital
            experiences.
          </p>
        </div>
      </Container>

      <section className="mb-20 grid grid-cols-1 gap-x-15 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {data
          .sort((a: Project, b: Project) => a.position - b.position)
          .map((project: Project, index: number) => (
            <FadeUp key={project.slug}>
              <Link
                className="flex h-full flex-col focus-visible:outline-offset-8"
                href={`/work/${project.slug}`}
              >
                <figure
                  className="group flex h-full flex-col gap-4 transition-transform duration-1000 ease-out hover:-translate-y-0.5"
                  role="group"
                >
                  <figcaption className="flex flex-col items-start gap-3">
                    <h2 className="line-clamp-1 text-2xl font-medium">
                      {project.title}
                    </h2>
                    <div className="flex w-full items-center justify-between text-sm font-normal">
                      <p>
                        {project.agency.prefix} {project.agency.name}
                      </p>
                      <div className="flex gap-2">
                        {project.primaryTechnologies.map((technology) => (
                          <Tag key={technology} name={technology} size="xs" />
                        ))}
                      </div>
                    </div>
                  </figcaption>
                  <div className="relative flex h-full w-full flex-col self-stretch bg-gradient-to-b from-neutral-200 to-neutral-300 p-12 dark:from-neutral-600 dark:to-neutral-700">
                    <Image
                      alt={project.title}
                      className="scale-95 rounded object-cover shadow-xl shadow-black/10 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-black/30 dark:group-hover:shadow-black/80"
                      height={1728}
                      loading={index < 4 ? "eager" : "lazy"}
                      priority={index < 4}
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      src={`${project.posterImages[0].src}`}
                      width={2880}
                    />
                  </div>
                </figure>
              </Link>
            </FadeUp>
          ))}
      </section>
    </div>
  );
}
