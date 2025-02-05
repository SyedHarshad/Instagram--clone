import {
  ActivitySquare,
  Bookmark,
  MessageSquareWarning,
  Moon,
  Settings,
} from "lucide-react";

function Menu_items(props) {
  return (
    <>
      <div
        className={` bg-neutral-800 fixed z-10 w-64 rounded-xl ${
          props.Visibility ? "visible" : "hidden"
        }`}
        style={{ margin: "250px 0 0 10px", height: "410px" }}
      >
        <div className=" px-2 py-2">
          <div className="flex flex-row px-3 py-3.5 gap-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <Settings color="white" />
            <p className=" text-white text-sm font-light">Settings</p>
          </div>
          <div className="flex flex-row px-3 py-3.5 gap-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <ActivitySquare color="white" />
            <p className=" text-white text-sm font-light">Your activity</p>
          </div>
          <div className="flex flex-row px-3 py-3.5 gap-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <Bookmark color="white" />
            <p className=" text-white text-sm font-light">Save</p>
          </div>
          <div className="flex flex-row px-3 py-3.5 gap-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <Moon color="white" />
            <p className=" text-white text-sm font-light">Switch appearance</p>
          </div>
          <div className="flex flex-row px-3 py-3.5 gap-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <MessageSquareWarning color="white" />
            <p className=" text-white text-sm font-light">Report a problem</p>
          </div>
        </div>
        <div className=" bg-neutral-700 h-1.5 w-full"></div>
        <div className=" px-2 py-2">
          <div className=" px-3 py-3.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <p className=" text-white text-sm font-light">Switch accounts</p>
          </div>
        </div>
        <div className=" bg-neutral-700 h-px w-full"></div>
        <div className=" px-2 py-2">
          <div className=" px-3 py-3.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            <p className=" text-white text-sm font-light">Log out</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu_items;
