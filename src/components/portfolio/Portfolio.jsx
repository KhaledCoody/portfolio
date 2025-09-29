import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "FULL-STACK DEVELOPMENT",
    title: "StudyZone - Education Platform",
    description:
      "A comprehensive education platform built with .NET 9, PostgreSQL, and Flutter. Features include subjects, quizzes, library, notifications, and gamification.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "BACKEND DEVELOPMENT",
    title: "Intelligent Assistance for Personalized Planning",
    description:
      "AI-driven goal-tracking platform using .NET 9, SignalR, and EF Core. Features real-time updates, personalized planning, and habit monitoring.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent projects, showcasing my skills in
            building scalable applications and solving complex problems.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
