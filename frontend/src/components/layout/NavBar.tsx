"use client";

import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { DarkModeToggler } from "../ui/DarkModeToggler";
import clsx from "clsx";

type NavLink = {
  href?: string;
  label: string;
  submenu?: NavLink[];
};

const NavBar = () => {
  const activeLink = usePathname();

  const links: NavLink[] = [
    { href: "/", label: "Home" },
    {
      label: "Materials",
      submenu: [
        { href: "/materials/books", label: "Books" },
        { href: "/materials/videos", label: "Videos" },
      ],
    },
    { href: "/trip", label: "Trip" },
    { href: "/question-list", label: "Q&A" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex h-[67px] justify-between px-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Logo section */}
      <div>
        <Link href={"/"}>
          <div className="flex gap-2 w-[70%] h-full">
            <Image
              src={LogoImage}
              alt="logo"
              className="w-[70%] h-[70%] my-auto"
            />
            <p className="font-extrabold my-auto text-2xl">
              A<span className="text-purple-800 px-2">S</span>K
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex gap-12 my-auto">
        {links.map((link) =>
          link.href ? (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                activeLink === link.href &&
                  "text-primary dark:text-white font-bold ",
                  "hover:text-primary"
              )}
            >
              {link.label}
              {activeLink === link.href && (
                <div className="h-1 w-[80%] m-auto bg-primary rounded-full" />
              )}
            </Link>
          ) : (
            <DropdownMenu key={link.label}>
              <DropdownMenuTrigger className="hover:cursor-pointer hover:text-primary">
                {link.label}
                {activeLink.split('/')[1] === "materials" && (
                  <div className="h-1 w-[80%] m-auto bg-primary rounded-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent onClick={()=>{
                
              }}>
                {link.submenu?.map((sublink) => (
                  <DropdownMenuLabel key={sublink.label}>
                    <Link href={sublink.href!}>{sublink.label}</Link>
                  </DropdownMenuLabel>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        )}
      </div>

      {/* User profile section */}
      <div className="flex gap-4 my-auto">
        <DarkModeToggler />
        <Link href="/auth/login">
          <Button variant="outline" className="hover:cursor-pointer ">
            Log in
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button className="bg-primary text-white hover:cursor-pointer ">
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
