import { useState, useEffect } from "react";

import PrincipalPage from "./components/PrincipalPage";
import ScreenLoader from "./components/ScreenLoader";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {screenLoading ? (
        <ScreenLoader />
      ) : (
        <>
          <PrincipalPage />
        </>
      )}
    </>
  );
}

export default App;
