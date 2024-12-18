import React, { useEffect, useState } from "react"
export const Container=({children})=>{
    const [isloading,setIsLoading]=useState(false);
    const  loadingPage=()=>{
         const el=document.getElementById('loadingPage');
         if(el){
             el.style.transition="all 0.5s";
         }
         setTimeout(()=>{
            if(el){
               setIsLoading(!isloading);
            }
         },800);
    }
    useEffect(()=>{
        loadingPage();
    },[]);
    return !isloading?
      <div id='loadingPage' className="w-full bg-black h-screen flex justify-center items-center">
          <img src="images/loadingPage.gif" className="m-auto w-[25%] h-[25%] md:[20%] md:h-[20%]" alt='...' />
      </div>
     :
     (<div className="w-full flex justify-center flex-wrap bg-black">
           {children}
    </div>)
}