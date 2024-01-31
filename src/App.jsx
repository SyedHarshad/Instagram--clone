import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Component/SideNavbar/navbar";
import Home from "./Pages/Home/home";
import Reels_page from "./Pages/Reels/reels";
import Menu from "./Component/Popup/More_menu";
import { Explore_page } from "./Pages/Explore/Explore_page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <p className=" text-2xl text-red-500">Syed Harshad Babu</p> */}
      <div className="flex flex-row">
        <Navbar></Navbar>
        {/* <Menu></Menu> */}
        {/* <Home></Home> */}
        {/* <Reels_page></Reels_page> */}
        <Explore_page></Explore_page>
      </div>
    </>
  );
}

export default App;
