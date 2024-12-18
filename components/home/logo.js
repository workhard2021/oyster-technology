import Link from "next/link"
import {BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs';
import {SiYoutubestudio} from 'react-icons/si';
export const Logo=({data,logo})=>{
    return (<>
          <nav className='relative top-0 left-0 w-screen h-screen'>
            <div className="w-full fixed -top-5 left-0 flex justify-between z-50 md:p-8 p-4">
               <div className="w-[50%] md:h-[70px] flex justify-start items-stretch">
                     <div className="cursor-pointer md:w-[140px] w-[110px] md:h-[100px] flex">
                       <div href={'/'} className="w-full h-full bg-url-logo" style={{backgroundImage:`url(${logo})`}} />
                     </div>
                     {/* <h1 className="text-sm m-4 md:inline-block hidden text-white">Spécialiste des missions hautes compétences IT</h1> */}
               </div>
               <div className="w-[50%] flex justify-end items-center">
                 <Link target={'_blank'} href="https://web.facebook.com">
                         <BsFacebook className="md:hover:text-gray-200 hover:text-blue-900 transition-all duration-75 inline-block m-3 md:text-white text-blue-800" size={25}/>
                  </Link>
                  <Link  target={'_blank'} href="https://web.facebook.com">
                         <BsLinkedin className="md:hover:text-gray-200 hover:text-blue-900 transition-all duration-75 inline-block m-3 md:text-white text-blue-800" size={25}/>
                  </Link>
                  <Link  target={'_blank'} href="https://web.facebook.com">
                         <BsTwitter className="md:hover:text-gray-200 hover:text-blue-900 transition-all duration-75 inline-block m-3 md:text-white text-blue-800" size={25}/>
                  </Link>
                  {/* <Link  target={'_blank'} href="https://web.facebook.com">
                         <SiYoutubestudio className="hover:text-gray-200 transition-all duration-75 inline-block m-3 text-white" size={28}/>
                  </Link>*/}
                </div>
            </div>
            {/* <div className="absolute w-full z-5 h-full left-0 top-0  bg-red-500">sd</div> */}
            <div className="relative flex justify-center items-center md:flex-nowrap flex-wrap w-full h-[100%] m-auto">  
              {[data.map((value,index)=>{
             return <Link href={value.url} key={index} id={`hover_logo_${index+1}`} className={`relative md:h-screen h-[50%] w-full bg-url flex justify-center items-center flex-wrap ${index}`} style={{backgroundImage:`url(${value.image})`}}>
                  <div id={`item_${index+1}`} className="m-auto bg-[rgba(0,0,0,0.6)] text-white relative text-center w-[22em] md:h-[12em] h-[11em] rounded-sm">
                        <p className="absolute top-10  md:text-3xl text-2xl font-extrabold w-full">{value.title}</p>
                        <p id={`logo_sub_title_${index+1}`} className="absolute bottom-10 md:text-5xl text-4xl font-extrabold w-full">{value.sub_title}</p>
                  </div>
              </Link>
            })]}
            </div>
          </nav>
    </>)
}
Logo.defaultProps={
    SITE_URL:  process.env.NEXT_PUBLIC_OS,
    data:[{image:'images/3.jpeg',title:'Hydraulic',sub_title:"Engineering",url:process.env.NEXT_PUBLIC_HE},
          {image:'images/11.jpeg',title:'Digital',sub_title:"Factory",url:process.env.NEXT_PUBLIC_IT},
    ],
    logo:'images/logo.png',
}
  