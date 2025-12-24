import { FacebookIcon, GithubFooterIcon, GmailIcon, InstagramIcon, LinkedInFooterIcon, LinkedInIcon } from "./components/IconComponent";
import FooterSocialCard from "./components/FooterSocialCardComponent";

function Footer(){
  return(
    <footer className="bg-[#f2552e] py-0 px-50">

      <div className="flex justify-start items-start">
        <h1 className="text-right max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[12rem] leading-76 font-medium tracking-tighter">GET IN TOUCH </h1>
      </div>
{/* grid-cols-[repeat(auto-fit,minmax(100px,1fr))] */}
      <div className="grid grid-cols-2 gap-6">

        <FooterSocialCard
        icon={FacebookIcon}
        platform="FACEBOOK"
        username="Jeremy Rellama"
        url="https://web.facebook.com/JEREMY.RELLAMA17"
        />

        <FooterSocialCard 
        icon={InstagramIcon}
        platform="INSTAGRAM"
        username="_Jemmmmm"
        url="https://www.instagram.com/_jjemmmm/"
        />

        <FooterSocialCard 
        icon={GmailIcon}
        platform="GMAIL"
        username="jeremyrellama17@gmail.com"
        url="https://github.com/PaperNsalt"
        />

        <FooterSocialCard 
        icon={LinkedInFooterIcon}
        platform="LINKEDIN"
        username="Jeremy Rellama"
        url="https://www.linkedin.com/in/jeremy-rellama-39292a339/"
        />

      </div>

      <div className="xl:mt-20 p-10 flex flex-col">
        <p className="xl:text-[2rem]">Built with React.js and Tailwind CSS.</p>
        <p className="xl:text-[1.4rem]">Copyright © 2025. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer