import { Redis } from "@upstash/redis";

if (!process.env.REDIS_TOKEN) {
  throw new Error("REDIS_TOKEN is not defined");
}

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

export default redis;
