import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="flex bg-white w-full">
      <div className="flex container py-4 pl-16  items-center justify-between ">
        <div className="ml-3">
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={158} height={28} />
          </Link>
        </div>
        <form action="">
          <div className="flex gap-2">

            <div className="form-group">
              <input className="w-[180px] bg-[#F4F5F7] px-4 py-2 rounded-md text-sm" type="text" placeholder="Indonesia" />

            </div>
            <div className="form-group">
              <input className="w-[390px] bg-[#F4F5F7] px-4 py-2 rounded-md text-sm" type="text" placeholder="Cari yang kamu mau di sini..." />

            </div>
          </div>

        </form>

        <div className=" ">
          <button
            class="px-3 py-2.5   flex items-center gap-1 text-[14px]  rounded-xl  bg-[#FCD02F] text-black"
            type="submit"
          >
            <FaUnlockKeyhole />
            <h5>Masuk/Daftar</h5>


          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
