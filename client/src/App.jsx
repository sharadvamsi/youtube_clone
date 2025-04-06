import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { getVideos } from "./redux/videoSlice.js";
import { useEffect } from "react";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

const App = () =>{
  const dispatch = useDispatch()
  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch("http://localhost:1028/video");
      const data = await response.json();
      console.log(data);
      dispatch(getVideos(data));
    };
    apiCall();
  }, []);
  return(
    <BrowserRouter>
   
    <Header/>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;