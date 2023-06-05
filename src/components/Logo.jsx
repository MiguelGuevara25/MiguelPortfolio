import TypeWriterEffect from "react-typewriter-effect";

const Logo = () => {
  return (
    <TypeWriterEffect
      cursorColor="transparent"
      multiText={[
        "MIGUEL GUEVARA",
        "FRONTEND DEVELOPER",
        "DEVELOPER REACT JR.",
      ]}
      multiTextLoop={true}
      multiTextDelay={1000}
      typeSpeed={80}
      textStyle={{
        textAlign: "center",
        color: "#fff",
        fontSize: "4rem",
        fontWeight: "bold",
      }}
    />
  );
};

export default Logo;
