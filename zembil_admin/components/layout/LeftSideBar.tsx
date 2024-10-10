import Image from "next/image";
import React from "react";
import Logo from "/logo.jpeg";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function LeftSideBar() {
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-300 shadow-xl max-lg:hidden">
      <Image src={Logo} alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className="flex gap-4 text-body-medium"
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Profile</p>
      </div>
    </div>
  );
}

export default LeftSideBar;
