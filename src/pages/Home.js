import React from 'react';
import Banner from '../component/Banner/Banner';
import Contact from '../component/Contact/Contact';
import LatestBlog from '../component/LatestBlog/LatestBlog';
import PopularBlog from '../component/PopularBlog.js/PopularBlog';

const Home = () => {
    return (
        <div>
           <Banner/>
           <LatestBlog/>
           <PopularBlog/>
           <Contact/>
        </div>
    );
};

export default Home;