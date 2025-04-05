import {  useSelector } from "react-redux";
import SideBar from "./Sidebar";


const Home = () => {
  const isSidebarOpen = useSelector((state) => state.video.sideBarCondition);
  const videoList = useSelector((state) => state.video.allVideos);
  const categories = useSelector((state) => state.video.categoriesList);


  const formatViews = (views) => {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M views';
    if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K views';
    return views + ' views';
  };

  const formatTimeAgo = (isoDate) => {
    const now = new Date();
    const posted = new Date(isoDate);
    const diffInSeconds = Math.floor((now - posted) / 1000);
  
    const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  
    const months = Math.floor(diffInSeconds / (60 * 60 * 24 * 30));
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  
    const days = Math.floor(diffInSeconds / (60 * 60 * 24));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  
    const hours = Math.floor(diffInSeconds / (60 * 60));
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  
    return 'Just now';
  };
  

  
  return (
    <div className="flex w-full">
      <SideBar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-[64px]" : "md:ml-[16.66%]"
        } w-full`}
      >
        <div className="w-[90%]  overflow-x-auto whitespace-nowrap scrollbar-hidden p-4 ml-6 mt-24">
          <div className="inline-flex space-x-2">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white font-semibold rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-600"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

       {/* Video Grid Container (one grid for all cards) */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-6 px-4 pb-6 w-[80%] xl:w-[90%] mt-4 ml-12">
  {videoList.map((video, index) => (
    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="w-full h-40 bg-gray-700">
        <img
          src={video.thumbnail[0].standard.url}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h1 className="text-sm font-semibold mb-1 line-clamp-2 text-slate-200">
          {video.title}
        </h1>
        <p className="text-xs text-gray-400">{video.channelName}</p>
        <p className="text-xs text-gray-400">
          {formatViews(video.views)} • {formatTimeAgo(video.uploadDate)}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};
export default Home;
