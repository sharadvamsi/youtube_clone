import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  formatSubscribers,
  formatViews,
  formatTimeAgo,
  extractYouTubeId,
} from "../utils/helper";
import CommentItem from "../components/CommentItem";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const user = useSelector((state) => state.user.userData[0]);
  const token = useSelector((state) => state.user.userToken);

  const fetchVideo = async () => {
    const res = await fetch(`https://youtube-clone-backend-murex.vercel.app/video/${id}`);
    const data = await res.json();
    setVideo(data);
    setComments(data.comments);

    const related = await fetch(
      `https://youtube-clone-backend-murex.vercel.app/channel/${data.channelId}`
    );
    const relatedData = await related.json();
    setRelatedVideos(relatedData);
  };

  useEffect(() => {
    fetchVideo();
  }, [id]);

  if (!video)
    return <div className="text-white mt-24 ml-6 text-xl">Loading video...</div>;

  return (
    <div className="flex flex-col lg:flex-row w-full mt-24 px-4 gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-[70%]">
        {/* Video Player */}
        <div className="w-full h-64 md:h-[400px] bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${extractYouTubeId(
              video.videoUrl
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-white mt-4 mb-2">
          {video.title}
        </h1>

        {/* Channel + Actions */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
          <div>
            <p className="text-white font-bold">{video.channelName}</p>
            <p className="text-sm text-gray-400">
              {formatSubscribers(video.subscribers)}
            </p>
          </div>

          <div className="flex gap-4 text-white mt-2 md:mt-0">
            <button className="hover:text-blue-400">👍 {video.likes}</button>
            <button className="hover:text-red-400">👎 {video.dislikes}</button>
            <button className="hover:text-green-400">🔗 Share</button>
            <button className="hover:text-yellow-400">⬇️ Download</button>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-300 mb-6">
        <h2 className="text-lg font-bold text-white mb-3">Description</h2>
          {video.description.split(" ").slice(0, 50).join(" ")}
          {video.description.split(" ").length > 300 ? "..." : ""}
        </div>

        {/* Add Comment */}
        {user && (
          <div className="mb-6">
            <textarea
              className="w-full p-2 rounded bg-gray-700 text-white"
              rows={2}
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={async () => {
                if (!newComment.trim()) return;
                await fetch("https://youtube-clone-backend-murex.vercel.app/comment/add/", {
                  method: "POST",
                  headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    videoId: id,
                    comment: newComment,
                  }),
                });
                setNewComment("");
                fetchVideo();
              }}
            >
              Add Comment
            </button>
          </div>
        )}

        {/* Comments */}
       <h2 className="text-lg font-bold text-white mb-3">Comments</h2>
        <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
          {comments.map((comment, idx) => (
            <CommentItem
              key={idx}
              comment={comment}
              userId={user?._id}
              token={token}
              refreshComments={fetchVideo}
            />
          ))}
        </div>
      </div>

      {/* Right Section (Related Videos) */}
      <div className="w-full lg:w-[30%] space-y-4">
        {relatedVideos.map((vid, index) => (
          <div
            key={index}
            className="flex gap-3 cursor-pointer bg-gray-800 rounded p-2"
            onClick={() => (window.location.href = `/video/${vid._id}`)}
          >
            <img
              src={vid.thumbnail[0].standard.url}
              alt={vid.title}
              className="w-28 h-20 object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-white text-sm font-semibold line-clamp-2">
                {vid.title}
              </h3>
              <p className="text-xs text-gray-400">{vid.channelName}</p>
              <p className="text-xs text-gray-400">
                {formatViews(vid.views)} • {formatTimeAgo(vid.uploadDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
