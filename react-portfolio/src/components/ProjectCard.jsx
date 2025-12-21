import ButtonComponent from "../components/ButtonComponent.jsx"
import { GithubIcon, LiveDemoIcon } from "./IconComponent.jsx";
import { LinkedInIcon } from "./IconComponent.jsx";

function ProjectCard({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
  imageAlt,
}) {
  const languageCard =
    "anim xl:text-[4rem] py-2 px-4 border rounded-2xl bg-white";
  const buttonCard =
    "anim xl:text-[1.4rem] py-2 px-4 border rounded-2xl bg-white flex items-center gap-2 hover:bg-[#f2552e]/80 hover:text-white hover:border-black transition-colors duration-200";
  const gitButton =
    "anim xl:text-[1.4rem] py-2 px-4 border-2 border-dashed rounded-2xl flex items-center gap-2 border border-dashed hover:border-solid border-dashed border-black/40 hover:border-black transition-all duration-200";

  return (
    <div className="grid xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-1 mt-10">
      {/* TEXT SIDE */}
      <div className="flex flex-col justify-start items-start xl:p-10 lg:p-0 max-[426px]:order-2 md:order-2 lg:order-2 xl:order-1">
        <h1 className="anim md:text-[4rem] lg:text-[5rem] font-medium tracking-tighter xl:text-left lg:leading-20 xl:leading-20">
          {title}
        </h1>

        <p className="anim text-left xl:text-[1.4rem] mt-4">{description}</p>

        <div className="flex flex-wrap gap-4 xl:mt-6">
          {technologies.map((tech, index) => (
            <h3 key={index} className={languageCard}>
              {tech}
            </h3>
          ))}
        </div>

        <div className="flex gap-6 xl:mt-6">
          {liveLink && (
            <ButtonComponent 
            href = "https://github.com/PaperNsalt"
                label = "Live Demo"
                newTab
                icon ={LiveDemoIcon}
            />
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <button className={gitButton}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
                Github
              </button>
            </a>
          )}
        </div>
      </div>

      {/* IMAGE / PREVIEW SIDE */}
      <div className="xl:p-10 flex justify-center items-center rounded-3xl mt-10 max-[426px]:order-1 md:order-1 lg:order-1 xl:order-2">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className=" anim w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <span className="text-xl opacity-50">No Preview</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
