import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChannelVideos } from "../redux/videoSlice";
import { FaEllipsisV } from "react-icons/fa";

const ThreeDotMenu = ({ video }) => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const menuRef = useRef(null);

  const userToken = useSelector((state) => state.user.userToken);
  const channelData = useSelector((state) => state.user.userChannel);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchUpdatedVideos = async () => {
    const res = await fetch(`http://localhost:1028/channel/${channelData[0]._id}`);
    const data = await res.json();
    dispatch(updateChannelVideos(data));
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:1028/video/${video._id}`, {
      method: "DELETE",
      headers: {
        Authorization: userToken,
      },
    });
    setOpen(false);
    fetchUpdatedVideos();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
  
    const updatedData = {};
    if (title.trim()) updatedData.title = title.trim();
    if (description.trim()) updatedData.description = description.trim();
  
    if (Object.keys(updatedData).length === 0) {
      setEditMode(false);
      return;
    }
  
    await fetch(`http://localhost:1028/video/${video._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
      body: JSON.stringify(updatedData),
    });
  
    setEditMode(false);
    fetchUpdatedVideos();
  };
  

  return (
    <div className="relative" ref={menuRef}>
      {/* 3 Dots Button */}
      <button onClick={() => setOpen(!open)} className="text-white mt-2 ml-2">
        <FaEllipsisV />
      </button>

      {/* Dropdown Menu */}
      {open && (
  <div className="absolute top-full right-0 flex gap-3 bg-gray-900 p-2 rounded shadow-lg z-50">
    {/* Edit (Pencil Icon) */}
    <button
      onClick={() => {
        setEditMode(true);
        setOpen(false);
      }}
      className="text-blue-400 hover:text-blue-600"
      title="Edit"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2m4 0h2m-2 0v2m0-2h-2m-8 0H7m0 0v2m0-2h2m1 5l6 6M4 20h4l10-10-4-4L5 16H4v4z" />
      </svg>
    </button>

    {/* Delete (Trash Bin Icon) */}
    <button
      onClick={handleDelete}
      className="text-red-400 hover:text-red-600"
      title="Delete"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7h12M9 7V4h6v3m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z" />
      </svg>
    </button>
  </div>
)}
      {/* Edit Modal */}
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <form
            onSubmit={handleEdit}
            className="bg-gray-800 p-6 rounded-lg w-full max-w-md space-y-4"
          >
            <h2 className="text-lg font-bold text-white">Edit Video</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Description"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
