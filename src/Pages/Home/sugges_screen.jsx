export function Sugges_screen() {
  return (
    <>
      <div className=" bg-black w-96 h-screen">
        <div className=" ml-20 mt-9">
          <Account_switch></Account_switch>
          <Suggestions></Suggestions>
        </div>
      </div>
    </>
  );
}

function Account_switch() {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center">
          <div className=" w-12 h-12 rounded-full bg-white"></div>
          <div className=" mx-3">
            <p className=" text-white font-semibold text-sm ">harshadbabu6</p>
            <p className=" text-neutral-400 font-normal text-sm">
              Syed Harshad Babu
            </p>
          </div>
        </div>
        <p className=" text-blue-500 font-semibold text-xs mr-2">Switch</p>
      </div>
    </>
  );
}

function Suggestions() {
  return (
    <>
      <div className="my-5">
        <div className="flex justify-between items-center">
          <p className=" text-neutral-400 font-semibold text-sm">
            Suggested for you
          </p>
          <p className="  text-neutral-100 font-semibold text-xs mr-2">
            See All
          </p>
        </div>
        <Sugges_Accounts></Sugges_Accounts>
        <Sugges_Accounts></Sugges_Accounts>
        <Sugges_Accounts></Sugges_Accounts>
        <Sugges_Accounts></Sugges_Accounts>
        <Sugges_Accounts></Sugges_Accounts>
        <div className=" mt-10">
          <div className="flex flex-row">
            <p className="  text-neutral-500 font-normal text-xs">About</p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">Help</p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">Press</p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">API</p>
            <p className="  text-neutral-500 font-normal  text-xs px-1">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">Jobs</p>
            <p className="  text-neutral-500 font-normal  text-xs px-1">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">Privacy</p>
            <p className="  text-neutral-500 font-normal  text-xs px-1">.</p>
            <p className="  text-neutral-500 font-normal  text-xs">Terms</p>
            <p className="  text-neutral-500 font-normal  text-xs px-1">.</p>
          </div>
          <div className="flex flex-row mt-1">
            <p className="  text-neutral-500 font-normal text-xs">Locations</p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
            <p className="  text-neutral-500 font-normal text-xs">Language</p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
            <p className="  text-neutral-500 font-normal text-xs">
              Meta Verified
            </p>
            <p className="  text-neutral-500 font-normal  text-xs px-0.5">.</p>
          </div>
          <p className="text-neutral-500 font-normal  text-xs pt-5">
            @ 2023 INSTARAM FROM META
          </p>
        </div>
      </div>
    </>
  );
}

function Sugges_Accounts() {
  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center">
          <div className=" w-12 h-12 rounded-full bg-white"></div>
          <div className="mx-3">
            <p className=" text-white font-semibold text-sm ">bhargavgindi</p>
            <p className=" text-neutral-400 font-normal text-xs">Follows you</p>
          </div>
        </div>
        <p className=" text-blue-500 font-semibold text-xs mr-2">Follow</p>
      </div>
    </>
  );
}
