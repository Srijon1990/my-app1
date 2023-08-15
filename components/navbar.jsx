"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex space-x-6 m-10 shadow  ">
      <Link
        className={currentPath === "/" ? "active-link" : " pending-link"}
        href="/"
      >
        Home
      </Link>
      <Link
        className={currentPath === "/blog" ? "active-link" : " pending-link"}
        href="/blog"
      >
        Blog
      </Link>
    </div>
  );
};

export default Navbar;
