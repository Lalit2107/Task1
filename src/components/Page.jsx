import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import {LuDownload} from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

function Page({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
       <FaFileAlt />
       <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
       <div className='footer absolute bottom-0 w-full   h-15 left-0'>
        <div drag className='flex items-center justify-between mb-3 py-3 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
           {data.close ? <IoClose />: <LuDownload size=".7em" color='#000'/>}
         
          </span>
          
        </div>
        {
          data.tag.isOpen && (
            <div className= {`tag w-full h-10 py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} px-8 flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
          )
        }
        
       </div>

       </motion.div>
  )
}

export default Page
