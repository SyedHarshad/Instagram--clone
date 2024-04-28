import logo from "./Asserts/Instagram_blackcolor.png";
import facebook_image from "./Asserts/Facebook_Lite_logo.png";
import google_play from "./Asserts/google_play.png";
import microsoft_badge from "./Asserts/Get_it_from_Microsoft_Badge.png";

function SignUp() {
  return (
    <div className="loginPage">
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col items-center border px-10 pt-14 pb-6 m-3">
          <img
            src={logo}
            alt="InstagramLogo"
            width="180"
            className=" pb-5 hover:cursor-pointer"
          />
          <p className=" font-semibold text-gray-500">
            Sign up to see photos and videos
          </p>
          <p className=" font-semibold text-gray-500">from your friends.</p>
          <div className=" flex flex-row justify-center items-center w-64 h-8 gap-2 bg-blue-400 rounded-md mt-4 hover:cursor-pointer">
            <img src={facebook_image} alt="facebook_image" width="17" />
            <p className=" text-sm font-semibold text-white">
              Log in with Facebook
            </p>
          </div>
          <div className=" flex flex-row justify-center items-center my-3">
            <div id="line" className=" w-24 border-t-2 "></div>
            <p className="text-xs font-semibold text-gray-500 px-5">OR</p>
            <div id="line" className=" w-24 border-t-2 "></div>
          </div>
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
          <div className=" py-4">
            <p className=" text-xs text-center  text-gray-500">
              People who use our service may have uploaded
            </p>
            <p className=" text-xs text-center  text-gray-500">
              your contact information to Instagram. Learn
            </p>
            <p className="text-xs text-center  text-gray-500">More</p>
          </div>
          <div>
            <p className=" text-xs text-center  text-gray-500">
              By signing up, you agree to our Terms , Privacy
            </p>
            <p className=" text-xs text-center  text-gray-500">
              Policy and Cookies Policy .
            </p>
          </div>
          <button className=" w-64 h-8 bg-blue-400 text-white rounded-md font-semibold mt-4">
            Sign up
          </button>
        </div>
        <div className=" flex flex-row justify-center gap-1 border px-24 py-5">
          <p className=" text-sm ">Have an account?</p>
          <p className=" text-sm font-semibold text-blue-400 hover: cursor-pointer">
            Log in
          </p>
        </div>
        <div className=" my-3">
          <p className="text-sm text-center">Get the app.</p>
          <div className="flex flex-row justify-center items-center my-1">
            <img
              src={google_play}
              alt="Google_play"
              className=" object-fill h-14 hover:cursor-pointer"
            />
            <img
              src={microsoft_badge}
              alt="microsoft_badge"
              className=" object-fill h-10 hover:cursor-pointer"
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

export default SignUp;
