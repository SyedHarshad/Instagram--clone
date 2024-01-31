import Posts from "./Posts";

export function Main_screen() {
  return (
    <>
      <div>
        <div className=" flex flex-col">
          <Stories></Stories>
          <div className=" bg-white" style={{ width: "630px" }}>
            {" "}
            {/*style={{ width: "630px" }} */}
            <Posts></Posts>
            <Posts></Posts>
          </div>
        </div>
      </div>
    </>
  );
}

function Stories() {
  return (
    <div className=" bg-black h-32 mb-2.5">
      <div className=" bg-black my-4 py-2.5" style={{ height: "101px" }}>
        {" "}
        {/* style={{ height: "101px" }} */}
        <div className=" flex flex-row gap-x-4">
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
        </div>
      </div>
    </div>
  );
}

function Story() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" bg-white border-2 border-red-400 rounded-full w-16 h-16"></div>
        <div>
          <p className=" text-white text-xs font-extralight mt-1">Harshad</p>
        </div>
      </div>
    </>
  );
}
