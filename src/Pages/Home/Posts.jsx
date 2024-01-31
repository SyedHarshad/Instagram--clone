import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Save,
  Share2,
  Smile,
} from "lucide-react";

function Posts() {
  return (
    <>
      <div id="main_screen_articles" className=" flex justify-center">
        <div
          id="articles"
          className="flex flex-col items-center"
          style={{ width: "470px" }}
        >
          <div id="article" className=" flex flex-col w-full ">
            <Post_head></Post_head>
            <Post_body></Post_body>
            <Post_foot></Post_foot>
            <div className=" bg-neutral-500 w-full h-px my-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Post_head() {
  return (
    <>
      <div id="Post_header" className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div
            className=" bg-black rounded-full w-10 h-10"
            id="Account_profile"
          ></div>
          <div id="Account_name">
            <p className=" mx-2 font-semibold text-sm">singarayakondaupdates</p>
          </div>
          <div id="post_time">
            <p className=" font-semibold text-sm m-px">23h</p>
          </div>
        </div>
        <div id="more_options" className="flex items-center">
          <MoreHorizontal />
        </div>
      </div>
    </>
  );
}

function Post_body() {
  return (
    <>
      <div id="Post_body" className="w-full my-2.5" style={{ height: "585px" }}>
        {" "}
        {/* style={{ height: "585px" }} */}
        <div className=" w-full h-full bg-green-500"></div>
      </div>
    </>
  );
}

function Post_foot() {
  return (
    <>
      <div id="Post_footer">
        <div className="flex flex-row justify-between mb-2.5">
          <div id="Like_Comment_Share" className="flex flex-row">
            <Heart />
            <MessageCircle className=" ml-3" />
            <Share2 className=" ml-3" />
          </div>
          <div id="Save">
            <Save />
          </div>
        </div>
        <div className=" mb-1">
          <p>4,478 likes</p>
        </div>
        <div className="flex flex-row gap-1 mb-0.5">
          <p className="font-semibold text-sm">singarayakondaupdates</p>
          <p className=" font-normal text-sm">Good morning !!</p>
        </div>
        <div className=" mb-1 ">
          <p className=" font-normal text-sm ">View all 30 comments</p>
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Add a comment..."
            cols={4}
            className=" font-normal text-sm outline-none w-full"
          />
          <Smile size="16px" color="black" />
        </div>
      </div>
    </>
  );
}

export default Posts;
