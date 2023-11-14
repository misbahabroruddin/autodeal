import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-white">
      <div className="flex container py-4 px-8 items-center justify-between ">
        <Link href="/">
          <h1 className="text-xl font-bold">AutoDeal</h1>
        </Link>
        <div>
          <ul className="flex gap-2">
            <li>Daftar</li> / <li>Masuk</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
