import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { getBlogPosts } from "@/lib/blog";
import Image from "next/image";
import { formatDate } from "@/lib/formatters";

export default function Page() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
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

      <Block
        title="about me"
        link={{ label: "see resume", href: "/resume.pdf" }}
      >
        <p className="mt-2">
          I&apos;m an 18 y.o. developer from Almaty, Kazakhstan. I create
          websites, mobile apps, discord/telegram bots and many other stuff. I
          love watching Whiplash, redesigning this page every other week and
          abusing LLMs to win hackathons.
        </p>
      </Block>

      <Block title="projects" link={{ label: "see all", href: "/projects" }}>
        <ProjectList />
      </Block>

      <Block title="blog" link={{ label: "see all", href: "/blog" }}>
        <div className="flex flex-col gap-4 my-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="">
              <div className="flex w-full justify-between">
                <p className="font-medium underline underline-offset-4">
                  {post.metadata.title.toLowerCase()}
                </p>
                <p className="text-sm text-neutral-600">
                  {formatDate(post.metadata.date, {
                    short: true,
                  }).toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Block>
    </section>
  );
}

function Block({
  title,
  link,
  children,
}: {
  title: string;
  link: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg tracking-tighter font-mono">{title}</h3>
        <Link
          href={link.href}
          className="decoration-neutral-400 font-medium underline decoration-[0.1em] underline-offset-2"
        >
          {link.label}
        </Link>
      </div>
      {children}
    </div>
  );
}
