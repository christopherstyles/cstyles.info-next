import Container from "@/components/container";
import Image from "next/image";
import bioImage from "../../../public/images/bio/chris-and-finley.jpg";
import Photos from "./components/photos";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Container>
        <div className="flex max-w-[1200px] flex-col gap-24">
          <div className="max-w-[960px]">
            <h1 className="sr-only mb-36 text-5xl">Chris Styles</h1>
            <div className="flex flex-col gap-12 md:mb-24 md:flex-row">
              <div className="relative w-1/3 md:w-1/5 md:flex-shrink-0">
                <Image
                  alt="Chris standing in a northwest forest during Spring, while holding Finley (a standard wire-haired dachshund)"
                  className=""
                  loading="eager"
                  priority
                  quality={65}
                  sizes="50vw"
                  src={bioImage}
                  width={768}
                  height={1024}
                />
              </div>
              <div className="flex flex-col gap-12">
                <p className="text-xl">
                  Chris Styles was born in North Carolina and studied graphic
                  design at the{" "}
                  <a
                    aria-label="Maryland Institute College of Art (opens in a new tab)"
                    href="https://www.mica.edu/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Maryland Institute College of Art
                  </a>{" "}
                  . He has worked in the design and technology field for nearly
                  two decades, leading teams and projects for clients like NPR
                  Live Sessions, FX Networks, Nintendo, and TED-Ed. He lives
                  with his partner{" "}
                  <a
                    aria-label="Landbird (opens in a new tab)"
                    href="http://www.landbird.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    @landbird
                  </a>{" "}
                  and their three dogs, two chickens, five ducks, and a lovely
                  goose.
                </p>
                <p className="text-base">
                  If you’re interested in chatting about a potential
                  collaboration, or would just like to say hello, please{" "}
                  <a href="mailto:cstyles@hey.com" className="underline">
                    get in touch
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <section className="border-t border-neutral-300 pt-24 dark:border-neutral-600">
            <h2 className="text-xl">Life</h2>
          </section>

          <div>
            <Photos />
          </div>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl">Contact</h2>
            <div>
              <a
                aria-label="Email Chris Styles (opens in the default mail application)"
                href="mailto:cstyles@hey.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                cstyles@hey.com
              </a>
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-neutral-300 pt-24 dark:border-neutral-600">
            <h2 className="text-xl">Follow</h2>

            <div className="flex flex-col gap-3">
              <a
                aria-label="Visit Chris’s Instagram (opens in a new window)"
                href="https://www.instagram.com/christopherstyles/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Instagram
              </a>
              <a
                aria-label="Visit Chris’s LinkedIn (opens in a new window)"
                href="https://www.linkedin.com/in/christopherstyles/"
                rel="noreferrer noopener"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                aria-label="Visit Chris’s GitHub (opens in a new window)"
                href="https://www.github.com/christopherstyles/"
                rel="noreferrer noopener"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
