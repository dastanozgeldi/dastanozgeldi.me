import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Leaderboard } from "./leaderboard";

export default async function Page() {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold">Sharik Jargysh Leaderboard</h1>
        <p className="text-gray-600">
          sharik jargysh is a balloon popper game which provides better
          immersion into game using camera hand-tracking algorithms.
        </p>
      </div>

      <iframe
        className="w-full rounded-lg mb-6"
        src="https://itch.io/embed/3251528"
        width="552"
        height="167"
      >
        <a href="https://ozgeldi.itch.io/sharik-jargysh">
          Sharik Jargysh by ozgeldi
        </a>
      </iframe>

      <Suspense
        fallback={Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-10 mb-1" />
        ))}
      >
        <Leaderboard />
      </Suspense>
    </>
  );
}
