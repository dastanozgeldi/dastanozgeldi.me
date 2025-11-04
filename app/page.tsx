import Link from "next/link";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col space-y-6 items-center justify-center">
      <header className="w-full flex items-center gap-4">
        <Image
          className="rounded-full"
          src="/pfp.jpg"
          width={80}
          height={80}
          alt="profile picture"
        />
        <div>
          <h1 className="text-2xl font-bold">Dastan Ozgeldi</h1>
          <p className="text-muted-foreground">swe @ defect.kz</p>
          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            <MapPinIcon className="size-4" /> Tokyo, Japan
          </p>
        </div>
      </header>

      <p className="font-mono tracking-tighter">
        I&apos;m an 18 y.o. builder from Almaty, Kazakhstan. Been coding since
        13. Currently studying my first year in Tokyo and working at{" "}
        <a href="https://defect.kz" className="font-mono underline">
          defect.kz
        </a>
        . You might wanna look at what I&apos;ve{" "}
        <Link href="/projects" className="font-mono underline">
          built
        </Link>{" "}
        or{" "}
        <Link href="/blog" className="font-mono underline">
          wrote
        </Link>{" "}
        so far.
      </p>
    </div>
  );
}
