import { useEffect, useRef, useState } from "react";
import Menu_items from "../Popup/More_menu";
import image1 from "./Assests/Instagram_whitecolor.png";
import {
  AtSign,
  Compass,
  Film,
  Heart,
  Home,
  Menu,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [visibility, Setvisibility] = useState(false);
  let menuref = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuref.current.contains(e.target)) {
        Setvisibility(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const ClickHandler = () => {
    Setvisibility(!visibility);
  };

  return (
    <>
      <div className="fixed h-screen bg-black w-60">
        <div className="flex flex-row">
          <div className="flex flex-col w-60 px-3 pt-2 pb-5">
            <div className="ml-3.5 my-8">
              <img
                src={image1}
                width="105"
                className="hover:cursor-pointer"
              ></img>
            </div>
            <div className=" flex flex-col">
              <Link to="/home">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className=" flex flex-row gap-4">
                    <Home color="white"></Home>
                    <p className=" text-white ">Home</p>
                  </div>
                </div>
              </Link>
              <Link to="/search">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className=" flex flex-row gap-4">
                    <Search color="white"></Search>
                    <p className=" text-white ">Search</p>
                  </div>
                </div>
              </Link>
              <Link to="/explore">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className=" flex flex-row gap-4">
                    <Compass color="white"></Compass>
                    <p className=" text-white ">Explore</p>
                  </div>
                </div>
              </Link>
              <Link to="/reels">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <Film color="white"></Film>
                    <p className=" text-white ">Reels</p>
                  </div>
                </div>
              </Link>
              <Link to="/messsage">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <MessageCircle color="white"></MessageCircle>
                    <p className=" text-white ">Message</p>
                  </div>
                </div>
              </Link>
              <Link to="/notification">
                <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                  <div className="flex flex-row gap-4">
                    <Heart color="white"></Heart>
                    <p className=" text-white ">Notifications</p>
                  </div>
                </div>
              </Link>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <PlusSquare color="white"></PlusSquare>
                  <p className=" text-white ">Create</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <div className="border border-white rounded-full w-6"></div>
                  <p className=" text-white ">Profile</p>
                </div>
              </div>
              <div className=" h-14"></div>
            </div>
            <div className="flex flex-col ">
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <AtSign color="white"></AtSign>
                  <p className=" text-white ">Threads</p>
                </div>
              </div>
              <div
                className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer"
                onClick={ClickHandler}
                ref={menuref}
              >
                <div className="flex flex-row gap-4">
                  <Menu color="white"></Menu>
                  <p className=" text-white ">More</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-screen w-px bg-neutral-900 "></div>
        </div>
      </div>
      <Menu_items Visibility={visibility}></Menu_items>
    </>
  );
}
