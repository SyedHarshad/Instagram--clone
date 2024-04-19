import logo from "./Asserts/Instagram_blackcolor.png";
import facebook_image from "./Asserts/facebook_icon.jpg";
import google_play from "./Asserts/google_play.png";
import microsoft_badge from "./Asserts/Get_it_from_Microsoft_Badge.png";

function Login_page() {
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
              placeholder="Phone number, username, or email"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-64 h-9 border rounded p-2 text-xs"
            />
          </div>
          <button className=" w-64 h-8 bg-blue-400 text-white rounded-md font-semibold mt-4">
            Log in
          </button>
          <div className=" flex flex-row justify-center items-center mt-5">
            <div id="line" className=" w-24 border-t-2 "></div>
            <p className="text-xs font-semibold text-gray-500 px-5">OR</p>
            <div id="line" className=" w-24 border-t-2 "></div>
          </div>
          <div className=" flex flex-row gap-2 mt-8">
            <img src={facebook_image} alt="facebook_image" width="20" />
            <p className=" text-sm font-semibold text-blue-900">
              Log in with Facebook
            </p>
          </div>
          <p className=" text-xs hover: cursor-pointer text-gray-700 mt-5">
            Forgot password?
          </p>
        </div>
        <div className=" flex flex-row justify-center gap-1 border px-16 py-5">
          <p className=" text-sm ">Don't have an account?</p>
          <p className=" text-sm font-semibold text-blue-400 hover: cursor-pointer">
            Sign up
          </p>
        </div>
        <div className=" my-3">
          <p className="text-sm text-center">Get the app.</p>
          <div className="flex flex-row justify-center items-center my-1">
            <img
              src={google_play}
              alt="Google_play"
              className=" object-fill h-14"
            />
            <img
              src={microsoft_badge}
              alt="microsoft_badge"
              className=" object-fill h-10"
            />
          </div>
        </div>
        <div id="Login_Description" className=" my-10">
          <div className=" flex flex-row justify-center gap-4">
            <p className=" text-xs text-gray-500">Meta</p>
            <p className=" text-xs text-gray-500">About</p>
            <p className=" text-xs text-gray-500">Blog</p>
            <p className=" text-xs text-gray-500">Jobs</p>
            <p className=" text-xs text-gray-500">Help</p>
            <p className=" text-xs text-gray-500">API</p>
            <p className=" text-xs text-gray-500">Privacy</p>
            <p className=" text-xs text-gray-500">Terms</p>
            <p className=" text-xs text-gray-500">Locations</p>
            <p className=" text-xs text-gray-500">Instagram Lite</p>
            <p className=" text-xs text-gray-500">Threads</p>
            <p className=" text-xs text-gray-500">
              Contact Uploading & Non-Users
            </p>
            <p className=" text-xs text-gray-500">Meta Verified</p>
          </div>
          <div className=" flex flex-row justify-center gap-3 my-5">
            <select
              name="cars"
              id="cars"
              className=" text-xs  text-gray-500 w-16"
            >
              <option value="English">English</option>
              <option value="Italiano">Italiano</option>
              <option value="English (UK)">English (UK)</option>
              <option value="Dansk">Dansk</option>
            </select>
            <p className=" text-xs  text-gray-500">
              © 2024 Instagram from Meta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_page;
