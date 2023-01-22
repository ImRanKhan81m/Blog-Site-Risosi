import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./component/Shared/Navbar";
import Footer from "./component/Shared/Footer";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./Dashboard/Dashboard";
import AllBlogs from "./Dashboard/AllBlogs";
import PostBlog from "./Dashboard/PostBlog";
import BlogWiseComments from "./Dashboard/BlogWiseComments";
import PendingComments from "./Dashboard/PendingComments";



const articleDataContext = createContext();
function App() {
  const [blogs, setBlogs] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);



  useEffect(() => {
    fetch("http://localhost:5000/api/v1/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data?.data?.blogs);
      });
  }, []);



  console.log(dark)

  const valueObj = {
    setDark,
    dark,
    blogs
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

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="all-blogs" element={<AllBlogs />} />
            <Route path="post-blog" element={<PostBlog />} />
            <Route path='blog-comments' element={<BlogWiseComments />} />
            <Route path='pending-comments' element={<PendingComments />} />
          </Route>


        </Routes>



      </articleDataContext.Provider>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
export { articleDataContext };