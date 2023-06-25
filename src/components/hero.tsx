"use client";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";

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
        <p className="text-2xl ">
          <Balancer>Building an iOS app</Balancer>
        </p>
        <p className="text-2xl">
          <Balancer> using generative AI</Balancer>
        </p>
      </div>
      <div>
        <Button variant={"ghost"} asChild>
          <Link href="mailto:ozgdastan@gmail.com">Email</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link
            href="https://linkedin.com/in/dastanozgeldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </Button>
        <Button variant={"ghost"}>
          <Link
            href="https://github.com/dastanozgeldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;
