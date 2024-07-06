import redis from "@/lib/redis";
import { ViewCounter } from "./view-counter";

export async function AllViews({ slug }: { slug: string }) {
  const allViews = (await redis.get("views")) as {
    slug: string;
    views: number;
  }[];

  return <ViewCounter slug={slug} allViews={allViews} />;
}
