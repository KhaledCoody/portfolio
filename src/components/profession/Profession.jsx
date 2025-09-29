import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I build scalable and efficient backend systems using .NET technologies, focusing on clean architecture, performance optimization, and database design.",
  },
  {
    id: 2,
    title: "Problem Solving & Algorithms",
    description:
      "With 500+ problems solved on Codeforces and ECPC participation, I excel in algorithmic thinking, data structures, and competitive programming.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "I develop complete applications combining backend APIs with modern frontend technologies, ensuring seamless integration and user experience.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in backend development, algorithmic problem-solving, and
            building scalable applications that solve real-world problems.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines strong technical skills with practical experience
            to deliver solutions that are both efficient and maintainable.
          </p>
        </div>
        <a
          href="mailto:khaled.hassan.002299@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
