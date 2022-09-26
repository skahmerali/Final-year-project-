import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { UsersData } from "./context/ContextProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
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
        <Router>
          <UsersData>
            <Navbar />
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
