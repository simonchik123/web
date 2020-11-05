import React, {useEffect} from 'react';

const Home = ()=>{
    useEffect(()=>{
        document.title = 'Notedly';
    });

    return(
        <div>            
            <p>Это домашняя страница</p>
        </div>
    )
}

export default Home;