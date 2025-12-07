import './App.css'

import jem from './img/jem.png'
export default function SecondSection(){
  
  return(
    <>
    
    <section className='border-e-40 border-b-40 p-20'>
      <div className='anim grid grid-cols-2 '>
        <div className='flex flex-col justify-center items-start m'>
        <h1 className='text-left text-5x1 md:text-[10rem] lg:text-[14rem] xl:text-[14rem] font-medium tracking-tighter'>WHO I AM?</h1>
        <p className='text-justify text-3xl leading-12'>Hello there! I'm  <span className='font-semibold border px-[5.1px] py-[1.2px] rounded-full'>Jeremy Rellama</span>, currently pursuing my Bachelor of Science in Information Technology (BSIT) at Bicol University Polangui. Originally hailing from Camagong, Oas, Albay, I'm deeply passionate about all things related to technology and computer science. Whether it's coding, software development, or exploring the latest tech trends, I'm always eager to dive in and learn more. </p>
        </div>

        <div className='flex justify-center items-center'>
          <img className='imganim aspect-auto object-cover size-200' src={jem} alt="Jeremy rellama" />
        </div>
      </div>

      <div className='anim grid grid-cols-2 '>
      <div><h1>Filler</h1></div>
      <div>filler</div>
      </div>
    </section>
    </>
  );
}