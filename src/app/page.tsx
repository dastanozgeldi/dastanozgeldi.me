import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { getBlogPosts } from "@/lib/blog";
import Image from "next/image";

export default function Page() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )
    .slice(0, 3);

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full"
          src="/pfp.jpeg"
          width={100}
          height={100}
          alt="profile picture"
        />
        <div>
          <h1 className="text-3xl font-bold">Dastan Ozgeldi</h1>
          <p className="text-muted-foreground">
            18 / software engineer @ defect.kz
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg tracking-tighter font-mono">about me</h3>
          <Link
            href="/resume.pdf"
            className="decoration-neutral-400 font-medium underline decoration-[0.1em] underline-offset-2"
          >
            see resume
          </Link>
        </div>
        <div>
          <p className="mt-2">
            I&apos;m an 18 y.o. developer from Almaty, Kazakhstan. I create
            websites, mobile apps, discord/telegram bots and many other stuff. I
            love watching Whiplash, redesigning this page every other week and
            abusing LLMs to win hackathons.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg tracking-tighter font-mono">projects</h3>
          <Link
            href="/projects"
            className="decoration-neutral-400 font-medium underline decoration-[0.1em] underline-offset-2"
          >
            see all
          </Link>
        </div>
        <ProjectList />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg tracking-tighter font-mono">blog</h3>
          <Link
            href="/blog"
            className="decoration-neutral-400 font-medium underline decoration-[0.1em] underline-offset-2"
          >
            see all
          </Link>
        </div>
        <div className="flex flex-col gap-4 my-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="">
              <div className="flex w-full justify-between">
                <p className="font-medium underline underline-offset-4">
                  {post.metadata.title.toLowerCase()}
                </p>
                <p className="text-sm text-neutral-600">
                  {new Date(post.metadata.date)
                    .toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                    .toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
