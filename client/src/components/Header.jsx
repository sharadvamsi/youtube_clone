import youtubeLogo from '../assets/youtube-logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { updateSideBar } from '../utils/videoSlice.js';

const Header = () => {
    const dispatch = useDispatch();

    const handleSideBar = ()=>{
        dispatch(updateSideBar())
    }
    return (
        <>
        <div className="flex justify-between items-center bg-[#0F0F0F] p-4 text-white fixed top-0 w-full z-50">

            <div className="flex items-center">
                <GiHamburgerMenu className="hidden md:block text-white lg:w-[140px] lg:h-[30px]" onClick={handleSideBar}/>
                <img src={youtubeLogo} alt="youtube logo" className="md:w-[100px] lg:w-[140px] w-[90px]" />
            </div>
            <div className="flex justify-between items-center w-[43.3333%] rounded-lg bg-white">
                <input
                    type="text"
                    placeholder="Search"
                    className="border-0 p-2 w-[95%] bg-white text-black h-full"
                />
                <div className="w-[5%] h-full p-3 align-middle rounded-full text-black mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
            </div>
            <div>
                <button className="border-b-blue-300 border-2 text-blue-500 p-3 rounded-3xl hidden md:block bg-white">
                    Sign in
                </button>
                <RxAvatar className="md:hidden w-[30px] h-[30px] ml-2 text-white" />
            </div>
        </div>
        <hr className="border-t border-slate-200  w-full md:hidden"  />
        </>
    );
};

export default Header;
