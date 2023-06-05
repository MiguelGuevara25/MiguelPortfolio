import "../styles/loader.css";

const ScreenLoader = () => {
  return (
    <div className=" h-screen flex justify-center items-center flex-col animationPage bg-zinc-800">
      <span className="loader"></span>
    </div>
  );
};

export default ScreenLoader;
