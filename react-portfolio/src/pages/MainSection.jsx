import "../App.css";
import jem from "../img/jem.png";
import Photoshop from "../assets/ps.svg";
import Affinity from "../assets/Affinity.svg";
import Illustrator from "../assets/Illustrator.svg";
import InDesign from "../assets/InDesign.svg";
import illustration from "../assets/illustration.svg";
import Layout from "../assets/Layout.svg";
import WebDev from "../assets/web dev.svg";

import "../components/bgChangeColor.js";

function MainSection() {
  const portfolioSectionBorders =
    "border-t-40 border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-t-20 max-[426px]:border-s-20 xl:p-30 lg:p-16 md:p-10";
  const portfolioSectionBorders1 =
    " border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-s-20 xl:p-30 lg:p-16 md:p-10";
  const headlineTextClasses =
    "text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] md:leading- lg:text-[12rem] xl:text-[24rem] xl:leading-76 font-medium tracking-tighter";
  const subHeadlineTextClasses =
    "text-center text-4xl max-[426px]:text-[.8rem] md:text-[1.4rem] border rounded-full w-auto p-2";
  const headlineTextClasses2 =
    "text-right max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[12rem] xl:text-[24rem] leading-76 font-medium tracking-tighter";

  const techCards =
    "anim rounded-4xl p-10 flex flex-col justify-center items-center";
  return (
    <>
      {/* first section */}
      <section className={portfolioSectionBorders}>
        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <div className="anim flex justify-start items-center ">
            <h1 className={headlineTextClasses}>BEYOND</h1>
          </div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <div className="anim flex justify-start items-center ">
            <h1 className={headlineTextClasses}>DESIGN</h1>
          </div>

          <div className="anim flex justify-center items-center">
            <h1 className={subHeadlineTextClasses}>2025 - 2026</h1>
          </div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <div className="anim flex justify-center items-center">
            <h1 className={subHeadlineTextClasses}>5 YEAR'S OF GRINDING</h1>
          </div>

          <div className="anim flex justify-end items-center ">
            <h1 className={headlineTextClasses2}>INTO</h1>
          </div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <div className="anim col-start-2 col-end-3 flex justify-end items-center ">
            <h1 className={headlineTextClasses2}>EXPERIENCE</h1>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-50 lg:p-30 md:p-20 max-[426px]:px-8 max-[426px]:py-6">
        <div className="anim grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] ">
          <div className="flex flex-col justify-center items-start max-[426px]:order-2">
            <h1 className="md:self-center lg:text-left lg:self-center xl:self-start text-5x1 max-[426px]:text-[4rem] max-[426px]:leading-20 max-[426px]:self-center max-[426px]:mb-0 md:text-[7rem] lg:text-[14rem] xl:text-[13rem] font-medium tracking-tighter md:leading-28 lg:leading-50 xl:leading-56 mb-4">
              WHO I AM?
            </h1>
            <p className="text-justify text-3xl max-[426px]:text-[1rem] max-[426px]:leading-6 leading-12 md:text-[1rem] md:leading-6 lg:text-2xl lg:leading-10 xl:text-3xl xl:leading-12">
              Hello there! I'm{" "}
              <span className="font-semibold border px-[5.1px] py-[1.2px] rounded-full">
                Jeremy Rellama
              </span>
              , currently pursuing my Bachelor of Science in Information
              Technology (BSIT) at Bicol University Polangui. Originally hailing
              from Camagong, Oas, Albay, I'm deeply passionate about all things
              related to technology and computer science. Whether it's coding,
              software development, or exploring the latest tech trends, I'm
              always eager to dive in and learn more.{" "}
            </p>

            <div className="mt-10 flex gap-20">
              <div>
                <button
                  className="border bg-white text-[2rem] hover:bg-[#f2552e]/80 hover:text-white hover:rounded-2xl hover:border-black px-4 py-2 rounded-2xl
               transition-colors duration-200"
                >
                  Github
                </button>
              </div>

              <div>
                <button
                  className="border bg-white text-[2rem] hover:bg-[#f2552e]/80 hover:text-white hover:rounded-2xl hover:border-black px-4 py-2 rounded-2xl
               transition-colors duration-200"
                >
                  Linkedin
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center max-[426px]:order-1">
            <img
              className="imganim aspect-auto object-cover max-[426px]:size-80 md:size-80 xl:size-200 lg:size-120"
              src={jem}
              alt="Jeremy rellama"
            />
          </div>
        </div>
      </section>

      {/* third section */}
      <section className={portfolioSectionBorders1}>
        <div className="anim flex justify-center items-center">
          <div>
            <h1 className="text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-76 font-medium tracking-tighter">
              SKILLS
            </h1>
          </div>
        </div>
        <div className="mt-20 md:mt-0 lg:mt-0 xl:mt-20 anim grid md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          <div className="flex flex-col justify-center items-center p-8 lg:p-6">
            <img
              className="mb-8 size-50 md:size-30 lg:size-36"
              src={illustration}
              alt="icon"
            />
            <h1 className="md:text-[2rem] lg:m-6 lg:text-[4rem] lg:leading-20 xl:text-[5.4rem] tracking-tighter font-medium">
              Illustration
            </h1>
            <p className="xl:text-[1.6rem]">
              I possess a comprehensive skill set in{" "}
              <span className="font-medium border px-[5.1px] py-[1.2px] rounded-full">
                illustration
              </span>
              , encompassing both traditional and digital techniques. My
              expertise includes a strong understanding of color theory,
              composition, and perspective, allowing me to create visually
              compelling and balanced artworks.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-8 lg:p-6">
            <img
              className="mb-8 size-50 md:size-30 lg:size-36"
              src={WebDev}
              alt="icon"
            />
            <h1 className="md:leading-8 md:text-[2rem] lg:m-2 lg:text-[3.6rem] lg:leading-16 xl:text-[5rem] tracking-tighter font-medium">
              Web Development
            </h1>
            <p className="xl:text-[1.6rem]">
              I excel at designing{" "}
              <span className="font-medium border px-[5.1px] py-[1.2] rounded-full">
                intuitive
              </span>{" "}
              user interfaces and seamless user experiences, ensuring that each
              site is both functional and aesthetically pleasing. My experience
              with responsive design principles allows me to create websites
              that perform optimally across different devices and screen sizes.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-8 lg:p-6">
            <img
              className="mb-8 size-50 md:size-30 lg:size-36"
              src={Layout}
              alt="icon"
            />
            <h1 className="md:text-[2rem] lg:m-6 lg:text-[4rem] lg:leading-20 xl:text-[5.4rem] tracking-tighter font-medium">
              Layout
            </h1>
            <p className="xl:text-[1.6rem]">
              I excel in creating{" "}
              <span className="font-medium border px-[5.1px] py-[1.2] rounded-full">
                {" "}
                visually appealing{" "}
              </span>{" "}
              and user-friendly layouts that effectively communicate content and
              engage audiences. My skills include proficient use of design
              software such as Adobe InDesign, Photoshop, and Illustrator, which
              enable me to craft clean, balanced, and aesthetically pleasing
              designs.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-10 anim grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-8">
          <div className="flex gap-4 justify-center items-center">
            <img
              className="size-36 md:size-20 lg:size-20"
              src={Photoshop}
              alt="Photoshop"
            />
            <h1 className="lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Photoshop
            </h1>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <img
              className="size-36 md:size-20 lg:size-20 rounded-2xl"
              src={Affinity}
              alt="Affinity"
            />
            <h1 className="lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Affinity
            </h1>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <img
              className="size-36 md:size-20 lg:size-20"
              src={Illustrator}
              alt="Illustrator"
            />
            <h1 className="lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Illustrator
            </h1>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <img
              className="size-36 md:size-20 lg:size-20"
              src={InDesign}
              alt="InDesign"
            />
            <h1 className="lg:text-[rem] xl:text-[3.8rem] tracking-tighter">
              InDesign
            </h1>
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section className="border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-30 lg:p-16 md:p-10 max-[426px]:px-8 max-[426px]:py-6">
        <div className="flex justify-center items-center">
          <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-60 font-medium tracking-tighter">
            TECH STACKS
          </h1>
        </div>

        {/* techCards */}
        <div className="anim grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 xl:mt-20">
          <div className={techCards}>
            <svg
              stroke="#f2542d"
              fill="#f2542d"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              HTML
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              CSS
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              PHP
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="10em"
              width="8em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              JavaScript
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="10em"
              width="8em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              Flutter
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.116 23.609c-0.009 0.014-0.025 0.016-0.039 0.020-0.056 0.070-0.142 0.089-0.218 0.122-0.816 0.358-1.63 0.722-2.444 1.084-0.068 0.030-0.129 0.021-0.195-0.001-0.421-0.142-0.838-0.293-1.257-0.441-0.511-0.181-1.021-0.361-1.532-0.541-1.025-0.361-2.050-0.722-3.074-1.085-0.615-0.218-1.232-0.433-1.847-0.65-0.913-0.323-1.829-0.641-2.741-0.968-0.145-0.052-0.299-0.082-0.43-0.168-0.007-0.006-0.014-0.013-0.021-0.019-0.030-0.042-0.041-0.092-0.051-0.141-0.052-0.248-0.081-0.497-0.084-0.751-0.044-3.38-0.005-6.759-0.019-10.139-0-0.055 0.009-0.107 0.018-0.16-0-0.011 0.006-0.017 0.015-0.021 0.008-0.007 0.017-0.008 0.026-0.004 0.052 0.027 0.087 0.074 0.127 0.114 4.537 4.537 9.074 9.074 13.611 13.61 0.043 0.043 0.082 0.090 0.137 0.119 0.008 0.006 0.014 0.013 0.019 0.021zM23.12 23.518c-0.022 0.003-0.039-0.005-0.054-0.020-0.021-0.022-0.043-0.043-0.064-0.064-4.555-4.555-9.109-9.109-13.664-13.664-0.033-0.033-0.071-0.063-0.096-0.104 0.033-0.027 0.072-0.034 0.113-0.035 0.037-0.001 0.074-0.001 0.111-0.001 3.307 0 6.613-0.001 9.92 0.001 0.296 0 0.591 0.020 0.882 0.084 0.059 0.013 0.119 0.025 0.166 0.067 0.007 0.005 0.014 0.011 0.022 0.016 0.086 0.139 0.121 0.299 0.175 0.45 0.433 1.232 0.871 2.462 1.302 3.694 0.278 0.794 0.56 1.587 0.84 2.38 0.454 1.285 0.909 2.57 1.36 3.856 0.058 0.165 0.111 0.332 0.177 0.494 0.032 0.080 0.022 0.153-0.013 0.233-0.305 0.678-0.604 1.359-0.905 2.039-0.071 0.16-0.141 0.321-0.214 0.48-0.015 0.033-0.029 0.068-0.058 0.093zM8.986 21.106c0.069 0.002 0.127 0.038 0.189 0.060 0.294 0.103 0.589 0.205 0.883 0.308 0.601 0.212 1.202 0.425 1.804 0.637 0.532 0.187 1.065 0.372 1.597 0.559 0.354 0.124 0.707 0.251 1.060 0.375 0.624 0.22 1.249 0.439 1.874 0.659 0.34 0.12 0.68 0.241 1.020 0.361 0.634 0.224 1.269 0.446 1.904 0.67 0.35 0.123 0.7 0.247 1.050 0.374 0.064 0.023 0.117 0.019 0.18-0.010 0.28-0.128 0.564-0.249 0.846-0.374 0.212-0.093 0.422-0.189 0.634-0.283 0.343-0.152 0.686-0.302 1.029-0.453 0.090-0.040 0.18-0.079 0.269-0.118-0.169 0.524-0.338 1.048-0.507 1.572-0.102 0.317-0.203 0.635-0.304 0.952-0.068 0.214-0.137 0.428-0.204 0.642-0.030 0.096-0.030 0.098-0.131 0.098-0.453 0-0.906-0.001-1.359-0.001-1.279-0.001-2.557 0.009-3.835-0.005-0.983-0.011-1.966-0.003-2.949-0.009-0.061-0-0.106-0.017-0.148-0.061-0.067-0.072-0.139-0.139-0.209-0.209-1.036-1.030-2.072-2.060-3.108-3.090-0.117-0.116-0.233-0.234-0.351-0.349-0.285-0.277-0.501-0.605-0.691-0.95-0.23-0.42-0.413-0.86-0.538-1.323-0.003-0.010-0.003-0.021-0.004-0.031zM23.343 23.845c0.014-0.107 0.078-0.194 0.118-0.29 0.099-0.239 0.207-0.475 0.312-0.712 0.091-0.205 0.183-0.409 0.274-0.614 0.126-0.285 0.251-0.57 0.377-0.855 0.043-0.096 0.085-0.192 0.132-0.286 0.029-0.057 0.037-0.108 0.014-0.171-0.147-0.408-0.293-0.817-0.437-1.227-0.075-0.211-0.146-0.424-0.22-0.635-0.177-0.506-0.354-1.011-0.532-1.516-0.12-0.34-0.241-0.68-0.361-1.020-0.175-0.495-0.349-0.991-0.523-1.486-0.119-0.337-0.239-0.673-0.358-1.010-0.184-0.522-0.366-1.044-0.55-1.566-0.12-0.34-0.241-0.68-0.361-1.020-0.175-0.495-0.347-0.991-0.524-1.485-0.051-0.142-0.107-0.281-0.141-0.428 0.214 0.043 0.418 0.118 0.621 0.197 0.509 0.2 0.988 0.455 1.417 0.797 0.195 0.156 0.365 0.34 0.541 0.516 0.256 0.255 0.509 0.514 0.765 0.77 0.821 0.823 1.641 1.647 2.463 2.469 0.051 0.051 0.073 0.102 0.072 0.174-0.002 1.826-0.002 3.653-0.003 5.479-0 0.941-0.002 1.883-0.003 2.824 0 0.011 0 0.021 0 0.032-0.001 0.085 0.016 0.085-0.084 0.117-0.16 0.051-0.321 0.102-0.481 0.153-0.812 0.259-1.624 0.519-2.435 0.778-0.023 0.007-0.047 0.012-0.071 0.018-0.008-0.002-0.015-0.003-0.023-0.005zM20.603 9.57c-0.124-0.023-0.247-0.047-0.371-0.069-0.107-0.019-0.214-0.031-0.323-0.037-0.709-0.039-1.418-0.018-2.127-0.019-2.912-0.002-5.823-0.001-8.735-0-0.042 0-0.084 0.002-0.126 0.004-0.007-0.001-0.014-0.002-0.021-0.004 0.183-0.136 0.377-0.256 0.567-0.382 0.491-0.327 0.984-0.651 1.476-0.977 1.025-0.678 2.049-1.358 3.074-2.036 0.524-0.347 1.050-0.691 1.573-1.040 0.093-0.062 0.177-0.137 0.287-0.173 0.226-0.076 0.45-0.056 0.673 0.009 0.31 0.089 0.578 0.252 0.816 0.467 0.088 0.080 0.171 0.167 0.256 0.251 0.778 0.772 1.556 1.545 2.335 2.316 0.059 0.058 0.1 0.121 0.127 0.2 0.167 0.484 0.34 0.967 0.51 1.45 0.005 0.013 0.007 0.027 0.010 0.041zM8.884 9.468c0.029 0.042 0.015 0.089 0.015 0.133 0.001 3.413 0.001 6.826 0.001 10.239 0 0.214 0.019 0.427 0.026 0.64 0.006 0.191 0.046 0.381 0.091 0.567 0.008 0.032 0.027 0.065 0.009 0.1-0.252-0.087-0.504-0.173-0.756-0.261-0.255-0.089-0.509-0.18-0.765-0.268-0.058-0.020-0.105-0.051-0.148-0.095-0.843-0.852-1.688-1.701-2.53-2.553-0.277-0.28-0.473-0.609-0.556-0.999-0.036-0.171-0.040-0.341 0.009-0.511 0.021-0.075 0.052-0.146 0.097-0.209 0.303-0.423 0.58-0.863 0.867-1.295 1.113-1.677 2.222-3.356 3.333-5.034 0.101-0.152 0.203-0.303 0.305-0.455z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              Dart
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              Tailwind
            </h1>
          </div>

          <div className={techCards}>
            <svg
              stroke="currentColor"
              fill="#f2552e"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 34 32"
              height="10em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
              <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
            </svg>
            <h1 className=" xl:text-[4rem] font-medium tracking-tighter">
              ReactJs
            </h1>
          </div>
        </div>
      </section>

      <section className={portfolioSectionBorders1}>
        <div className="flex justify-center items-center">
          <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[12rem] xl:leading-60 font-medium tracking-tighter">
            STORY BEHIND THE CODE
          </h1>
        </div>

        <div className="anim grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mt-20">
          <div className="anim w-[300px] h-[350px] mx-auto [perspective:1000px] cursor-pointer group">
            <div
              className="relative w-full h-full
              transition-transform duration-[600ms]
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >
              <div
                className="absolute inset-0 flex items-center justify-center
                bg-white border p-10 rounded-2xl
                [backface-visibility:hidden]"
              >
                <h1 className="text-[2rem]">2021-2024</h1>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center
                bg-[#f2552e] p-10 rounded-2xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum eos mollitia distinctio totam ad, corporis vel consectetur corrupti rem?</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

// window.addEventListener('scroll', () => {
//   const scrollTop = window.scrollY; // How many pixels scrolled vertically
//   console.log('Scrolled:', scrollTop, 'px');
// });

export default MainSection;
