import { useState } from "react";
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

export function Navbar() {
  const [visibility, Setvisibility] = useState("hidden");

  const ClickHandler = () => {
    if (visibility === "visible") {
      Setvisibility("hidden");
    } else {
      Setvisibility("visible");
    }
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
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className=" flex flex-row gap-4">
                  <Home color="white"></Home>
                  <p className=" text-white ">Home</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className=" flex flex-row gap-4">
                  <Search color="white"></Search>
                  <p className=" text-white ">Search</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className=" flex flex-row gap-4">
                  <Compass color="white"></Compass>
                  <p className=" text-white ">Explore</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <Film color="white"></Film>
                  <p className=" text-white ">Reels</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <MessageCircle color="white"></MessageCircle>
                  <p className=" text-white ">Message</p>
                </div>
              </div>
              <div className="p-3 my-1 hover:bg-neutral-800 rounded-md cursor-pointer">
                <div className="flex flex-row gap-4">
                  <Heart color="white"></Heart>
                  <p className=" text-white ">Notifications</p>
                </div>
              </div>
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
