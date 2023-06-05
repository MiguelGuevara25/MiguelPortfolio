import Logo from "./Logo";
import Miguel from "../img/miguel.png";

const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center my-5 text-white flex-col">
        <p className="text-2xl text-yellow-400 font-bold mt-10">Hello Im</p>
        <Logo />

        <div className="flex md:gap-0 gap-8 md:flex-row flex-col justify-evenly items-center my-10">
          <div className=" border-green-500">
            <img src={Miguel} width={250} className="rounded-full" />
          </div>

          <p className="w-11/12 md:w-1/2 border-red-500">
            Hello! Im Miguel Guevara, a Systems Engineering student and frontend
            developer. My goal is to become a fullstack developer in the future.
            I specialize in HTML, CSS, and JavaScript to create appealing and
            functional interfaces. <br /> <br /> Im always learning and staying
            updated on the latest web development trends and technologies. Im
            passionate about user-centered design and strive to ensure usability
            and accessibility in my projects. Im excited to work in
            collaborative teams and take on new challenges to grow as a
            professional in the frontend development field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
