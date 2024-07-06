import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "./data.json";
import { getBlogPosts } from "@/blog";

export default function Page() {
  const { orders, hackathons } = data;

  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    )
    .slice(0, 4);

  return (
    <section className="space-y-8">
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
        <p className="my-2">
          I&apos;m a 17 y.o. developer from Almaty, Kazakhstan. I create
          websites, mobile apps, discord/telegram bots and many other stuff. I
          love watching Whiplash, redesigning this website every other week and
          abusing LLMs to win hackathons.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Tabs defaultValue="orders" className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-lg tracking-tighter font-mono">projects</h3>
            <TabsList>
              <TabsTrigger
                className="font-mono tracking-tighter"
                value="orders"
              >
                orders
              </TabsTrigger>
              <TabsTrigger
                className="font-mono tracking-tighter"
                value="hackathons"
              >
                hackathons
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="orders">
            <ProjectList projects={orders} />
          </TabsContent>
          <TabsContent value="hackathons">
            <ProjectList projects={hackathons} />
          </TabsContent>
        </Tabs>
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
