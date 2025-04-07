import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "./redux/videoSlice.js";
import { useEffect } from "react";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import NewChannel from "./components/NewChannel.jsx";
import Channel from "./components/ChannelPage.jsx";
import { isTokenExpired } from "./utils/helper.js";
import { getUserData, resetUserData, updateUserChannel } from "./redux/userSlice.js";
import VideoDetail from "./components/VideoDetail.jsx";

const App = () =>{
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData);
  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch("https://youtube-clone-backend-murex.vercel.app/video");
      const data = await response.json();
      console.log(data);
      dispatch(getVideos(data));
    };
    apiCall();

    const storedUser = localStorage.getItem("userData");
    const storedToken = localStorage.getItem("userToken");

    const initUser = async () => {
      if (storedUser && storedToken) {
        if (isTokenExpired(storedToken)) {
          localStorage.removeItem("userData");
          localStorage.removeItem("userToken");
          dispatch(resetUserData());
        } else {
          if (user.length === 0) {
            try {
              const res = await fetch("https://youtube-clone-backend-murex.vercel.app/channel/check", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: storedToken,
                },
              });

              const data = await res.json();

              if (res.ok) {
                dispatch(getUserData([JSON.parse(storedUser), storedToken]));
                dispatch(updateUserChannel(data));
              } else {
                localStorage.removeItem("userData");
                localStorage.removeItem("userToken");
                dispatch(resetUserData());
              }
            } catch (err) {
              localStorage.removeItem("userData");
              localStorage.removeItem("userToken");
              dispatch(resetUserData());
            }
          }
        }
      }
    };

    initUser();
  }, []);
  return(
    <BrowserRouter>
   
    <Header/>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/new-channel" element={<NewChannel/>}/>
        <Route path="/channel" element={<Channel/>}/>
        <Route path="/video/:id" element={<VideoDetail />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;