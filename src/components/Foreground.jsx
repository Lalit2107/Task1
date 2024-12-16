import React, { useState, useRef  } from 'react'
import Page from './Page'


function Foreground() {
  
     const ref = useRef(null);
  const data = [
    { desc: "This is the background color of the card that will be displayed.",
       filesize:"0.9mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
      },
      { desc: "This is the background color of the card that will be displayed.",
        filesize:"0.9mb",
         close: true,
         tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
       },
       { desc: "This is the background color of the card that will be displayed.",
        filesize:"0.9mb",
         close: true,
         tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
       },
  ];
  useState()
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item, index)=>(
      <Page data={item} reference = {ref}/>
    ))}
    
    
    </div>
       )
}

export default Foreground
