import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SubNav from "./components/subnav/SubNav";
import { UsersData } from "./context/ContextProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <div className="bg-primary-HR min-h-screen min-w-fit">
        <Router>
          <UsersData>
            <Navbar />
            {/* <SubNav /> */}
            <div className="container  mx-auto ">
              <MainRoutes />
            </div>
          </UsersData>
        </Router>
      </div>
    </>
  );
}

export default App;
