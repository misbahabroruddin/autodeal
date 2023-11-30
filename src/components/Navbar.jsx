import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-white">
      <div className="flex container py-4 px-20 items-center justify-between ">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={158} height={28} />
          </Link>
        </div>
        <div>
          <button
            class="px-4 py-2  rounded-lg  bg-[] text-white"
            type="submit"
          >
            Masuk/Daftar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
