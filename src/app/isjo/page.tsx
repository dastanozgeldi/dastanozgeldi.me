import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Leaderboard } from "./leaderboard";

export default async function Page() {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold">ISJO leaderboard</h1>
        <p className="text-gray-600">
          ISJO stands for International Sharik Jargysh Olympiad held everyday in
          Nazarbayev Intellectual Schools.
        </p>
      </div>

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
