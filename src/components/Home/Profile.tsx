import Image from "next/image";
import profilePicture from "../../assets/profile.jpg";

export default function Profile() {
  return (
    <div className="sm:flex sm:items-center sm:gap-10 my-4">
      <div>
        <h1 className="font-extrabold text-4xl">Dastan Ozgeldi</h1>
        <p>Digital Nomad ( Sophomore / Developer / Procrastinator )</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 sm:m-0">
        <Image
          className="rounded-full"
          src={profilePicture}
          width={100}
          height={100}
          alt="Profile"
        />
      </div>
    </div>
  );
}
