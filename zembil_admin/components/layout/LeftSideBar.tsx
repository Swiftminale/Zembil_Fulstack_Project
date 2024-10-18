"use client";
import Image from "next/image";
import React from "react";
import Logo from "/logo.jpeg";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function LeftSideBar() {
  const pathname = usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-600 shadow-xl max-lg:hidden">
      <Image
        src={Logo}
        alt="logo"
        width={120}
        height={70}
        className="rounded-full"
      />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname == link.url ? "text-red-1" : ""
            }`}
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
