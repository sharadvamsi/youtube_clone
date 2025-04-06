import { useDispatch, useSelector } from "react-redux";
import SideBar from "./Sidebar";
import ThreeDotMenu from "./ThreeDotMenu";
import {
  formatSubscribers,
  formatTimeAgo,
  formatViews,
} from "../utils/helper.js";
import { updateChannelVideos } from "../redux/videoSlice.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Channel = () => {
  const isSidebarOpen = useSelector((state) => state.video.sideBarCondition);
  const userData = useSelector((state) => state.user.userData);
  const channelData = useSelector((state) => state.user.userChannel);
  const userToken = useSelector((state) => state.user.userToken);
  const channelVideos = useSelector((state) => state.video.channelVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (channelData.length > 0) {
      const response = async () => {
        const api = await fetch(
          `http://localhost:1028/channel/${channelData[0]._id}`
        );
        const data = await api.json();
        dispatch(updateChannelVideos(data));
      };
      response();
    }
  }, [channelData]);

  // ✅ Guard to prevent crash on reload
  if (userData.length === 0 || channelData.length === 0) {
    return (
      <div className="text-white mt-24 ml-6 text-xl">
        Loading channel info...
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <SideBar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "xl:ml-[64px]" : "xl:ml-[16.66%]"
        } w-full`}
      >
        {/* Banner */}
        <div className="mt-24 w-full h-56 bg-gray-800 overflow-hidden">
          <img
            src="https://res.cloudinary.com/ddgnliekv/image/upload/v1743929174/elhfdywlif6srrhe44jr.png"
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Channel Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 border-b border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <img
              src="https://res.cloudinary.com/ddgnliekv/image/upload/v1695296363/Avatar_ia7sam.png"
              alt="channel-avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-white">
                {channelData[0].channelName}
              </h2>
              <p className="text-sm text-gray-400">{userData[0].userName}</p>
              <p className="text-sm text-gray-400">
                {formatSubscribers(channelData[0].subscribers)} •{" "}
                {channelVideos.length} videos
              </p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200">
            Subscribe
          </button>
        </div>

        {/* Video Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 pb-6 w-[90%] xl:w-[80%] 2xl:w-[90%] mt-6 ml-6 md:ml-12">
        {channelVideos.map((video, index) => (
            <Link to={`/video/${video._id}`} key={index}>
    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
      
      {/* Thumbnail */}
      <div className="w-full h-40 bg-gray-700">
        <img
          src={video.thumbnail[0].standard.url}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info + ThreeDotMenu */}
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-sm font-semibold mb-1 line-clamp-2 text-slate-200">
              {video.title}
            </h1>
            <p className="text-xs text-gray-400">{video.channelName}</p>
            <p className="text-xs text-gray-400">
              {formatViews(video.views)} • {formatTimeAgo(video.uploadDate)}
            </p>
          </div>

          {/* ThreeDotMenu Component */}
          <ThreeDotMenu video={video} />
        </div>
      </div>
      
    </div></Link>
  ))}

        </div>
      </div>
    </div>
  );
};

export default Channel;
