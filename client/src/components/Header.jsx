import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import youtubeLogo from "../assets/youtube-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { updateFilteredVideos, updateSideBar } from "../redux/videoSlice";
import { getUserData, resetUserData } from "../redux/userSlice";
import { isTokenExpired } from "../utils/helper.js";

const Header = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.video.allVideos);
  const user = useSelector((state) => state.user.userData);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hasChannel = useSelector((state) => state.user.userChannel);
    const navigate = useNavigate();
 

  const handleInput = (e) => {
    const text = e.target.value;
    const filteredVideos = videoList.filter((video) =>
      video.title.toLowerCase().includes(text.toLowerCase())
    );
    dispatch(updateFilteredVideos(filteredVideos));
  };

  const handleSideBar = () => {
    dispatch(updateSideBar());
  };

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    dispatch(resetUserData());
    setDropdownOpen(false);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-[#0F0F0F] p-4 text-white fixed top-0 w-full z-50">
        {/* Left: Logo and Sidebar */}
        <div className="flex items-center">
          <GiHamburgerMenu className="hidden xl:block text-white lg:w-[140px] lg:h-[30px]" onClick={handleSideBar} />
          <Link to="/"><img src={youtubeLogo} alt="youtube logo" className="md:w-[100px] lg:w-[140px] w-[90px]" /></Link>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex justify-between items-center w-[43.3333%] rounded-lg bg-white">
          <input
            type="text"
            placeholder="Search"
            className="border-0 p-2 w-[95%] bg-white text-black h-full"
            onChange={handleInput}
          />
          <div className="w-[5%] h-full p-3 align-middle rounded-full text-black mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Right: Avatar or Sign-in */}
        <div className="relative" ref={dropdownRef}>
          {user.length > 0 ? (
            <>
              <img
                src="https://res.cloudinary.com/ddgnliekv/image/upload/v1695296363/Avatar_ia7sam.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#1f1f1f] text-white rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="font-semibold">{user[0].userName}</p>
                    {hasChannel.length > 0 && <p className="text-sm text-gray-400">{hasChannel[0].channelName}</p>}
                    <p className="text-sm text-blue-400 cursor-pointer">
                      {hasChannel.length > 0 ? (
                        <Link to="/channel">view your channel</Link>
                      ) : (
                        <Link to="/new-channel">Create channel</Link>
                      )}
                    </p>
                  </div>
                  <ul className="text-sm">
                    <li onClick={handleSignOut} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                      Sign Out
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Appearance: Dark</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Language</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <button className="border-b-blue-300 border-2 text-blue-500 p-3 rounded-3xl hidden md:block bg-white">
                  Sign in
                </button>
              </Link>
              <Link to="/sign-in">
                <RxAvatar className="md:hidden w-[30px] h-[30px] ml-2 text-white" />
              </Link>
            </>
          )}
        </div>
      </div>

      <hr className="border-t border-slate-200 w-full md:hidden" />
    </>
  );
};

export default Header;
