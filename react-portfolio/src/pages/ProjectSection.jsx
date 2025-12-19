import ProjectCard from "../components/ProjectCard.jsx";
import QuizApplication from "../img/QuizApplication.png"

function ProjectSection() {
  return (
    <section className="border-e-40 border-b-40 xl:p-30 lg:p-16 md:p-10 px-8 py-6 max-[426px]:border-e-20 max-[426px]:border-b-20 md:border-e-40 md:border-b-40">
      <div className="flex justify-center items-center">
        <h1 className="anim text-[4rem] md:text-[7rem] xl:text-[14rem] font-medium tracking-tighter xl:leading-50">
          FEATURED PROJECTS
        </h1>
      </div>

      <ProjectCard
        title="TALUBÒ Crop Monitoring App"
        description="A mobile application designed to help farm owners monitor crops, manage tasks such as watering and fertilizing, and track seedling growth remotely."
        technologies={["React Native", "Laravel", "MySQL"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/your-repo"
        image={QuizApplication}
        imageAlt="Preview"
      />

      <ProjectCard
        title="C2C E-Commerce Platform"
        description="A customer-to-customer e-commerce website with premium sellers, featured listings, and admin tracking."
        technologies={["PHP", "MySQL", "JavaScript"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/your-repo"
        image={QuizApplication}
        imageAlt="Preview"
      />
    </section>
  );
}

export default ProjectSection;
