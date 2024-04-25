"use client";
 import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
 import NavItems from "../utils/NavItems";
  import { ThemeSwitcher } from "../utils/ThemeSwitcher"; //переключатель тем
 import { HiOutlineMenuAlt3  } from "react-icons/hi";
 //  import {   HiOutlineUserCircle,  HiUser } from "react-icons/hi"




  type Props = {
    open: boolean;  //наш набор открыт
    setOpen: (open: boolean) => void;
    activeItem: number; //активный
    //  route: string;
    //   setRoute: (route: string) => void;
  }

//const Header: FC<Props> = (props) => {   //  , route, setRoute
const Header: FC<Props> = ({  activeItem, setOpen, open   }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

   
 
   

 

if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }


  return (
    <div className="w-full relative">
    <div
      className={`${
        active
          ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black" + 
           " fixed top-0 left-0 w-full h-[80px] z-[80]"+
          "  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
          : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
      }`}
    >

    <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
    <div className="w-full h-[80px] flex items-center justify-between p-3">
      <div>
        <Link
          href={"/"}
          className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
        >
          ELearning
        </Link>
      </div>


      <div className="flex items-center">
               <NavItems activeItem={activeItem} isMobile={false} />
           
               <div   className={` text-black dark:text-white`} //сам добавил
            ><ThemeSwitcher   /></div>
               
   
        {/* only for moblile  иконка меню */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer  dark:text-white   text-black"
            //отображ боковая панель меню мобил      
                  onClick={() =>  setOpenSidebar(true)}
                />
              </div>

    </div>
      </div>
      </div>
</div>
      </div>
  )

  }
  export default Header