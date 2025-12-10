import '../App.css'
import jem from '../img/jem.png'
import Photoshop from '../assets/ps.svg'
import Affinity from '../assets/Affinity.svg'
import Illustrator from '../assets/Illustrator.svg'
import InDesign from '../assets/InDesign.svg'
import illustration from '../assets/illustration.svg'
import Layout from '../assets/Layout.svg'
import WebDev from '../assets/web dev.svg'


function MainSection(){

  const portfolioSectionBorders = 'border-t-40 border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-t-20 max-[426px]:border-s-20 xl:p-20 lg:p-16 md:p-10';
  const portfolioSectionBorders1 = ' border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-s-20 xl:p-20 lg:p-16 md:p-10';
  const headlineTextClasses = 'text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] md:leading- lg:text-[12rem] xl:text-[24rem] xl:leading-76 font-medium tracking-tighter';
  const subHeadlineTextClasses = 'text-center text-4xl max-[426px]:text-[.8rem] md:text-[1.4rem] border rounded-full w-auto p-2';
  const headlineTextClasses2 = 'text-right max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[12rem] xl:text-[24rem] leading-76 font-medium tracking-tighter';
  return(
    <>

    {/* first section */}
    <section className={portfolioSectionBorders}>
      <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">

      <div className='anim flex justify-start items-center '>
      <h1 className={headlineTextClasses}>BEYOND</h1>
      </div>
      </div>


      <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
      <div className='anim flex justify-start items-center '>
      <h1 className={headlineTextClasses}>DESIGN</h1>
      </div>

      <div className='anim flex justify-center items-center'>
      <h1 className={subHeadlineTextClasses}>2025 - 2026</h1>
      </div>
      </div>

      <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">

      <div className='anim flex justify-center items-center'>
      <h1 className={subHeadlineTextClasses}>5 YEAR'S OF GRINDING</h1>
      </div>

      <div className='anim flex justify-end items-center '>
      <h1 className={headlineTextClasses2}>INTO</h1>
      </div>
      </div>

      <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">

      <div className='anim col-start-2 col-end-3 flex justify-end items-center '>
      <h1 className={headlineTextClasses2}>EXPERIENCE</h1>
      </div>
      </div>
    </section>

    {/* second section */}
    <section className='border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-20 lg:p-16 md:p-10 max-[426px]:px-8 max-[426px]:py-6'>
          <div className='anim grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] '>

            <div className='flex flex-col justify-center items-start max-[426px]:order-2'>
            <h1 className='md:self-center lg:self-center xl:self-start text-5x1 max-[426px]:text-[4rem] max-[426px]:leading-20 max-[426px]:self-center max-[426px]:mb-0 md:text-[7rem] lg:text-[14rem] xl:text-[14rem] font-medium tracking-tighter md:leading-28 lg:leading-50 xl:leading-56 mb-4'>WHO I AM?</h1>
            <p className='text-justify text-3xl max-[426px]:text-[1rem] max-[426px]:leading-6 leading-12 md:text-[1rem] md:leading-6 lg:text-2xl lg:leading-10 xl:text-3xl xl:leading-12'>Hello there! I'm  <span className='font-semibold border px-[5.1px] py-[1.2px] rounded-full'>Jeremy Rellama</span>, currently pursuing my Bachelor of Science in Information Technology (BSIT) at Bicol University Polangui. Originally hailing from Camagong, Oas, Albay, I'm deeply passionate about all things related to technology and computer science. Whether it's coding, software development, or exploring the latest tech trends, I'm always eager to dive in and learn more. </p>
            </div>
    
            <div className='flex justify-center items-center max-[426px]:order-1'>
              <img className='imganim aspect-auto object-cover max-[426px]:size-80 md:size-80 xl:size-200 lg:size-120' src={jem} alt="Jeremy rellama" />
            </div>

          </div>
    

    </section>

    {/* third section */}
    <section className={portfolioSectionBorders1}>
      <div className='anim flex justify-center items-center'>
        <div>
        <h1 className='text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-76 font-medium tracking-tighter'>SKILLS</h1>
        </div>
        </div>
        <div className='mt-20 lg:mt-0 anim grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
          
          <div className='flex flex-col justify-center items-center p-8 lg:p-6'>
            <img className='size-50 lg:size-36' src={illustration} alt="icon" />
            <h1 className='lg:m-6 lg:text-[4rem] lg:leading-20 xl:text-[5.4rem] tracking-tighter font-medium'>Illustration</h1>
            <p className='xl:text-[1.6rem]'>I possess a comprehensive skill set in <span className='font-medium border px-[5.1px] py-[1.2px] rounded-full'>illustration</span>, encompassing both traditional and digital techniques. My expertise includes a strong understanding of color theory, composition, and perspective, allowing me to create visually compelling and balanced artworks.</p>
          </div>

          <div className='flex flex-col justify-center items-center p-8 lg:p-6'>
            <img className='size-50 lg:size-36' src={WebDev} alt="icon" />
            <h1 className='lg:m-2 lg:text-[3.6rem] lg:leading-16 xl:text-[5rem] tracking-tighter font-medium'>Web Development</h1>
            <p className='xl:text-[1.6rem]'>I excel at designing <span className='font-medium border px-[5.1px] py-[1.2] rounded-full'>intuitive</span> user interfaces and seamless user experiences, ensuring that each site is both functional and aesthetically pleasing. My experience with responsive design principles allows me to create websites that perform optimally across different devices and screen sizes.</p>
          </div>

          <div className='flex flex-col justify-center items-center p-8 lg:p-6'>
            <img className='size-50 lg:size-36' src={Layout} alt="icon" />
            <h1 className='md:text-[2rem] lg:m-6 lg:text-[4rem] lg:leading-20 xl:text-[5.4rem] tracking-tighter font-medium'>Layout</h1>
            <p className='xl:text-[1.6rem]'>I excel in creating <span className='font-medium border px-[5.1px] py-[1.2] rounded-full'> visually appealing </span> and user-friendly layouts that effectively communicate content and engage audiences. My skills include proficient use of design software such as Adobe InDesign, Photoshop, and Illustrator, which enable me to craft clean, balanced, and aesthetically pleasing designs.</p>
          </div>

        </div>
        

        <div className='mt-20 lg:mt-10 anim grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-8'>
          <div className='flex gap-4 justify-center items-center'>
            <img className='size-36 lg:size-20' src={Photoshop} alt="Photoshop" />
            <h1 className='lg:text-[2rem] xl:text-[3.8rem] tracking-tighter'>Photoshop</h1>
          </div>

          <div className='flex gap-4 justify-center items-center'>
            <img className='size-36 lg:size-20 rounded-2xl' src={Affinity} alt="Affinity" />
            <h1 className='lg:text-[2rem] xl:text-[3.8rem] tracking-tighter'>Affinity</h1>
          </div>

          <div className='flex gap-4 justify-center items-center'>
            <img className='size-36 lg:size-20' src={Illustrator} alt="Illustrator" />
            <h1 className='lg:text-[2rem] xl:text-[3.8rem] tracking-tighter'>Illustrator</h1>
          </div>

          <div className='flex gap-4 justify-center items-center'>
            <img className='size-36 lg:size-26' src={InDesign} alt="InDesign" />
            <h1 className='lg:text-[rem] xl:text-[3.8rem] tracking-tighter'>InDesign</h1>
          </div>

        </div>
    </section>
        
    </>
  );
}

export default MainSection