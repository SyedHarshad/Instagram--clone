import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";

function Reels_page() {
  return (
    <>
      <div className=" ml-60 w-full pt-8 bg-black">
        <div className="px-8">
          <div className="flex flex-row justify-center">
            <div className=" flex flex-col">
              <Reel></Reel>
              <Reel></Reel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Reels() {
  return (
    <>
      <Reel></Reel>
      <div id="divider" className=" h-4 w-full"></div>
    </>
  );
}

function Reel() {
  return (
    <>
      <div className="">
        <div className="flex flex-row">
          <div
            className=" bg-red-500 h-full"
            style={{ height: "657px ", width: "370px" }}
          ></div>
          <div
            className=" ml-3 flex flex-col justify-end items-center mb-1"
            style={{ width: "60px" }}
          >
            <div className=" h-16">
              <div className=" content-center pb-0.5">
                <Heart color={`white`}></Heart>
              </div>
              <p className={` text-white text-xs text-center`}>41.1K</p>
            </div>
            <div className=" h-16">
              <div className=" content-center pb-0.5">
                <MessageCircle color={`white`}></MessageCircle>
              </div>
              <p className={` text-white text-xs text-center `}>41</p>
            </div>
            <div className=" h-14">
              <div className=" content-center">
                <Send color={`white`}></Send>
              </div>
            </div>
            <div className=" h-12">
              <div className=" content-center">
                <Bookmark color={`white`}></Bookmark>
              </div>
            </div>
            <div className=" h-14">
              <div className=" content-center">
                <MoreHorizontal color={`white`}></MoreHorizontal>
              </div>
            </div>
            <div>
              <div className="w-6 h-6 rounded-sm bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="divider" className=" h-4 w-full"></div>
    </>
  );
}

export default Reels_page;
