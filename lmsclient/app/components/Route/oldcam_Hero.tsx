'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

import img1 from '../../../public/assets/banner-img-1.png'

type Props = {}

const Hero: FC<Props> = (props) => {
 // получим 
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});

  const [search,setSearch] = useState("");
  const router = useRouter()
  

  const handleSearch = () => {
   if(search === ""){
    return
   }else{
    router.push(`/courses?title=${search}`);
   }
  }





//<div   className=" relative w-full 1000px:w-[90%] flex items-center  " >
// w-full 1000px:flex items-center       1000px:flex flexdirection-row 

return (
  <>
<div   className="   w-full  relativ  items-center  " >
{/* absolute   top-[120px] 1000px:top-[unset]  */}
<div className="absolute   top-[120px] 1000px:top-[140px] 
                  1500px:h-[700px] 1500px:w-[700px] 
                  1100px:h-[600px] 1100px:w-[600px]
                          h-[56vh] left-6 w-[56vh]
  hero_animation  rounded-[50%] 1100px:left-8 1500px:left-4">
 </div>

<div   className="    1000px:flex   " >
  
 <div  className="   1000px:w-[50%]      pb-[30px]
              1000px:min-h-screen items-center 
                justify-end pt-[70px] 1000px:pt-[170px] z-10">
      < Image  
    //  src={require("../../../public/assets/banner-img-1.png")}
    src={data?.layout?.banner?.image?.url || img1}
    width={400}
    height={400}
    alt=""
     className="object-contain 1100px:max-w-[90%] w-[90%]   
                                1500px:max-w-[85%] h-[auto] pl-11    "
     />
      </div>

  <div className="    1000px:top-[unset] 1000px:w-[50%] 
                 1500px:max-w-full  1000px:pt-[170px]  pl-11      ">
    <h2 className=" dark:text-white text-[#000000c7] text-[30px] px-3 w-full
     1000px:text-[70px] font-[600] font-Josefin py-2 
     1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]"  >{/** добавил сам 1500px:w-...*/}
            {data?.layout?.banner?.title}
      </h2>
      <br />
 <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] ">
       {data?.layout?.banner?.subTitle}
        </p>
        <br />
        <br />
        <div className="  1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent    relative ">
                
             <input type="search" 
              placeholder="Search Courses-"
              className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none   text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin "
             />
              


        <div className="  absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3]  rounded-r-[5px]">
          <BiSearch className="text-white" size={30} />
        </div>

        </div>

        <br />
      <br />
   
       <div className="  1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center" >
  <Image
        src={require("../../../public/assets/client-1.jpg")}
     alt=""
     className="rounded-full"
  />
<Image
  src={require("../../../public/assets/client-2.jpg")}
     alt=""
     className="rounded-full ml-[-20px]"
  />
  <Image
   src={require("../../../public/assets/client-3.jpg")}
     alt=""
     className="rounded-full ml-[-20px]"
  />
  <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
    500K+ People already trusted us.{" "}
    <Link href="/courses"
     className="dark:text-[#46e256] text-[crimson]"
    >
      View Courses
    </Link>{" "}
  </p>
       </div>



       </div>

 </div>

</div>




 

</>
  )
}

export default Hero