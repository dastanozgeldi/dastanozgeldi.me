"use client";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

const Hero = () => {
  return (
    <>
      <Image
        className="rounded-full"
        src="/avatar.png"
        alt="avatar"
        width={150}
        height={150}
        priority
      />
      <div className="text-center py-12">
        <p className="text-2xl">
          <Balancer>Building web apps</Balancer>
        </p>
        <p className="text-2xl">
          <Balancer>that improve lives</Balancer>
        </p>
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link className="flex items-center gap-1" href="/projects">
            projects
            <Icons.right className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;
