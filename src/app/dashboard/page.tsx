"use client";
import { Skeleton } from "@/components/ui/skeleton";
import fetcher from "@/lib/fetcher";
import { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import useSWR from "swr";

type Card = {
  icon: React.ReactNode;
  title: string;
  link: string;
  value: number | string | undefined;
};

type YouTubeData = {
  subscribers: number;
  views: number;
};

const Dashboard = () => {
  const { data: youtubeData } = useSWR<YouTubeData>("/api/youtube", fetcher);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data: Card[] = [
    {
      title: "YouTube Views",
      link: "https://youtube.com/@dastanozgeldi",
      value: youtubeData?.views,
      icon: <IoLogoYoutube />,
    },
    {
      title: "YouTube Subscribers",
      link: "https://youtube.com/@dastanozgeldi",
      value: youtubeData?.subscribers,
      icon: <IoLogoYoutube />,
    },
  ];

  return (
    <div>
      <p className="w-full bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
        Here are my statistics so far. Soon there&apos;ll be more than YouTube.
      </p>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {mounted &&
          data.map((item) => {
            const { icon, link, title, value } = item;

            return (
              <a
                key={title}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="flex flex-col gap-2 rounded-lg border border-accent-2 p-4 transition-colors duration-150 hover:bg-accent-1"
              >
                <div className="flex items-center gap-1">
                  {icon}
                  <div className="text-sm font-bold">{title}</div>
                </div>
                <div className="text-4xl font-black text-accent-fg">
                  {value ? value : <Skeleton className="h-10 w-full" />}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
