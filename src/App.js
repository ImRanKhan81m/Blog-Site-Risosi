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



const articleDataContext = createContext();
function App() {

  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  const [authUser] = useAuthState(auth);
  const [categoryArticle, setCategoryArticle] = useState([]);
  const [loader, setLoader] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [premiumMember, setPremiumMember] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  // making theme dark
  const [dark, setDark] = useState(false);
  // localStorage.setItem('theme', dark);
  useEffect(() => {
    fetch("https://exclusive-xylia-ayonjd.koyeb.app/theme")
      .then((res) => res.json())
      .then((data) => {
        setDark(data[0].theme);
      });
  }, []);

  const setTheme = () => {
    fetch(
      "https://exclusive-xylia-ayonjd.koyeb.app/theme/62d829c706b5a80f8247a020",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          theme: !dark,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDark(!dark);
      });
  };

  // fetching all articles
  useEffect(() => {
    // setLoader(true);
    fetch("https://exclusive-xylia-ayonjd.koyeb.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoader(false);
      });
  }, []);

  // fetching all users
  useEffect(() => {
    // setLoader(true);
    fetch("https://exclusive-xylia-ayonjd.koyeb.app/users")
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setUsers(data);
      });
  }, []);

  //fetching all the premium users
  useEffect(() => {
    fetch("https://exclusive-xylia-ayonjd.koyeb.app/purches")
      .then((res) => res.json())
      .then((data) => {
        setPremiumMember(data);
      }
      );
  }, []);

  useEffect(() => {
    premiumMember?.find((user) => {
      if (user?.buyer?.email === signedInUser?.email) {
        setTransactionId(user.transactionId);
      }
    }
    );
  })

  const valueObj = {
    articles,
    searchValue,
    setArticles,
    setSearchValue,
    users,
    signedInUser,
    setSignedInUser,
    dark,
    setCategoryArticle,
    categoryArticle,
    loader,
    transactionId,
    premiumMember,
    setTransactionId,
  };

  const compareUser = useMemo(() => {
    return users?.find(user => user?.userInfo?.email === authUser?.email)
  }, [authUser, users])

  // console.log(compareUser)
  useEffect(() => {
    setSignedInUser(compareUser)
  }, [compareUser])

  // console.log(signedInUser);


  return (
    <div data-theme={dark ? "dark" : "light"}>
      <ScrollToTop />
      <articleDataContext.Provider value={valueObj}>
        {/* <Header setDark={setDark} dark={dark} setTheme={setTheme} /> */}
        <Navbar />

        <Routes preserverScrollPosition={false}>
          <Route path="/" element={<Home />}></Route>

        </Routes>
      </articleDataContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
export { articleDataContext };