import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { getVideos } from "./utils/videoSlice.js";
import { useEffect } from "react";

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
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;