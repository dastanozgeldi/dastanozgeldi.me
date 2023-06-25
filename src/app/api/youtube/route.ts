import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const { YOUTUBE_CHANNEL_ID: channel_id, GOOGLE_API_KEY: api_key } = process.env;

export async function GET() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${channel_id}&part=statistics&key=${api_key}`
  );
  const data = await response.json();

  const channel = data.items[0];
  const statistics = channel.statistics;

  if (!statistics) {
    throw new Error("Statistics not found");
  }

  return NextResponse.json({
    subscribers: Number(statistics.subscriberCount),
    views: Number(statistics.viewCount),
  });
}
