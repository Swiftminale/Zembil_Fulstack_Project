"use client";
import Image from "next/image";
import React from "react";
import Logo from "/logo.jpeg";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

function TopBar() {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <Image src={Logo} alt="logo" width={50} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathname == link.url ? "text-blue-2" : ""}` }
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div
        className="relative flex gap-4  items-center"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        {dropdownMenu && (
          <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
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
        )}
        <Menu className="cursor-pointer md:hidden" />
        <UserButton />
      </div>
    </div>
  );
}

export default TopBar;
