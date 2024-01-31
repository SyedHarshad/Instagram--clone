import { Main_screen } from "./main_screen";
import { Sugges_screen } from "./sugges_screen";

function Home() {
  const color = "black";

  return (
    <>
      <div className={` ml-60 w-full bg-${color} `}>
        <div className="flex justify-center">
          <div className=" flex flex-row justify-center">
            <Main_screen></Main_screen>
            <Sugges_screen></Sugges_screen>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
