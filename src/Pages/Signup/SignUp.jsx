import logo from "./Asserts/Instagram_blackcolor.png";

function SignUp() {
  return (
    <div className="loginPage">
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col items-center border px-10 pt-14 pb-6 m-3">
          <img
            src={logo}
            alt="InstagramLogo"
            width="180"
            className=" pb-10 hover:cursor-pointer"
          />
          <div id="Inputs_Fields" className="flex flex-col items-center gap-1">
            <input
              type="text"
              placeholder="Mobile Number or Email"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
            <input
              type="text"
              placeholder="Full Name"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
            <input
              type="text"
              placeholder="Username"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
          </div>
          <button className=" w-64 h-8 bg-blue-400 text-white rounded-md font-semibold mt-4">
            Sign up
          </button>
          <div className=" flex flex-row justify-center items-center mt-5">
            <div id="line" className=" w-24 border-t-2 "></div>
            <p className="text-xs font-semibold text-gray-500 px-5">OR</p>
            <div id="line" className=" w-24 border-t-2 "></div>
          </div>
          <div className=" flex flex-row gap-2 mt-8">
            {/* <img src={facebook_image} alt="facebook_image" width="20" /> */}
            <p className=" text-sm font-semibold text-blue-900">
              Log in with Facebook
            </p>
          </div>
          <p className=" text-xs hover: cursor-pointer text-gray-700 mt-5">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
