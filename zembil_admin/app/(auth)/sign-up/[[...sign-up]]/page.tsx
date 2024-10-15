import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../../favicon.jpeg"; // Adjust this path as needed

export default function Page() {
  return (
    <div className="h-screen flex">
      {/* Left side - Sign-up form */}
      <div className="w-1/2 flex justify-center items-center">
        <SignUp />
      </div>

      {/* Right side - Image and text */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <div className="mb-5 relative w-full h-40">
          {" "}
          {/* Adjust size as needed */}
          <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <h1 className="text-4xl font-bold mb-3 text-center">
          Welcome To Zembil, Admin!
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Sign up to create your account and explore our features.
        </p>
      </div>
    </div>
  );
}
