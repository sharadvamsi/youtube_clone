import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUserData, updateUserChannel } from "../redux/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };
    try {
      const response = await fetch("https://youtube-clone-backend-murex.vercel.app/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
  
      if (response.ok) {
        console.log("Login Success:", data);
  
        // ✅ Only store in localStorage
        localStorage.setItem("userData", JSON.stringify(data[0]));
        localStorage.setItem("userToken", data[1]);
  
        toast.success("Login successful!");
        dispatch(getUserData(data));
        try {
            const channelRes = await fetch("https://youtube-clone-backend-murex.vercel.app/channel/check", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${data[1]}`,
              },
            });
            const channelData = await channelRes.json();
            if (channelRes.ok) {
              dispatch(updateUserChannel(channelData));
            }
          } catch (err) {
            console.error("Error fetching channel:", err);
          }
        setTimeout(() => navigate("/"), 1500);
      } else if (data?.message) {
        toast.error(data.message);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Network error or server down.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md bg-gray-800 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
