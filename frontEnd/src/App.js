import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SubNav from "./components/subnav/SubNav";
import { UsersData } from "./context/ContextProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="bg-primary-HR min-h-screen min-w-fit">
=======
<<<<<<< HEAD
 {/* <Signin /> */}
     <h1>COMING SOON.......</h1>
    {/* <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/blogs' element={<Blogs/>}/>
    </Routes> */}

 
      <h1>hello</h1>
=======
      <div className="bg-primary-HR min-h-screen">
>>>>>>> cb11b70b5eb33a642f5676c9712a1049a12b0ba8
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
>>>>>>> 52e2df548f056099652bf54c3b39c078312b5259
    </>
  );
}

export default App;
