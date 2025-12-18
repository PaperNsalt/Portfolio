function StoryCard() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-16 md:text-[7rem] lg:text-[10rem] xl:text-[12rem] xl:leading-60 font-medium tracking-tighter md:leading-30 md:text-center max-[426px]:text-center">
          STORY BEHIND THE CODE
        </h1>
      </div>

      <div className="anim grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center justify-center gap-10 md:mt-0 lg:mt-10 xl:mt-20">
        {/* card1 */}
        <div className="anim w-[350px] h-[450px] max-[426px]:w-[260px] mx-auto [perspective:1000px] cursor-pointer group">
          <div
            className="relative w-full h-full
              transition-transform duration-[600ms]
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center
                bg-[#39393f]/40 border p-10 rounded-2xl
                [backface-visibility:hidden]"
            >
              <h1 className="text-[4rem] tracking-tighter leading-16 font-medium">
                The Beginning <br /> (2021)
              </h1>

              <div className="flex flex-row gap-6 justify-evenly items-center flex-wrap">
                <h3 className="text-gray-500">HTML</h3>
                <h3 className="text-gray-500">CSS</h3>
                <h3 className="text-gray-500">JavaScript</h3>
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center
                bg-[#f2552e] p-10 rounded-2xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
            >
              <p className="text-[1.4rem]">
                In 2021, I began my journey into web development by creating
                simple static web pages. This phase focused on mastering the
                fundamentals of HTML, CSS, and JavaScript, allowing me to
                understand how websites are structured, styled, and made
                interactive. Through consistent practice, I developed a strong
                foundation in writing clean code and building visually organized
                layouts.
              </p>
            </div>
          </div>
        </div>

        <div className="anim w-[350px] h-[450px] max-[426px]:w-[260px] mx-auto [perspective:1000px] cursor-pointer group">
          <div
            className="relative w-full h-full
              transition-transform duration-[600ms]
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center
                bg-[#39393f]/40 border p-10 rounded-2xl
                [backface-visibility:hidden]"
            >
              <h1 className="text-[4rem] tracking-tighter leading-16 font-medium">
                Growth to Full-Stack <br /> (2022–2024)
              </h1>

              <div className="flex flex-row gap-6 justify-evenly items-center flex-wrap">
                <h3 className="text-gray-500">HTML</h3>
                <h3 className="text-gray-500">CSS</h3>
                <h3 className="text-gray-500">JavaScript</h3>
                <h3 className="text-gray-500">PHP</h3>
                <h3 className="text-gray-500">SQL</h3>
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center
                bg-[#f2552e] p-10 rounded-2xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
            >
              <p className="text-[1.4rem]">
                From 2022 to early 2024, I continuously improved my skills by
                building more dynamic and responsive websites. During this
                period, I transitioned into full-stack development, using HTML,
                CSS, and JavaScript for the front-end while integrating PHP and
                MySQL on the back-end to manage data, authentication, and
                application logic. This stage strengthened my understanding of
                complete web systems and real-world development workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="anim w-[350px] h-[450px] max-[426px]:w-[260px] mx-auto [perspective:1000px] cursor-pointer group">
          <div
            className="relative w-full h-full
              transition-transform duration-[600ms]
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center
                bg-[#39393f]/40 border p-10 rounded-2xl
                [backface-visibility:hidden]"
            >
              <h1 className="text-[4rem] tracking-tighter leading-16 font-medium">
                Modern Web & App Development <br /> (2024–2025)
              </h1>

              <div className="flex flex-row gap-6 justify-evenly items-center flex-wrap">
                <h3 className="text-gray-500">ReactJs</h3>
                <h className="text-gray-500">Tailwind CSS</h>
                <h3 className="text-gray-500">Dart</h3>
                <h3 className="text-gray-500">Flutter</h3>
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center
                bg-[#f2552e] p-10 rounded-2xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
            >
              <p className="text-[1.4rem]">
                From 2024 to 2025, I expanded my skill set by adopting modern
                technologies for both web and mobile development. I started
                building web applications using React.js and Tailwind CSS to
                create fast, scalable, and visually modern interfaces, while
                also developing mobile applications using Flutter and Dart. This
                stage represents my growth into creating cross-platform,
                user-centered solutions with a strong focus on performance,
                design, and usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
