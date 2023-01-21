import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./component/Shared/Navbar";
import Footer from "./component/Shared/Footer";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";



const articleDataContext = createContext();
function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [dark, setDark] = useState(false);

  console.log(dark)

  const valueObj = {
    setDark,
    dark
  };


  return (
    <div data-theme={dark ? "dark" : "light"}>
      <ScrollToTop />
      <articleDataContext.Provider value={valueObj}>
        {/* <Header setDark={setDark} dark={dark} setTheme={setTheme} /> */}
        <Navbar />

        <Routes preserverScrollPosition={false}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path='/blog-details/:id' element={<BlogDetails />}></Route>

        </Routes>
      </articleDataContext.Provider>
      <Toaster />
      <Footer/>
    </div>
  );
}

export default App;
export { articleDataContext };