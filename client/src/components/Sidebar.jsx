import { MdHomeFilled, MdSubscriptions, MdHistory, MdPlaylistPlay, MdOutlineVideoSettings, MdOutlineWatchLater    } from "react-icons/md";
import { SiYoutubeshorts, SiYoutubemusic  } from "react-icons/si";
import { LiaDownloadSolid } from "react-icons/lia";




const SideBar = ({isSidebarOpen}) => {
  return (
    <>
       {/* Fully Expanded Sidebar for large screens */}
       {!isSidebarOpen && (
       <div className="hidden xl:flex flex-col bg-gray-700 text-white w-1/6 fixed top-[72px] left-0 h-[calc(100vh-72px)] p-2 space-y-2">
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdHomeFilled className="text-xl" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <SiYoutubeshorts className="text-xl" />
            <span>Shorts</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdSubscriptions className="text-xl" />
            <span>Subscriptions</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <SiYoutubemusic className="text-xl" />
            <span>YouTube Music</span>
          </div>

          <hr className="border-1 border-white  w-full"  />
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdOutlineVideoSettings className="text-xl" />
            <span>Your Videos</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdHistory className="text-xl" />
            <span>Your History</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdPlaylistPlay className="text-xl" />
            <span>playLists</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <MdOutlineWatchLater className="text-xl" />
            <span>Watch Later</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded cursor-pointer">
            <LiaDownloadSolid className="text-xl" />
            <span>Downloads</span>
          </div>
        </div>
      )}

      {/* Collapsed Sidebar (mimics mobile view) on large screen */}
      {isSidebarOpen && (
       <div className="hidden xl:flex flex-col items-center bg-gray-700 text-white w-[69px] fixed top-[72px] left-0 h-[calc(100vh-72px)] pt-4 space-y-6">
          <div className="flex flex-col items-center text-xs">
            <MdHomeFilled className="text-xl mb-1" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <SiYoutubeshorts className="text-xl mb-1" />
            <span>Shorts</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <MdSubscriptions className="text-xl mb-1" />
            <span>Subscriptions</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <SiYoutubemusic className="text-xl mb-1" />
            <span>Music</span>
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar */}
      <div className="flex xl:hidden fixed bottom-0 left-0 w-full bg-[#0F0F0F] text-white justify-around py-2 border-t border-gray-700">
        <div className="flex flex-col items-center text-xs">
          <MdHomeFilled className="text-xl mb-1" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <SiYoutubeshorts className="text-xl mb-1" />
          <span>Shorts</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <MdSubscriptions className="text-xl mb-1" />
          <span>Subscriptions</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <SiYoutubemusic className="text-xl mb-1" />
          <span>Music</span>
        </div>
      </div>
    </>
  );
};
export default SideBar;
