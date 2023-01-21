import React from 'react';
import Banner from '../component/Banner/Banner';
import LatestBlog from '../component/LatestBlog/LatestBlog';
import PopularBlog from '../component/PopularBlog.js/PopularBlog';

const Home = () => {
    return (
        <div>
           <Banner/>
           <LatestBlog/>
           <PopularBlog/>
        </div>
    );
};

export default Home;