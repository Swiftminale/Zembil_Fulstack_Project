import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../../favicon.jpeg"; // Adjust this path as needed

export default function Page() {
  return (
    <div className="h-screen flex">
      {/* Left side - Image and text placeholder */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <div className="mb-5 relative w-full h-40">
          {" "}
          {/* Adjust size as needed */}
          <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <h1 className="text-4xl font-bold mb-3">
          Welcome Back To Zembil, Admin
        </h1>
        <p className="text-lg text-gray-600">
          Sign up to access your account and explore our features.
        </p>
      </div>

      {/* Right side - Sign-in form */}
      <div className="w-1/2 flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
