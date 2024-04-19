import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Component/SideNavbar/navbar";
import Home from "./Pages/Home/home";
import Reels_page from "./Pages/Reels/reels";
import Menu from "./Component/Popup/More_menu";
import { Explore_page } from "./Pages/Explore/Explore_page";
import { Route, Routes } from "react-router-dom";
import Login_page from "./Pages/LogIn/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <p className=" text-2xl text-red-500">Syed Harshad Babu</p> */}

      <Login_page></Login_page>

      {/* <div className="flex flex-row">
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Reels" element={<Reels_page />} />
          <Route path="/explore" element={<Explore_page />} />
          <Route path="/login" element={<Login_page />} />
        </Routes>

        {/* <Menu></Menu> */}
      {/* <Home></Home> */}
      {/* <Reels_page></Reels_page> */}
      {/* <Explore_page></Explore_page>
      </div>  */}
    </>
  );
}

export default App;
