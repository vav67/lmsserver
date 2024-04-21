import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { BiSearch } from "react-icons/bi"

type Props = {}

const Hero: FC<Props> = (props) => {


return (

     <div   className="bg-[#6eee6e] w-full 1000px:flex items-center  " >
<div className="bg-[#f1b0de] absolute top-[100px] 1000px:top-[unset] 
        1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 
        1100px:w-[600px] h-[50vh] w-[50vh]  hero_animation "> {/** добавил сам  h-[50vh] w-[50vh] hero_animation ...*/}
     
     
   
      <div  className=" bg-[#7091a0]  1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
      <img
     src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
     alt=""
     className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
     />
      </div>
     
    
  <div className=" bg-[#b9dff5]  1000px:w-[60%] flex flex-col
   items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">


    <h2 className=" dark:text-white text-[#000000c7] text-[30px] px-3 w-full 
    1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]
     1500px:w-[700px]"  >{/** добавил сам 1500px:w-...*/}
           Improve Your Online Learning Experience Better Instantly
      </h2>
      <br />
        <p className="dark:text-[#88fab4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
          We have 40k+ Online courses & 500K+
          your desired Courses from them.
        </p>
        <br />
        <br />

        
        <div className=" bg-[#ff7272] 1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative ">
       {/**    <input 
            type="search"
            placeholder="Search Courses-"
           className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#afc91bdd]  " добавил сам outline-none text... 
      
           />
        */}
             <label  >Search the site:</label>
             <input type="search" 
              placeholder="Search Courses-"
              className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full   text-[#afc91bdd] outline-none "
             />
              


        <div className="bg-[#924940]  absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0   rounded-r-[5px]">
          <BiSearch className="text-white" size={30} />
        </div>

        </div>
 </div> {/** добавил сам этот див */}
        <br />
      <br />
   
       <div className=" bg-[#8eebd7]  1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center" >
  <img 
     src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg"
     alt=""
     className="rounded-full"
  />
<img 
     src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
     alt=""
     className="rounded-full ml-[-20px]"
  />
  <img 
     src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
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
      <br />

  </div>
</div>


 
  )
}

export default Hero