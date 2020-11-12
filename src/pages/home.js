import React, {useEffect} from 'react';
import Button from '../component/button';

const Home = ()=>{
    useEffect(()=>{
        document.title = 'Notedly';
    });

    return(
        <div>            
            <p>Это домашняя страница</p>
            <Button>Кликни меня!</Button>
        </div>
    )
}

export default Home;