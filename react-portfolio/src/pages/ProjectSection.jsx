import "../App.css";

function ProjectSection() {
  const languageCard = "xl:text-[4rem] py-2 px-4 border rounded-2xl bg-white";
  const buttonCard =
    "xl:text-[1.8rem] py-2 px-4 border rounded-2xl bg-white flex items-center gap-2";
  const gitButton =
    "xl:text-[1.8rem] py-2 px-4 border-2 border-dashed rounded-2xl flex items-center gap-2";
  return (
    <>
      <section className="border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-30 lg:p-16 md:p-10 max-[426px]:px-8 max-[426px]:py-6">
        <div className="flex justify-center items-center">
          <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-60 lg:leading-34 font-medium tracking-tighter">
            FEATURED PROJECTS
          </h1>
        </div>

        <div className="grid xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 lg:grid-cols-1">
          <div className="flex flex-col justify-start items-start xl:p-10 lg:p-0 md:order-2 lg:order-2 xl:order-1">
            <h1 className="anim max-[426px]:text-[2rem] max-[426px]:leading-10 md:text-[4rem] lg:text-[6rem] xl:text-[6rem] lg:leading-auto xl:leading-auto font-medium tracking-tighter ">
              Project Name
            </h1>

            <p className="anim text-left xl:text-[1.4rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              saepe ea perferendis, nobis recusandae voluptate ex veritatis
              culpa fugiat repellat suscipit provident reprehenderit, quaerat
              atque quisquam, earum aut eveniet? Ex eum alias amet temporibus
              natus, neque dolorem veniam nisi voluptatibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio, illo doloribus esse
              vero incidunt, dicta commodi magni obcaecati aliquam, sed
              recusandae architecto dolore repudiandae corrupti consequatur
              vitae! Voluptatibus, impedit reiciendis cupiditate at atque
              exercitationem reprehenderit? Quasi esse laudantium aperiam? Porro
              pariatur, vitae provident placeat rem officia animi? Dolorem,
              provident et.
            </p>

            <div className="flex gap-8 xl:mt-8 ">
              <h3 className={languageCard}>HTML</h3>
              <h3 className={languageCard}>HTML</h3>
              <h3 className={languageCard}>HTML</h3>
              <h3 className={languageCard}>HTML</h3>
            </div>

            <div className="flex gap-8 xl:mt-8">
              <button className={buttonCard}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Live Demo
              </button>

              <button className={gitButton}>
                {" "}
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
                </svg>{" "}
                Github
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center bg-amber-300 rounded-3xl md:order-1 lg:order-1 xl:order-2 ">
            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
