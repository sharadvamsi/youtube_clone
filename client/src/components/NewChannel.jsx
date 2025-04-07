import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewChannel = () => {
  const [channelName, setChannelName] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  const handleCreateChannel = async () => {
    if (!channelName.trim()) return;

    try {
      const res = await fetch("https://youtube-clone-backend-murex.vercel.app/channel/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ channelName }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Channel created successfully");
        navigate("/");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] text-white">
      <div className="bg-[#1F1F1F] p-8 rounded-xl shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create a Channel</h2>
        <input
          type="text"
          placeholder="Enter channel name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-white text-black"
        />
        <button
          onClick={handleCreateChannel}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewChannel;
