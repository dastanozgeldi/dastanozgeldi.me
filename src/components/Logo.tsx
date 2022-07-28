import Image from "next/image";
import Link from "next/link";
import hoof from "../assets/hoof.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src={hoof} width={20} height={20} alt="Logo Icon" />
        Dastan Ozgeldi
      </div>
    </Link>
  );
}
