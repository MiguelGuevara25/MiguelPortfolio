import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-white uppercase font-bold text-3xl titles my-5">
        Contact me to work together {":)"}
      </h1>

      <div className="flex justify-between gap-5 md:flex-row items-center flex-col">
        <form className="flex flex-col gap-3 rounded-xl p-5 w-full md:w-1/2">
          <h2 className="font-bold text-4xl text-white">Send Email</h2>
          <input
            type="text"
            className="bg-white border-4 rounded-lg p-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-white border-4 rounded-lg p-2"
            placeholder="Email"
          />

          <input
            type="submit"
            value="Enviar"
            className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-xl cursor-pointer hover:bg-yellow-500 transition-colors uppercase"
          />
        </form>

        <div className="text-white border-white p-5 rounded-xl flex w-1/2 items-center flex-col gap-5">
          <h2 className="font-bold text-4xl">Social Networks</h2>

          <div className="flex gap-3 md:gap-5 flex-col md:flex-row">
            <div className="flex items-center gap-2">
              <FaGithub />
              <a
                href="https://github.com/MiguelGuevara25"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/migueldev1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaTwitter />
              <a
                href="https://twitter.com/Miguel_Guevaraa"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>

            <div className="flex items-center gap-2">
              <IoMdMail />
              <span>Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
