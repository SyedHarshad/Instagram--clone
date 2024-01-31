export function Explore_page() {
  return (
    <>
      <div className=" ml-60 w-full pt-6 bg-black">
        <div className=" flex flex-col pl-44 pb-5">
          <div className=" flex flex-row flex-wrap mb-1">
            <div
              className=" flex flex-row flex-wrap gap-1"
              style={{ height: "640px", width: "648px" }}
            >
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
            </div>
            <div className=" bg-white w-80 " style={{ height: "645px" }}></div>
          </div>
          <div className=" flex flex-wrap flex-row">
            <div
              className=" bg-white w-80 mr-1"
              style={{ height: "645px" }}
            ></div>
            <div
              className=" flex flex-row flex-wrap gap-1"
              style={{ height: "640px", width: "648px" }}
            >
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
              <div className=" bg-white h-80 w-80 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
