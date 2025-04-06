import {  useDispatch, useSelector } from "react-redux";
import SideBar from "./Sidebar";
import { formatTimeAgo, formatViews } from "../utils/helper.js";
import { updateFilteredVideos } from "../redux/videoSlice.js";


const Home = () => {
  const isSidebarOpen = useSelector((state) => state.video.sideBarCondition);
  const videoList = useSelector((state) => state.video.allVideos);
  const categories = useSelector((state) => state.video.categoriesList);
  const filteredVideos = useSelector((state)=>state.video.filteredVideos)

  const dispatch = useDispatch();
  const handleCategory=(category)=>{
    const data = videoList.filter((video)=>video.category === category);
    dispatch(updateFilteredVideos(data));
  }


  


  

  
  return (
    <div className="flex w-full">
      <SideBar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "xl:ml-[64px]" : "xl:ml-[16.66%]"
        } w-full`}
      >
       <div className="relative mt-24 px-4 ml-12 xl:w-[80%] 2xl:w-[90%]">
  <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden ">
    <div className="inline-flex space-x-2">
      {categories.map((category) => (
        <div
          key={category}
          className="bg-white font-semibold rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>handleCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  </div>
</div>
 

       {/* Video Grid Container (one grid for all cards) */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 pb-6 w-[90%]  xl:w-[80%] 2xl:w-[90%]  mt-6 ml-6 md:ml-12">
  {(filteredVideos.length > 0 ? filteredVideos:videoList).map((video, index) => (
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
