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

  console.log(dark)

  const valueObj = {
    setDark
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