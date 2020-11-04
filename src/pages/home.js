import React from 'react';
import Header from '../component/header';
import Navigation from '../component/navigation';

const Home = ()=>{
    return(
        <div>
            <Header/>
            <Navigation/>
            <p>Это домашняя страница</p>
        </div>
    )
}

export default Home;